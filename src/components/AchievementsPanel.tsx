import { PlayerProfile } from '@/types/gamification';
import { gamification } from '@/lib/gamification';
import { Trophy, Lock, Star } from 'lucide-react';
import { useState } from 'react';

interface AchievementsPanelProps {
  profile: PlayerProfile;
}

export default function AchievementsPanel({ profile }: AchievementsPanelProps) {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');

  const unlockedAchievements = gamification.getUnlockedAchievements();
  const lockedAchievements = gamification.getLockedAchievements();

  const displayAchievements =
    filter === 'unlocked' ? unlockedAchievements :
    filter === 'locked' ? lockedAchievements :
    [...unlockedAchievements, ...lockedAchievements];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-500 text-gray-400';
      case 'rare': return 'border-blue-500 text-blue-400';
      case 'epic': return 'border-purple-500 text-purple-400';
      case 'legendary': return 'border-yellow-500 text-yellow-400';
      default: return 'border-gray-500 text-gray-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'trading': return '📈';
      case 'survival': return '🛡️';
      case 'streak': return '🔥';
      case 'mastery': return '⚡';
      case 'special': return '⭐';
      default: return '🏆';
    }
  };

  return (
    <div className="achievements-panel">
      <div className="panel-header">
        <div className="flex items-center gap-3">
          <Trophy className="h-6 w-6 text-yellow-400" />
          <h2 className="text-xl font-bold text-gray-100">Achievements</h2>
        </div>
        <div className="achievement-stats">
          <span className="text-sm text-gray-400">
            {unlockedAchievements.length} / {unlockedAchievements.length + lockedAchievements.length}
          </span>
        </div>
      </div>

      <div className="filter-tabs">
        <button
          onClick={() => setFilter('all')}
          className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('unlocked')}
          className={`filter-tab ${filter === 'unlocked' ? 'active' : ''}`}
        >
          Unlocked ({unlockedAchievements.length})
        </button>
        <button
          onClick={() => setFilter('locked')}
          className={`filter-tab ${filter === 'locked' ? 'active' : ''}`}
        >
          Locked ({lockedAchievements.length})
        </button>
      </div>

      <div className="achievements-grid">
        {displayAchievements.map((achievement) => {
          const isUnlocked = profile.achievements.includes(achievement.id);

          return (
            <div
              key={achievement.id}
              className={`achievement-item ${!isUnlocked ? 'locked' : ''} ${getRarityColor(achievement.rarity)}`}
            >
              <div className="achievement-item-header">
                <div className="achievement-item-icon">
                  {isUnlocked ? achievement.icon : <Lock className="h-6 w-6 text-gray-600" />}
                </div>
                <div className="category-icon">{getCategoryIcon(achievement.category)}</div>
              </div>

              <h3 className="achievement-item-name">
                {isUnlocked ? achievement.name : '???'}
              </h3>
              <p className="achievement-item-desc">
                {isUnlocked ? achievement.description : 'Complete more tasks to unlock'}
              </p>

              <div className="achievement-item-footer">
                <span className={`rarity-badge-small rarity-${achievement.rarity}`}>
                  {achievement.rarity}
                </span>
                <span className="xp-reward-small">
                  <Star className="h-3 w-3" />
                  {achievement.xpReward}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
