import { Achievement } from '@/types/gamification';

export const achievements: Achievement[] = [
  // Trading Achievements
  {
    id: 'first_trade',
    name: 'First Steps',
    description: 'Execute your first trading decision',
    icon: '🎯',
    category: 'trading',
    rarity: 'common',
    condition: (stats) => stats.totalTrades >= 1,
    xpReward: 50
  },
  {
    id: 'profitable_trader',
    name: 'In the Green',
    description: 'Complete a trade with positive P&L',
    icon: '💰',
    category: 'trading',
    rarity: 'common',
    condition: (stats) => stats.winningTrades >= 1,
    xpReward: 100
  },
  {
    id: 'big_win',
    name: 'Jackpot',
    description: 'Earn $10,000 or more in a single trade',
    icon: '💎',
    category: 'trading',
    rarity: 'rare',
    condition: (stats) => stats.bestTrade >= 10000,
    xpReward: 500
  },
  {
    id: 'master_trader',
    name: 'Trading Master',
    description: 'Achieve 75% win rate with 20+ trades',
    icon: '👑',
    category: 'trading',
    rarity: 'epic',
    condition: (stats) => stats.totalTrades >= 20 && (stats.winningTrades / stats.totalTrades) >= 0.75,
    xpReward: 1000
  },
  {
    id: 'millionaire',
    name: 'Millionaire Mindset',
    description: 'Accumulate $100,000+ total profit',
    icon: '💸',
    category: 'trading',
    rarity: 'legendary',
    condition: (stats) => stats.totalPnl >= 100000,
    xpReward: 2500
  },

  // Survival Achievements
  {
    id: 'crash_survivor',
    name: 'Crash Survivor',
    description: 'Complete any crisis with positive returns',
    icon: '🛡️',
    category: 'survival',
    rarity: 'rare',
    condition: (stats) => stats.survivedCrashes.length >= 1,
    xpReward: 750
  },
  {
    id: 'perfect_storm',
    name: 'Perfect Storm',
    description: 'Complete a mission with 100% win rate',
    icon: '⚡',
    category: 'survival',
    rarity: 'epic',
    condition: (stats) => stats.perfectMissions >= 1,
    xpReward: 1500
  },
  {
    id: 'crisis_master',
    name: 'Crisis Master',
    description: 'Survive all 3 crises with profit',
    icon: '🏆',
    category: 'survival',
    rarity: 'legendary',
    condition: (stats) => stats.survivedCrashes.length >= 3,
    xpReward: 5000
  },

  // Streak Achievements
  {
    id: 'hot_streak',
    name: 'Hot Streak',
    description: 'Win 5 trades in a row',
    icon: '🔥',
    category: 'streak',
    rarity: 'rare',
    condition: (stats) => stats.longestStreak >= 5,
    xpReward: 500
  },
  {
    id: 'unstoppable',
    name: 'Unstoppable',
    description: 'Win 10 trades in a row',
    icon: '🚀',
    category: 'streak',
    rarity: 'epic',
    condition: (stats) => stats.longestStreak >= 10,
    xpReward: 1500
  },
  {
    id: 'daily_grind',
    name: 'Daily Grind',
    description: 'Play for 7 consecutive days',
    icon: '📅',
    category: 'streak',
    rarity: 'rare',
    condition: (stats) => stats.daysPlayed >= 7,
    xpReward: 1000
  },

  // Mastery Achievements
  {
    id: 'veteran_trader',
    name: 'Veteran Trader',
    description: 'Complete 50 total trades',
    icon: '⭐',
    category: 'mastery',
    rarity: 'rare',
    condition: (stats) => stats.totalTrades >= 50,
    xpReward: 750
  },
  {
    id: 'elite_trader',
    name: 'Elite Trader',
    description: 'Complete 100 total trades',
    icon: '🌟',
    category: 'mastery',
    rarity: 'epic',
    condition: (stats) => stats.totalTrades >= 100,
    xpReward: 2000
  },
  {
    id: 'legendary_trader',
    name: 'Legendary Trader',
    description: 'Complete 250 total trades',
    icon: '✨',
    category: 'mastery',
    rarity: 'legendary',
    condition: (stats) => stats.totalTrades >= 250,
    xpReward: 5000
  },

  // Special Achievements
  {
    id: 'comeback_kid',
    name: 'Comeback Kid',
    description: 'Recover from a $10,000+ loss to profit',
    icon: '💪',
    category: 'special',
    rarity: 'epic',
    condition: (stats) => stats.worstTrade <= -10000 && stats.totalPnl > 0,
    xpReward: 1500
  },
  {
    id: 'risk_taker',
    name: 'All In',
    description: 'Make a decision with 100% capital allocation',
    icon: '🎲',
    category: 'special',
    rarity: 'rare',
    condition: (stats) => stats.totalTrades >= 1, // Will be triggered by special logic
    xpReward: 500
  },
  {
    id: 'contrarian',
    name: 'Contrarian',
    description: 'Profit from a bearish position in 3 different crises',
    icon: '🐻',
    category: 'special',
    rarity: 'epic',
    condition: (stats) => stats.totalTrades >= 15, // Special logic needed
    xpReward: 1000
  },
  {
    id: 'speed_runner',
    name: 'Speed Demon',
    description: 'Complete a crisis in under 5 minutes',
    icon: '⚡',
    category: 'special',
    rarity: 'rare',
    condition: (stats) => stats.missionsCompleted >= 1, // Special timing logic needed
    xpReward: 750
  }
];
