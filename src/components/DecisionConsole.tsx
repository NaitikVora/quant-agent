import { useState, FormEvent } from 'react';
import { CrisisScenario } from '@/types';
import { Send, DollarSign, TrendingUp, Calendar, AlertCircle } from 'lucide-react';

interface DecisionConsoleProps {
  scenario: CrisisScenario | null;
  stageIndex: number;
  capital: number;
  onSubmit: (decision: string, allocation: number) => void;
  disabled?: boolean;
}

export default function DecisionConsole({
  scenario,
  stageIndex,
  capital,
  onSubmit,
  disabled
}: DecisionConsoleProps) {
  const [decision, setDecision] = useState('');
  const [allocation, setAllocation] = useState(50);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!decision.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const allocationAmount = Math.round((allocation / 100) * capital);
    await onSubmit(decision, allocationAmount);
    setDecision('');
    setIsSubmitting(false);
  };

  if (!scenario) {
    return (
      <div className="decision-console">
        <div className="text-center py-12 text-gray-500">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Select a mission to begin your simulation</p>
        </div>
      </div>
    );
  }

  const currentEvent = scenario.keyEvents[stageIndex];
  const allocationAmount = Math.round((allocation / 100) * capital);

  return (
    <div className="decision-console">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-100">Market Brief</h2>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-400">
              <Calendar className="inline h-4 w-4 mr-1" />
              {currentEvent.date}
            </span>
            <span className="text-emerald-400">
              <DollarSign className="inline h-4 w-4" />
              {capital.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="brief-card mb-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg text-gray-100">{currentEvent.title}</h3>
            <span className={`impact-badge impact-${currentEvent.impact}`}>
              {currentEvent.impact}
            </span>
          </div>
          <p className="text-gray-300 mb-4">{currentEvent.description}</p>

          <div className="grid grid-cols-2 gap-4">
            {scenario.economicIndicators.slice(0, 4).map((indicator, i) => (
              <div key={i} className="indicator-item">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{indicator.name}</span>
                  <span className={`text-sm font-semibold ${
                    indicator.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {indicator.change >= 0 ? '+' : ''}{indicator.change}{indicator.unit}
                  </span>
                </div>
                <div className="text-lg font-bold text-gray-200">
                  {indicator.value}{indicator.unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Your Strategy Decision
          </label>
          <textarea
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
            placeholder="Describe your trading move... (e.g., 'Buy SPY puts to hedge downside risk' or 'Go long tech stocks, this is an overreaction')"
            className="decision-input"
            rows={4}
            disabled={disabled || isSubmitting}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-300">
              Capital Allocation
            </label>
            <span className="text-emerald-400 font-mono">
              ${allocationAmount.toLocaleString()} ({allocation}%)
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={allocation}
            onChange={(e) => setAllocation(Number(e.target.value))}
            className="allocation-slider"
            disabled={disabled || isSubmitting}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Conservative</span>
            <span>Aggressive</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={!decision.trim() || disabled || isSubmitting}
          className="submit-button"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? 'Analyzing...' : 'Execute Decision'}
          <TrendingUp className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
