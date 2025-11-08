export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'trading' | 'survival' | 'mastery' | 'streak' | 'special';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  condition: (stats: PlayerStats) => boolean;
  xpReward: number;
  unlockedAt?: string;
}

export interface PlayerStats {
  level: number;
  xp: number;
  totalTrades: number;
  winningTrades: number;
  totalPnl: number;
  bestTrade: number;
  worstTrade: number;
  currentStreak: number;
  longestStreak: number;
  missionsCompleted: number;
  perfectMissions: number; // Missions completed with all positive trades
  survivedCrashes: string[]; // IDs of crises survived with profit
  daysPlayed: number;
  lastPlayedDate: string;
  totalPlayTime: number; // in minutes
}

export interface PlayerProfile {
  username: string;
  rank: string;
  stats: PlayerStats;
  achievements: string[]; // Achievement IDs
  unlockedMissions: string[];
  currentMissionProgress: Record<string, number>;
  preferences: {
    soundEnabled: boolean;
    effectsEnabled: boolean;
    theme: 'dark' | 'light';
  };
}

export interface LevelConfig {
  level: number;
  xpRequired: number;
  title: string;
  perks: string[];
}

export interface StreakBonus {
  streakLength: number;
  multiplier: number;
  description: string;
}
