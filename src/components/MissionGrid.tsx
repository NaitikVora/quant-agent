import { CrisisScenario } from '@/types';
import { TrendingDown, AlertTriangle } from 'lucide-react';

interface MissionGridProps {
  missions: CrisisScenario[];
  selectedMissionId?: string;
  onSelect: (mission: CrisisScenario) => void;
}

export default function MissionGrid({ missions, selectedMissionId, onSelect }: MissionGridProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Extreme': return 'bg-red-500/10 border-red-500 text-red-400';
      case 'Hard': return 'bg-orange-500/10 border-orange-500 text-orange-400';
      case 'Medium': return 'bg-yellow-500/10 border-yellow-500 text-yellow-400';
      default: return 'bg-green-500/10 border-green-500 text-green-400';
    }
  };

  return (
    <div className="mission-grid">
      <h2 className="text-xl font-bold mb-4 text-gray-200">
        <AlertTriangle className="inline-block mr-2 h-5 w-5" />
        Select Mission
      </h2>
      <div className="space-y-3">
        {missions.map((mission) => (
          <button
            key={mission.id}
            onClick={() => onSelect(mission)}
            className={`mission-card ${
              selectedMissionId === mission.id ? 'active' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="code-badge">{mission.code}</span>
                  <span className={`difficulty-badge ${getDifficultyColor(mission.difficulty)}`}>
                    {mission.difficulty}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-100">{mission.name}</h3>
              </div>
              <TrendingDown className="h-5 w-5 text-red-400 flex-shrink-0" />
            </div>
            <p className="text-xs text-gray-400 mb-2">{mission.description}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>{mission.duration}</span>
              <span className="text-red-400">{mission.maxDrawdown}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
