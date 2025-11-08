import { useState, useEffect } from 'react';
import { levelConfigs } from '@/data/levels';
import { Zap, ChevronUp } from 'lucide-react';

interface LevelUpNotificationProps {
  newLevel: number;
  show: boolean;
  onClose: () => void;
}

export default function LevelUpNotification({ newLevel, show, onClose }: LevelUpNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const levelConfig = levelConfigs.find(l => l.level === newLevel);
  if (!levelConfig) return null;

  return (
    <div className={`level-up-notification ${isVisible ? 'show' : ''}`}>
      <div className="level-up-card">
        <div className="level-up-icon">
          <ChevronUp className="h-8 w-8 text-emerald-400" />
          <Zap className="h-6 w-6 text-yellow-400 absolute" />
        </div>

        <h2 className="level-up-title">Level Up!</h2>
        <div className="level-badge">Level {newLevel}</div>
        <h3 className="rank-title">{levelConfig.title}</h3>

        <div className="perks-list">
          <p className="perks-header">New Perks Unlocked:</p>
          {levelConfig.perks.map((perk, i) => (
            <div key={i} className="perk-item">
              <span className="perk-dot">•</span>
              <span>{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
