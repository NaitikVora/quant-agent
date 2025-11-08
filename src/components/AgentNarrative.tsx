import { AgentResponse, CrisisScenario } from '@/types';
import { Bot, TrendingUp, TrendingDown, AlertTriangle, Lightbulb, ChevronRight } from 'lucide-react';

interface AgentNarrativeProps {
  response: AgentResponse | null;
  scenario: CrisisScenario | null;
  capital: number;
}

export default function AgentNarrative({ response, scenario, capital }: AgentNarrativeProps) {
  if (!response || !scenario) {
    return (
      <div className="agent-narrative">
        <div className="flex items-center gap-3 mb-4">
          <Bot className="h-6 w-6 text-blue-400" />
          <h2 className="text-xl font-bold text-gray-100">AI Agent Analysis</h2>
        </div>
        <div className="text-center py-12 text-gray-500">
          <p>Make a decision to see the AI agent's analysis</p>
        </div>
      </div>
    );
  }

  const isProfitable = response.pnl >= 0;

  return (
    <div className="agent-narrative">
      <div className="flex items-center gap-3 mb-6">
        <Bot className="h-6 w-6 text-blue-400" />
        <h2 className="text-xl font-bold text-gray-100">AI Agent Analysis</h2>
      </div>

      {/* P&L Card */}
      <div className={`pnl-card ${isProfitable ? 'pnl-positive' : 'pnl-negative'}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Outcome</span>
          {isProfitable ? (
            <TrendingUp className="h-5 w-5 text-emerald-400" />
          ) : (
            <TrendingDown className="h-5 w-5 text-red-400" />
          )}
        </div>
        <div className="flex items-baseline gap-3">
          <span className={`text-3xl font-bold ${isProfitable ? 'text-emerald-400' : 'text-red-400'}`}>
            {isProfitable ? '+' : ''}{response.pnl.toLocaleString()}
          </span>
          <span className="text-gray-500">credits</span>
        </div>
        <div className={`text-sm ${isProfitable ? 'text-emerald-400' : 'text-red-400'}`}>
          {isProfitable ? '+' : ''}{response.pnlPct.toFixed(2)}% of capital
        </div>
        <div className="mt-3 pt-3 border-t border-gray-700">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">New Capital</span>
            <span className="text-gray-200 font-semibold">${response.capitalAfter.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="narrative-section">
        <h3 className="section-title">What Happened</h3>
        <p className="text-gray-300 leading-relaxed">{response.summary}</p>
      </div>

      {/* Next Events */}
      {response.nextEvents && response.nextEvents.length > 0 && (
        <div className="narrative-section">
          <h3 className="section-title">
            <ChevronRight className="inline h-4 w-4" />
            What's Coming
          </h3>
          <ul className="space-y-2">
            {response.nextEvents.map((event, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <span className="text-blue-400 mt-1">•</span>
                <span>{event}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Better Alternative */}
      <div className="narrative-section">
        <h3 className="section-title">
          <Lightbulb className="inline h-4 w-4 text-yellow-400" />
          Coach's Insight
        </h3>
        <p className="text-gray-300 leading-relaxed">{response.betterAlternative}</p>
      </div>

      {/* Risk Callout */}
      <div className="risk-callout">
        <AlertTriangle className="h-5 w-5 text-orange-400 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-orange-300 mb-1">Risk Management</h4>
          <p className="text-sm text-gray-300">{response.riskCallout}</p>
        </div>
      </div>

      {/* Mission Status */}
      {response.missionComplete && (
        <div className="mission-complete-banner">
          <div className="text-center">
            <h3 className="text-xl font-bold text-emerald-400 mb-2">Mission Complete!</h3>
            <p className="text-gray-300 mb-3">
              You survived {scenario.name} with ${response.capitalAfter.toLocaleString()}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="text-gray-400">
                Return: <span className={capital > 100000 ? 'text-emerald-400' : 'text-red-400'}>
                  {((response.capitalAfter - 100000) / 1000).toFixed(1)}%
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
