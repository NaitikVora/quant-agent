import { StrategyTemplate } from '@/types';

export const strategyTemplates: StrategyTemplate[] = [
  // Bearish Strategies
  {
    id: 'buy-puts',
    name: 'Buy Protective Puts',
    emoji: '🛡️',
    description: 'Hedge downside with put options',
    template: 'Buy SPY puts [strike price] expiring [date] to protect against downside risk. This hedges my portfolio while maintaining upside exposure.',
    category: 'bearish'
  },
  {
    id: 'short-market',
    name: 'Short the Market',
    emoji: '📉',
    description: 'Profit from market decline',
    template: 'Short [index/stock] at current levels. Markets are overextended and due for correction. Stop loss at [price level].',
    category: 'bearish'
  },
  {
    id: 'sell-everything',
    name: 'Go to Cash',
    emoji: '💵',
    description: 'Exit all positions and hold cash',
    template: 'Sell all equity positions and move to cash. Market conditions are too uncertain. Will wait for better entry points.',
    category: 'bearish'
  },
  {
    id: 'inverse-etf',
    name: 'Buy Inverse ETFs',
    emoji: '⬇️',
    description: 'Use inverse ETFs to profit from decline',
    template: 'Buy inverse ETFs (e.g., SH, PSQ) to profit from market decline. This provides leveraged downside exposure without margin requirements.',
    category: 'bearish'
  },

  // Bullish Strategies
  {
    id: 'buy-dip',
    name: 'Buy the Dip',
    emoji: '🚀',
    description: 'Accumulate on weakness',
    template: 'Buy [index/stock] on this dip. Market overreacted and this is a buying opportunity. Markets always recover from panic selling.',
    category: 'bullish'
  },
  {
    id: 'buy-calls',
    name: 'Buy Call Options',
    emoji: '📈',
    description: 'Leverage upside with calls',
    template: 'Buy call options on [index/stock] at [strike price]. This provides leveraged upside exposure if markets rebound quickly.',
    category: 'bullish'
  },
  {
    id: 'scale-in',
    name: 'Scale In Gradually',
    emoji: '🪜',
    description: 'DCA into positions over time',
    template: 'Dollar-cost average into [positions] over the next [timeframe]. This averages my entry price and reduces timing risk.',
    category: 'bullish'
  },
  {
    id: 'quality-stocks',
    name: 'Buy Quality Names',
    emoji: '💎',
    description: 'Focus on high-quality companies',
    template: 'Accumulate high-quality blue chip stocks trading at discounts. Companies like [examples] will weather this storm and emerge stronger.',
    category: 'bullish'
  },

  // Neutral/Hedge Strategies
  {
    id: 'straddle',
    name: 'Buy Straddle',
    emoji: '⚖️',
    description: 'Profit from volatility in either direction',
    template: 'Buy at-the-money straddle on [index]. Volatility is low but big move coming. Will profit regardless of direction.',
    category: 'neutral'
  },
  {
    id: 'collar',
    name: 'Implement Collar',
    emoji: '🔒',
    description: 'Limit both upside and downside',
    template: 'Establish collar strategy: sell [call strike] and buy [put strike]. This caps gains but protects against severe losses.',
    category: 'hedge'
  },
  {
    id: 'reduce-size',
    name: 'Reduce Position Size',
    emoji: '📊',
    description: 'Take risk off the table',
    template: 'Reduce position sizes by [percentage]% across the board. Keep exposure but with smaller positions to manage risk during uncertainty.',
    category: 'neutral'
  },
  {
    id: 'rotate-defensive',
    name: 'Rotate to Defensives',
    emoji: '🏥',
    description: 'Move to defensive sectors',
    template: 'Rotate into defensive sectors: utilities, consumer staples, healthcare. These sectors outperform during market stress.',
    category: 'hedge'
  },

  // Safe Haven Strategies
  {
    id: 'buy-gold',
    name: 'Buy Gold/Safe Havens',
    emoji: '🥇',
    description: 'Move to safe haven assets',
    template: 'Allocate to gold, treasuries, and other safe haven assets. Risk-off environment favors traditional safe havens.',
    category: 'hedge'
  },
  {
    id: 'vix-calls',
    name: 'Buy VIX Calls',
    emoji: '😱',
    description: 'Bet on volatility spike',
    template: 'Buy VIX call options. Volatility is too low given current risks. A fear spike would pay off significantly.',
    category: 'hedge'
  },

  // Contrarian/Advanced
  {
    id: 'fade-panic',
    name: 'Fade the Panic',
    emoji: '🎯',
    description: 'Bet against extreme sentiment',
    template: 'Market is in extreme panic territory. Contrarian play: buy [positions] while everyone is selling. Maximum pessimism = maximum opportunity.',
    category: 'bullish'
  },
  {
    id: 'pairs-trade',
    name: 'Pairs Trade',
    emoji: '🔄',
    description: 'Long/short related assets',
    template: 'Long [strong asset] vs short [weak asset] in pairs trade. This market-neutral strategy profits from relative performance.',
    category: 'neutral'
  },
  {
    id: 'sell-premium',
    name: 'Sell Option Premium',
    emoji: '💰',
    description: 'Collect premium from high volatility',
    template: 'Sell put spreads or covered calls to collect premium. Elevated volatility makes option selling attractive.',
    category: 'neutral'
  },
  {
    id: 'wait-watch',
    name: 'Wait and Watch',
    emoji: '👀',
    description: 'Stay on sidelines for clarity',
    template: 'Stay in cash and wait for clarity. No positions until market direction becomes clearer. Patience is a position.',
    category: 'neutral'
  }
];

export const getTemplatesByCategory = (category: StrategyTemplate['category']) => {
  return strategyTemplates.filter(t => t.category === category);
};

export const getTemplateById = (id: string) => {
  return strategyTemplates.find(t => t.id === id);
};
