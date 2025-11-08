import { useState, useEffect } from 'react';
import { Achievement } from '@/types/gamification';
import { Trophy, X, Sparkles } from 'lucide-react';

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export default function AchievementNotification({ achievement, onClose }: AchievementNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [achievement, onClose]);

  if (!achievement) return null;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500/20 border-gray-500';
      case 'rare': return 'bg-blue-500/20 border-blue-500';
      case 'epic': return 'bg-purple-500/20 border-purple-500';
      case 'legendary': return 'bg-yellow-500/20 border-yellow-500';
      default: return 'bg-gray-500/20 border-gray-500';
    }
  };

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'shadow-lg shadow-yellow-500/50';
      case 'epic': return 'shadow-lg shadow-purple-500/50';
      case 'rare': return 'shadow-md shadow-blue-500/30';
      default: return '';
    }
  };

  return (
    <div className={`achievement-notification ${isVisible ? 'show' : ''}`}>
      <div className={`achievement-card ${getRarityColor(achievement.rarity)} ${getRarityGlow(achievement.rarity)}`}>
        <button onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }} className="close-button">
          <X className="h-4 w-4" />
        </button>

        <div className="achievement-header">
          <Trophy className="h-6 w-6 text-yellow-400" />
          <span className="achievement-title">Achievement Unlocked!</span>
          {achievement.rarity === 'legendary' && <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />}
        </div>

        <div className="achievement-content">
          <div className="achievement-icon">{achievement.icon}</div>
          <div>
            <h3 className="achievement-name">{achievement.name}</h3>
            <p className="achievement-description">{achievement.description}</p>
            <div className="achievement-footer">
              <span className={`rarity-badge rarity-${achievement.rarity}`}>
                {achievement.rarity.toUpperCase()}
              </span>
              <span className="xp-reward">+{achievement.xpReward} XP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
