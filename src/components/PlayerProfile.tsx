import { PlayerProfile as PlayerProfileType } from '@/types/gamification';
import { levelConfigs } from '@/data/levels';
import { User, Award, TrendingUp, Target, Flame, Trophy } from 'lucide-react';

interface PlayerProfileProps {
  profile: PlayerProfileType;
  onClose?: () => void;
}

export default function PlayerProfile({ profile }: PlayerProfileProps) {
  const stats = profile.stats;
  const winRate = stats.totalTrades > 0 ? (stats.winningTrades / stats.totalTrades) * 100 : 0;
  const avgPnl = stats.totalTrades > 0 ? stats.totalPnl / stats.totalTrades : 0;
  const levelConfig = levelConfigs.find(l => l.level === stats.level);

  const getWinRateColor = (rate: number) => {
    if (rate >= 70) return 'text-emerald-400';
    if (rate >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="player-profile-card">
      <div className="profile-header">
        <div className="profile-avatar">
          <User className="h-12 w-12 text-blue-400" />
        </div>
        <div className="profile-info">
          <h2 className="profile-username">{profile.username}</h2>
          <div className="profile-rank">
            <Award className="h-4 w-4 text-yellow-400" />
            <span>{levelConfig?.title || 'Trader'}</span>
          </div>
        </div>
      </div>

      <div className="profile-stats-grid">
        <div className="profile-stat">
          <div className="stat-icon">
            <Trophy className="h-5 w-5 text-yellow-400" />
          </div>
          <div>
            <div className="stat-value">Level {stats.level}</div>
            <div className="stat-label">{stats.xp.toLocaleString()} XP</div>
          </div>
        </div>

        <div className="profile-stat">
          <div className="stat-icon">
            <Target className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <div className={`stat-value ${getWinRateColor(winRate)}`}>
              {winRate.toFixed(1)}%
            </div>
            <div className="stat-label">Win Rate</div>
          </div>
        </div>

        <div className="profile-stat">
          <div className="stat-icon">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <div className={`stat-value ${stats.totalPnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {stats.totalPnl >= 0 ? '+' : ''}${stats.totalPnl.toLocaleString()}
            </div>
            <div className="stat-label">Total P&L</div>
          </div>
        </div>

        <div className="profile-stat">
          <div className="stat-icon">
            <Flame className="h-5 w-5 text-orange-400" />
          </div>
          <div>
            <div className="stat-value">{stats.currentStreak}</div>
            <div className="stat-label">Win Streak</div>
          </div>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail-row">
          <span className="detail-label">Total Trades</span>
          <span className="detail-value">{stats.totalTrades}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Missions Completed</span>
          <span className="detail-value">{stats.missionsCompleted}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Perfect Missions</span>
          <span className="detail-value">{stats.perfectMissions}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Longest Streak</span>
          <span className="detail-value">{stats.longestStreak}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Best Trade</span>
          <span className="detail-value text-emerald-400">
            +${stats.bestTrade.toLocaleString()}
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Avg P&L per Trade</span>
          <span className={`detail-value ${avgPnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {avgPnl >= 0 ? '+' : ''}${avgPnl.toFixed(0)}
          </span>
        </div>
      </div>

      <div className="profile-achievements">
        <h3 className="achievements-title">
          <Trophy className="h-4 w-4 text-yellow-400" />
          Achievements
        </h3>
        <div className="achievements-count">
          {profile.achievements.length} unlocked
        </div>
      </div>
    </div>
  );
}
