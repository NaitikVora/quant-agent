import Anthropic from '@anthropic-ai/sdk';
import { CrisisScenario, AgentResponse } from '@/types';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true
});

export interface AnalyzeDecisionInput {
  scenario: CrisisScenario;
  decision: string;
  stageIndex: number;
  capital: number;
  allocation: number;
}

export async function analyzeDecision(input: AnalyzeDecisionInput): Promise<AgentResponse> {
  const { scenario, decision, stageIndex, capital, allocation } = input;
  const currentEvent = scenario.keyEvents[stageIndex];
  const nextEvent = scenario.keyEvents[stageIndex + 1];
  const indicators = scenario.economicIndicators;

  const prompt = `You are an expert quantitative trading coach analyzing a trader's decision during the ${scenario.name}.

CURRENT SITUATION:
- Mission: ${scenario.name} (${scenario.description})
- Current Stage: ${currentEvent.title} (${currentEvent.date})
- Event: ${currentEvent.description}
- Market Impact: ${currentEvent.impact} (${currentEvent.marketReaction}% move)
- Trader's Capital: $${capital.toLocaleString()}
- Allocation: $${allocation.toLocaleString()} (${((allocation/capital)*100).toFixed(1)}%)

ECONOMIC INDICATORS:
${indicators.map(ind => `- ${ind.name}: ${ind.value}${ind.unit} (${ind.change >= 0 ? '+' : ''}${ind.change}${ind.unit}) - ${ind.description}`).join('\n')}

TRADER'S DECISION:
"${decision}"

TASK:
Analyze this decision and provide:
1. A brief summary (2-3 sentences) of what happened after their decision
2. Calculate realistic profit/loss based on:
   - Their decision alignment with market direction
   - The allocation size
   - The market reaction (${currentEvent.marketReaction}%)
3. What better alternative strategy could they have used?
4. A risk management callout specific to their approach
5. What happens next in the crisis${nextEvent ? ` (hint: ${nextEvent.title})` : ' (mission ending)'}

RESPONSE FORMAT (JSON):
{
  "summary": "Brief narrative of outcome",
  "pnlPct": <number between -20 and 20>,
  "betterAlternative": "Specific actionable advice",
  "riskCallout": "Risk management insight",
  "nextEvents": ["Event 1", "Event 2"]
}

Be realistic, educational, and engaging. Make it feel like a game where decisions matter.`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type');
    }

    // Extract JSON from response
    const jsonMatch = content.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }

    const analysis = JSON.parse(jsonMatch[0]);

    // Calculate actual P&L
    const pnlPct = Math.max(-20, Math.min(20, analysis.pnlPct || 0));
    const pnl = Math.round((capital * pnlPct) / 100);
    const capitalAfter = Math.max(0, capital + pnl);

    const missionComplete = stageIndex >= scenario.keyEvents.length - 1;
    const nextStageIndex = missionComplete ? stageIndex : stageIndex + 1;

    return {
      stageTitle: currentEvent.title,
      summary: analysis.summary || 'Market moved based on your decision.',
      pnl,
      pnlPct,
      capitalAfter,
      betterAlternative: analysis.betterAlternative || 'Consider diversifying your approach.',
      riskCallout: analysis.riskCallout || 'Always manage your risk.',
      nextEvents: analysis.nextEvents || (nextEvent ? [nextEvent.title] : ['Mission Complete']),
      nextStageIndex,
      missionComplete
    };
  } catch (error) {
    console.error('AI Analysis failed:', error);

    // Fallback to rule-based analysis
    return fallbackAnalysis(input);
  }
}

function fallbackAnalysis(input: AnalyzeDecisionInput): AgentResponse {
  const { scenario, decision, stageIndex, capital, allocation } = input;
  const currentEvent = scenario.keyEvents[stageIndex];
  const nextEvent = scenario.keyEvents[stageIndex + 1];

  // Simple sentiment analysis
  const bearishWords = ['sell', 'short', 'hedge', 'protect', 'exit', 'defensive'];
  const bullishWords = ['buy', 'long', 'accumulate', 'opportunity'];

  const decisionLower = decision.toLowerCase();
  const isBearish = bearishWords.some(word => decisionLower.includes(word));
  const isBullish = bullishWords.some(word => decisionLower.includes(word));

  // Calculate P&L based on alignment
  const marketDown = currentEvent.marketReaction < 0;
  const allocationPct = allocation / capital;

  let multiplier = 0;
  if (marketDown && isBearish) multiplier = 1.2;  // Good defensive play
  else if (!marketDown && isBullish) multiplier = 1.0;  // Good timing
  else if (marketDown && isBullish) multiplier = -1.5;  // Caught wrong-footed
  else multiplier = -0.5;  // Missed opportunity

  const pnlPct = Math.max(-20, Math.min(20, currentEvent.marketReaction * multiplier * allocationPct));
  const pnl = Math.round((capital * pnlPct) / 100);
  const capitalAfter = Math.max(0, capital + pnl);

  const missionComplete = stageIndex >= scenario.keyEvents.length - 1;
  const nextStageIndex = missionComplete ? stageIndex : stageIndex + 1;

  return {
    stageTitle: currentEvent.title,
    summary: pnl >= 0
      ? `Your ${isBearish ? 'defensive' : 'offensive'} positioning worked. ${currentEvent.title} unfolded as you anticipated, earning ${Math.abs(pnl).toLocaleString()} credits.`
      : `Market moved against you. ${currentEvent.title} caught you wrong-footed, costing ${Math.abs(pnl).toLocaleString()} credits.`,
    pnl,
    pnlPct,
    capitalAfter,
    betterAlternative: isBearish
      ? 'Consider scaling entries to capture rebounds while maintaining protection.'
      : 'Size positions smaller during high volatility and keep dry powder for opportunities.',
    riskCallout: allocationPct > 0.5
      ? `You allocated ${(allocationPct * 100).toFixed(0)}% of capital. Consider reducing position sizing in volatile conditions.`
      : 'Your conservative sizing provides room to add on conviction or absorb drawdowns.',
    nextEvents: nextEvent ? [nextEvent.title, nextEvent.description] : ['Mission Complete - Analyze your performance'],
    nextStageIndex,
    missionComplete
  };
}
