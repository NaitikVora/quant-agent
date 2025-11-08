import { PlayerStats } from '@/types/gamification';
import { getXpForNextLevel, getXpProgress, levelConfigs } from '@/data/levels';
import { TrendingUp } from 'lucide-react';

interface XPBarProps {
  stats: PlayerStats;
}

export default function XPBar({ stats }: XPBarProps) {
  const progress = getXpProgress(stats.xp, stats.level);
  const nextLevelXp = getXpForNextLevel(stats.level);
  const currentLevelConfig = levelConfigs.find(l => l.level === stats.level);

  return (
    <div className="xp-bar-container">
      <div className="xp-bar-header">
        <div className="flex items-center gap-2">
          <div className="level-badge-small">
            Lv {stats.level}
          </div>
          <span className="rank-title-small">{currentLevelConfig?.title}</span>
        </div>
        <div className="xp-text">
          {stats.xp.toLocaleString()} / {nextLevelXp.toLocaleString()} XP
        </div>
      </div>
      <div className="xp-bar-track">
        <div
          className="xp-bar-fill"
          style={{ width: `${progress}%` }}
        >
          <TrendingUp className="h-3 w-3 ml-auto mr-1" />
        </div>
      </div>
    </div>
  );
}
