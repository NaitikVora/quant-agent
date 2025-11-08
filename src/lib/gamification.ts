import { PlayerProfile, PlayerStats, Achievement } from '@/types/gamification';
import { achievements } from '@/data/achievements';
import { calculateLevel } from '@/data/levels';

const PROFILE_KEY = 'quant-quest-profile';

const defaultStats: PlayerStats = {
  level: 1,
  xp: 0,
  totalTrades: 0,
  winningTrades: 0,
  totalPnl: 0,
  bestTrade: 0,
  worstTrade: 0,
  currentStreak: 0,
  longestStreak: 0,
  missionsCompleted: 0,
  perfectMissions: 0,
  survivedCrashes: [],
  daysPlayed: 1,
  lastPlayedDate: new Date().toISOString().split('T')[0],
  totalPlayTime: 0
};

const defaultProfile: PlayerProfile = {
  username: 'Trader',
  rank: 'Novice',
  stats: defaultStats,
  achievements: [],
  unlockedMissions: ['gfc-2008', 'covid-2020', 'dotcom-2000'],
  currentMissionProgress: {},
  preferences: {
    soundEnabled: true,
    effectsEnabled: true,
    theme: 'dark'
  }
};

export const gamification = {
  getProfile(): PlayerProfile {
    try {
      const data = localStorage.getItem(PROFILE_KEY);
      if (!data) return defaultProfile;

      const profile = JSON.parse(data);

      // Update days played
      const today = new Date().toISOString().split('T')[0];
      if (profile.stats.lastPlayedDate !== today) {
        const lastDate = new Date(profile.stats.lastPlayedDate);
        const currentDate = new Date(today);
        const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          // Consecutive day
          profile.stats.daysPlayed += 1;
        }
        profile.stats.lastPlayedDate = today;
        this.saveProfile(profile);
      }

      return profile;
    } catch (error) {
      console.error('Failed to load profile:', error);
      return defaultProfile;
    }
  },

  saveProfile(profile: PlayerProfile): void {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  },

  updateStats(updates: Partial<PlayerStats>): PlayerProfile {
    const profile = this.getProfile();
    profile.stats = { ...profile.stats, ...updates };

    // Recalculate level
    profile.stats.level = calculateLevel(profile.stats.xp);

    this.saveProfile(profile);
    return profile;
  },

  addXp(amount: number): { newXp: number; leveledUp: boolean; newLevel: number } {
    const profile = this.getProfile();
    const oldLevel = profile.stats.level;
    const newXp = profile.stats.xp + amount;

    profile.stats.xp = newXp;
    profile.stats.level = calculateLevel(newXp);

    this.saveProfile(profile);

    return {
      newXp,
      leveledUp: profile.stats.level > oldLevel,
      newLevel: profile.stats.level
    };
  },

  recordTrade(pnl: number, allocation: number, capital: number): {
    newAchievements: Achievement[];
    xpGained: number;
  } {
    const profile = this.getProfile();
    const stats = profile.stats;

    // Update basic stats
    stats.totalTrades += 1;
    if (pnl > 0) {
      stats.winningTrades += 1;
      stats.currentStreak += 1;
      stats.longestStreak = Math.max(stats.longestStreak, stats.currentStreak);
    } else {
      stats.currentStreak = 0;
    }

    stats.totalPnl += pnl;
    stats.bestTrade = Math.max(stats.bestTrade, pnl);
    stats.worstTrade = Math.min(stats.worstTrade, pnl);

    // Calculate base XP (10 XP per trade, bonus for wins)
    let xpGained = 10;
    if (pnl > 0) {
      xpGained += Math.min(50, Math.floor(pnl / 100)); // Bonus XP for profit
    }

    // Streak bonus
    if (stats.currentStreak >= 3) {
      xpGained *= 1 + (stats.currentStreak * 0.1); // 10% per streak
    }

    // Check for new achievements
    const newAchievements: Achievement[] = [];

    // Special achievement for 100% allocation
    if (allocation === capital && !profile.achievements.includes('risk_taker')) {
      const ach = achievements.find(a => a.id === 'risk_taker');
      if (ach) {
        newAchievements.push(ach);
        profile.achievements.push(ach.id);
        xpGained += ach.xpReward;
        ach.unlockedAt = new Date().toISOString();
      }
    }

    // Check all achievements
    for (const achievement of achievements) {
      if (
        !profile.achievements.includes(achievement.id) &&
        achievement.condition(stats)
      ) {
        newAchievements.push(achievement);
        profile.achievements.push(achievement.id);
        xpGained += achievement.xpReward;
        achievement.unlockedAt = new Date().toISOString();
      }
    }

    stats.xp += xpGained;
    stats.level = calculateLevel(stats.xp);

    this.saveProfile(profile);

    return { newAchievements, xpGained };
  },

  completeMission(missionId: string, totalPnl: number, allWins: boolean): void {
    const profile = this.getProfile();

    profile.stats.missionsCompleted += 1;

    if (totalPnl > 0 && !profile.stats.survivedCrashes.includes(missionId)) {
      profile.stats.survivedCrashes.push(missionId);
    }

    if (allWins) {
      profile.stats.perfectMissions += 1;
    }

    // Bonus XP for completing mission
    let bonusXp = 1000;
    if (totalPnl > 0) bonusXp += 500;
    if (allWins) bonusXp += 1000;

    profile.stats.xp += bonusXp;
    profile.stats.level = calculateLevel(profile.stats.xp);

    this.saveProfile(profile);
  },

  getUnlockedAchievements(): Achievement[] {
    const profile = this.getProfile();
    return achievements.filter(a => profile.achievements.includes(a.id));
  },

  getLockedAchievements(): Achievement[] {
    const profile = this.getProfile();
    return achievements.filter(a => !profile.achievements.includes(a.id));
  },

  resetProfile(): void {
    localStorage.removeItem(PROFILE_KEY);
  }
};
