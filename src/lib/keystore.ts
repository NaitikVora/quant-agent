import { DecisionRecord } from '@/types';

const STORAGE_KEY = 'quant-quest-decisions';

export const keystore = {
  getAll(): DecisionRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to load decisions:', error);
      return [];
    }
  },

  add(record: DecisionRecord): void {
    try {
      const records = this.getAll();
      records.push(record);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch (error) {
      console.error('Failed to save decision:', error);
    }
  },

  clearMission(missionId: string): void {
    try {
      const records = this.getAll();
      const filtered = records.filter(r => r.missionId !== missionId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error('Failed to clear mission:', error);
    }
  },

  clearAll(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear all decisions:', error);
    }
  },

  getStats(records: DecisionRecord[]): {
    totalTrades: number;
    winRate: number;
    avgPnl: number;
    totalPnl: number;
  } {
    if (records.length === 0) {
      return { totalTrades: 0, winRate: 0, avgPnl: 0, totalPnl: 0 };
    }

    const wins = records.filter(r => r.pnl > 0).length;
    const totalPnl = records.reduce((sum, r) => sum + r.pnl, 0);
    const avgPnl = totalPnl / records.length;
    const winRate = (wins / records.length) * 100;

    return {
      totalTrades: records.length,
      winRate,
      avgPnl,
      totalPnl
    };
  }
};
