export interface CrisisScenario {
  id: string;
  name: string;
  code: string;
  description: string;
  startDate: string;
  endDate: string;
  duration: string;
  maxDrawdown: string;
  volatility: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Extreme';
  keyEvents: KeyEvent[];
  economicIndicators: EconomicIndicator[];
}

export interface KeyEvent {
  date: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high' | 'extreme';
  marketReaction: number;
}

export interface EconomicIndicator {
  name: string;
  value: number;
  unit: string;
  change: number;
  description: string;
}

export interface DecisionRecord {
  id: string;
  missionId: string;
  missionName: string;
  stageIndex: number;
  stageTitle: string;
  decision: string;
  allocation: number;
  capitalBefore: number;
  capitalAfter: number;
  pnl: number;
  pnlPct: number;
  aiSummary: string;
  betterAlternative: string;
  riskCallout: string;
  timestamp: string;
}

export interface AgentResponse {
  stageTitle: string;
  summary: string;
  pnl: number;
  pnlPct: number;
  capitalAfter: number;
  betterAlternative: string;
  riskCallout: string;
  nextEvents: string[];
  nextStageIndex: number;
  missionComplete: boolean;
}
