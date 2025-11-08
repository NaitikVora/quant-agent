import { CrisisScenario } from '@/types';

export const missions: CrisisScenario[] = [
  {
    id: 'gfc-2008',
    name: '2008 Financial Crisis',
    code: 'GFC08',
    description: 'Navigate the global financial meltdown triggered by the collapse of Lehman Brothers',
    startDate: 'Sep 2008',
    endDate: 'Mar 2009',
    duration: '6 months',
    maxDrawdown: '-56.8%',
    volatility: '89.2%',
    difficulty: 'Extreme',
    keyEvents: [
      {
        date: 'Sep 15, 2008',
        title: 'Lehman Brothers Bankruptcy',
        description: 'Fourth-largest investment bank declares bankruptcy, sending shockwaves through global markets',
        impact: 'extreme',
        marketReaction: -4.71
      },
      {
        date: 'Sep 29, 2008',
        title: 'TARP Vote Fails',
        description: 'House rejects $700B bailout package, triggering largest single-day point drop in Dow history',
        impact: 'extreme',
        marketReaction: -7.0
      },
      {
        date: 'Oct 10, 2008',
        title: 'Market Capitulation',
        description: 'S&P 500 plunges 8.8% in worst week since 1933, VIX hits record 76',
        impact: 'extreme',
        marketReaction: -8.8
      },
      {
        date: 'Nov 20, 2008',
        title: 'Auto Industry Crisis',
        description: 'GM and Chrysler near bankruptcy, threatening millions of jobs',
        impact: 'high',
        marketReaction: -6.7
      },
      {
        date: 'Mar 9, 2009',
        title: 'Market Bottom',
        description: 'S&P 500 hits 676, down 57% from peak. Beginning of bull market',
        impact: 'extreme',
        marketReaction: 1.2
      }
    ],
    economicIndicators: [
      {
        name: 'VIX',
        value: 76.45,
        unit: '',
        change: 48.2,
        description: 'Extreme fear grips markets as volatility hits record highs'
      },
      {
        name: 'Unemployment',
        value: 7.8,
        unit: '%',
        change: 2.4,
        description: 'Job losses accelerate as recession deepens'
      },
      {
        name: 'Credit Spreads',
        value: 647,
        unit: 'bps',
        change: 425,
        description: 'Corporate bond markets freeze as credit risk soars'
      },
      {
        name: 'Housing Prices',
        value: -18.2,
        unit: '%',
        change: -18.2,
        description: 'Home values collapse as foreclosures surge'
      }
    ]
  },
  {
    id: 'covid-2020',
    name: 'COVID-19 Crash',
    code: 'CV19',
    description: 'Survive the pandemic-induced market panic and navigate the unprecedented recovery',
    startDate: 'Feb 2020',
    endDate: 'Apr 2020',
    duration: '2 months',
    maxDrawdown: '-33.9%',
    volatility: '76.4%',
    difficulty: 'Hard',
    keyEvents: [
      {
        date: 'Feb 24, 2020',
        title: 'Global Outbreak Fears',
        description: 'Markets realize COVID-19 is a global pandemic, S&P 500 drops 3.4%',
        impact: 'high',
        marketReaction: -3.4
      },
      {
        date: 'Mar 9, 2020',
        title: 'Black Monday',
        description: 'Oil price war + pandemic fears trigger circuit breakers',
        impact: 'extreme',
        marketReaction: -7.6
      },
      {
        date: 'Mar 16, 2020',
        title: 'Circuit Breaker Week',
        description: 'Third circuit breaker in a week, S&P down 12% in single day',
        impact: 'extreme',
        marketReaction: -12.0
      },
      {
        date: 'Mar 23, 2020',
        title: 'Market Bottom',
        description: 'S&P 500 hits 2,237, down 34% from peak in fastest bear market ever',
        impact: 'extreme',
        marketReaction: -2.9
      },
      {
        date: 'Apr 6, 2020',
        title: 'V-Shaped Rally Begins',
        description: 'Fed unlimited QE + stimulus checks fuel historic rebound',
        impact: 'high',
        marketReaction: 7.0
      }
    ],
    economicIndicators: [
      {
        name: 'VIX',
        value: 82.69,
        unit: '',
        change: 67.3,
        description: 'Volatility exceeds 2008 crisis as uncertainty peaks'
      },
      {
        name: 'Initial Claims',
        value: 6.87,
        unit: 'M',
        change: 6.6,
        description: 'Record jobless claims as economy shuts down'
      },
      {
        name: 'Fed Balance Sheet',
        value: 7.0,
        unit: 'T',
        change: 3.0,
        description: 'Unprecedented monetary stimulus floods the system'
      },
      {
        name: 'Oil Price',
        value: -37.63,
        unit: '$',
        change: -97.63,
        description: 'WTI crude goes negative for first time in history'
      }
    ]
  },
  {
    id: 'dotcom-2000',
    name: 'Dot-com Bubble Burst',
    code: 'DOT00',
    description: 'Navigate the technology stock collapse and prolonged bear market',
    startDate: 'Mar 2000',
    endDate: 'Oct 2002',
    duration: '31 months',
    maxDrawdown: '-78.0%',
    volatility: '67.8%',
    difficulty: 'Hard',
    keyEvents: [
      {
        date: 'Mar 10, 2000',
        title: 'NASDAQ Peak',
        description: 'NASDAQ hits 5,048, peak of dot-com bubble fueled by irrational exuberance',
        impact: 'medium',
        marketReaction: -2.6
      },
      {
        date: 'Apr 14, 2000',
        title: 'Black Friday',
        description: 'NASDAQ drops 9.7% as tech bubble starts to deflate',
        impact: 'extreme',
        marketReaction: -9.7
      },
      {
        date: 'Sep 11, 2001',
        title: '9/11 Attacks',
        description: 'Terrorist attacks close markets for 4 days, S&P drops 11.6% when reopened',
        impact: 'extreme',
        marketReaction: -11.6
      },
      {
        date: 'Jul 2002',
        title: 'Corporate Scandals',
        description: 'Enron, WorldCom accounting frauds shake investor confidence',
        impact: 'high',
        marketReaction: -7.9
      },
      {
        date: 'Oct 9, 2002',
        title: 'Bear Market Bottom',
        description: 'S&P 500 hits 776, down 49% from peak. NASDAQ down 78%',
        impact: 'extreme',
        marketReaction: 0.8
      }
    ],
    economicIndicators: [
      {
        name: 'NASDAQ P/E',
        value: 175,
        unit: 'x',
        change: 150,
        description: 'Valuations reach absurd levels as profitless companies soar'
      },
      {
        name: 'IPO Proceeds',
        value: 66.9,
        unit: 'B',
        change: 40.2,
        description: 'IPO frenzy peaks as companies rush to go public'
      },
      {
        name: 'Tech Revenue Growth',
        value: -15.2,
        unit: '%',
        change: -45.2,
        description: 'Reality sets in as revenue growth collapses'
      },
      {
        name: 'VC Funding',
        value: -42.0,
        unit: '%',
        change: -42.0,
        description: 'Venture capital funding dries up as bubble pops'
      }
    ]
  }
];
