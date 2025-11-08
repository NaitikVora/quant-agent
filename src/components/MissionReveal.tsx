import { CrisisScenario } from '@/types';
import { Sparkles, Book, ChevronRight } from 'lucide-react';

interface MissionRevealProps {
  scenario: CrisisScenario;
}

export default function MissionReveal({ scenario }: MissionRevealProps) {
  return (
    <div className="mission-reveal p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="h-6 w-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Mission Revealed
        </h2>
      </div>

      {/* Real Mission Name */}
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-1">You just survived:</div>
        <div className="text-3xl font-bold text-gray-100 mb-2">{scenario.name}</div>
        <div className="text-sm text-gray-400">
          Previously known as: <span className="text-purple-400">{scenario.maskedName}</span>
        </div>
      </div>

      {/* Real-world Summary */}
      <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
        <div className="flex items-center gap-2 mb-3">
          <Book className="h-4 w-4 text-blue-400" />
          <h3 className="font-semibold text-gray-100">What Really Happened</h3>
        </div>
        <p className="text-gray-300 leading-relaxed text-sm">{scenario.realWorldSummary}</p>
      </div>

      {/* Event Timeline Reveal */}
      <div>
        <h3 className="font-semibold text-gray-100 mb-3 flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          Event Timeline
        </h3>
        <div className="space-y-3">
          {scenario.keyEvents.map((event, index) => (
            <div
              key={index}
              className="p-3 bg-gray-800/30 rounded border border-gray-700/50 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">{event.date}</div>
                  <div className="font-semibold text-gray-100 mb-1">{event.title}</div>
                  <div className="text-xs text-purple-400 mb-1">
                    Played as: {event.maskedTitle}
                  </div>
                  <div className="text-xs text-gray-400">{event.description}</div>
                </div>
                <span className={`text-xs px-2 py-1 rounded impact-badge impact-${event.impact}`}>
                  {event.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Note */}
      <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
        <div className="text-sm text-blue-300">
          <strong>Learning Takeaway:</strong> By masking the event names, you experienced the crisis
          from a trader's perspective - making decisions under uncertainty without hindsight bias.
          Now you can study how your decisions compared to real-world outcomes and improve your
          trading strategies for future scenarios.
        </div>
      </div>
    </div>
  );
}
