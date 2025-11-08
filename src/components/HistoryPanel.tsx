import { DecisionRecord } from '@/types';
import { History, TrendingUp, TrendingDown, Trash2 } from 'lucide-react';
import { keystore } from '@/lib/keystore';

interface HistoryPanelProps {
  records: DecisionRecord[];
  missionName?: string;
  onClear?: () => void;
}

export default function HistoryPanel({ records, onClear }: HistoryPanelProps) {
  const stats = keystore.getStats(records);

  return (
    <div className="history-panel">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <History className="h-6 w-6 text-purple-400" />
          <h2 className="text-xl font-bold text-gray-100">Decision History</h2>
        </div>
        {onClear && records.length > 0 && (
          <button onClick={onClear} className="clear-button">
            <Trash2 className="h-4 w-4" />
            Clear
          </button>
        )}
      </div>

      {/* Stats */}
      {records.length > 0 && (
        <div className="stats-grid mb-6">
          <div className="stat-card">
            <div className="text-xs text-gray-500 mb-1">Total Trades</div>
            <div className="text-2xl font-bold text-gray-100">{stats.totalTrades}</div>
          </div>
          <div className="stat-card">
            <div className="text-xs text-gray-500 mb-1">Win Rate</div>
            <div className="text-2xl font-bold text-emerald-400">{stats.winRate.toFixed(1)}%</div>
          </div>
          <div className="stat-card">
            <div className="text-xs text-gray-500 mb-1">Avg P&L</div>
            <div className={`text-2xl font-bold ${stats.avgPnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {stats.avgPnl >= 0 ? '+' : ''}{stats.avgPnl.toFixed(0)}
            </div>
          </div>
          <div className="stat-card">
            <div className="text-xs text-gray-500 mb-1">Total P&L</div>
            <div className={`text-2xl font-bold ${stats.totalPnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {stats.totalPnl >= 0 ? '+' : ''}{stats.totalPnl.toLocaleString()}
            </div>
          </div>
        </div>
      )}

      {/* Records List */}
      <div className="space-y-3">
        {records.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No decisions recorded yet</p>
            <p className="text-sm mt-2">Your trading decisions will appear here</p>
          </div>
        ) : (
          records.slice().reverse().map((record) => (
            <div key={record.id} className="history-record">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500">
                      {new Date(record.timestamp).toLocaleString()}
                    </span>
                    <span className="code-badge text-xs">{record.missionName}</span>
                  </div>
                  <h4 className="font-semibold text-sm text-gray-200">{record.stageTitle}</h4>
                </div>
                <div className="flex items-center gap-1">
                  {record.pnl >= 0 ? (
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-400" />
                  )}
                  <span className={`font-semibold text-sm ${
                    record.pnl >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {record.pnl >= 0 ? '+' : ''}{record.pnl.toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-2 line-clamp-2">{record.decision}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Allocation: ${record.allocation.toLocaleString()}</span>
                <span className={record.pnl >= 0 ? 'text-emerald-500' : 'text-red-500'}>
                  {record.pnl >= 0 ? '+' : ''}{record.pnlPct.toFixed(2)}%
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
