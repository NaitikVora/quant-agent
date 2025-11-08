import { LevelConfig } from '@/types/gamification';

export const levelConfigs: LevelConfig[] = [
  {
    level: 1,
    xpRequired: 0,
    title: 'Novice Trader',
    perks: ['Access to all missions', 'Basic analytics']
  },
  {
    level: 2,
    xpRequired: 500,
    title: 'Junior Analyst',
    perks: ['Unlock achievement tracking', '+5% XP bonus']
  },
  {
    level: 3,
    xpRequired: 1500,
    title: 'Associate Trader',
    perks: ['Advanced statistics', '+10% XP bonus']
  },
  {
    level: 4,
    xpRequired: 3000,
    title: 'Trader',
    perks: ['Streak bonuses enabled', '+15% XP bonus']
  },
  {
    level: 5,
    xpRequired: 5000,
    title: 'Senior Trader',
    perks: ['Daily challenges unlocked', '+20% XP bonus']
  },
  {
    level: 6,
    xpRequired: 8000,
    title: 'Portfolio Manager',
    perks: ['Score multipliers', '+25% XP bonus']
  },
  {
    level: 7,
    xpRequired: 12000,
    title: 'Fund Manager',
    perks: ['Leaderboard access', '+30% XP bonus']
  },
  {
    level: 8,
    xpRequired: 17000,
    title: 'Hedge Fund Manager',
    perks: ['Premium analytics', '+35% XP bonus']
  },
  {
    level: 9,
    xpRequired: 23000,
    title: 'Quant Master',
    perks: ['All features unlocked', '+40% XP bonus']
  },
  {
    level: 10,
    xpRequired: 30000,
    title: 'Market Legend',
    perks: ['Legendary status', '+50% XP bonus', 'Exclusive badge']
  }
];

export function calculateLevel(xp: number): number {
  for (let i = levelConfigs.length - 1; i >= 0; i--) {
    if (xp >= levelConfigs[i].xpRequired) {
      return levelConfigs[i].level;
    }
  }
  return 1;
}

export function getXpForNextLevel(currentLevel: number): number {
  const nextLevelConfig = levelConfigs.find(l => l.level === currentLevel + 1);
  return nextLevelConfig ? nextLevelConfig.xpRequired : levelConfigs[levelConfigs.length - 1].xpRequired;
}

export function getXpProgress(xp: number, currentLevel: number): number {
  const currentLevelXp = levelConfigs.find(l => l.level === currentLevel)?.xpRequired || 0;
  const nextLevelXp = getXpForNextLevel(currentLevel);
  const progress = ((xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100;
  return Math.min(100, Math.max(0, progress));
}
