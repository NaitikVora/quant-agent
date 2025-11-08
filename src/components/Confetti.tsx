import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiProps {
  trigger: boolean;
  type?: 'success' | 'epic' | 'legendary';
}

export default function Confetti({ trigger, type = 'success' }: ConfettiProps) {
  useEffect(() => {
    if (!trigger) return;

    const colors = {
      success: ['#10b981', '#3b82f6', '#8b5cf6'],
      epic: ['#f59e0b', '#ef4444', '#eab308'],
      legendary: ['#fbbf24', '#f59e0b', '#fcd34d']
    };

    const config = {
      success: { particleCount: 100, spread: 70 },
      epic: { particleCount: 150, spread: 90 },
      legendary: { particleCount: 200, spread: 120 }
    };

    const selectedConfig = config[type];
    const selectedColors = colors[type];

    // Fire confetti
    confetti({
      ...selectedConfig,
      colors: selectedColors,
      origin: { y: 0.6 },
      zIndex: 9999
    });

    // For legendary, do a second burst
    if (type === 'legendary') {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: selectedColors,
          zIndex: 9999
        });
        confetti({
          particleCount: 100,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: selectedColors,
          zIndex: 9999
        });
      }, 200);
    }
  }, [trigger, type]);

  return null;
}
