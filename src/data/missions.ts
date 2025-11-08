import { CrisisScenario } from '@/types';

export const missions: CrisisScenario[] = [
  {
    id: 'gfc-2008',
    name: '2008 Financial Crisis',
    code: 'GFC08',
    description: 'Navigate the global financial meltdown triggered by the collapse of Lehman Brothers',
    maskedName: 'Operation Black Swan',
    maskedDescription: 'Navigate a catastrophic market collapse triggered by institutional failure and systemic risk',
    realWorldSummary: 'The 2008 Global Financial Crisis was triggered by the collapse of Lehman Brothers on September 15, 2008. This event exposed massive vulnerabilities in the financial system from subprime mortgage lending and complex derivatives. The crisis led to a 57% market decline, massive bailouts, and the worst recession since the Great Depression, fundamentally changing financial regulation worldwide.',
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
        maskedTitle: 'Phase 1: Institutional Collapse',
        maskedDescription: 'A major financial institution fails unexpectedly, triggering systemic panic across global markets',
        headlines: [
          '🚨 BREAKING: Major Investment Bank Files for Bankruptcy',
          '💥 Wall Street in Chaos as 158-Year-Old Institution Collapses',
          '⚠️ URGENT: Credit Markets Freeze - Counterparty Risk Soaring'
        ],
        newsArticles: [
          {
            source: 'Financial Times',
            headline: 'Banking Giant Files Largest Bankruptcy in U.S. History',
            snippet: 'Markets are reeling as a major investment bank with $600B in assets declares bankruptcy. Trading desks worldwide are scrambling to assess exposure...'
          },
          {
            source: 'Bloomberg Terminal',
            headline: 'Credit Default Swaps Explode - Systemic Risk Fears Mount',
            snippet: 'CDS spreads widening to record levels. Analysts warn of potential domino effect across financial sector. Treasury officials in emergency meetings...'
          },
          {
            source: 'Market Watch',
            headline: 'S&P Futures Down Limit - Circuit Breakers Triggered',
            snippet: 'Pre-market trading halted as futures plunge. VIX spiking above 30. Safe haven assets rallying as investors flee to quality...'
          }
        ],
        impact: 'extreme',
        marketReaction: -4.71
      },
      {
        date: 'Sep 29, 2008',
        title: 'TARP Vote Fails',
        description: 'House rejects $700B bailout package, triggering largest single-day point drop in Dow history',
        maskedTitle: 'Phase 2: Rescue Rejected',
        maskedDescription: 'Government intervention fails to pass, causing historic single-day market decline',
        headlines: [
          '🔥 BREAKING: Congress Rejects $700B Emergency Rescue Plan',
          '📉 DOW CRASHES 777 Points - Largest Point Drop Ever',
          '🏛️ Political Gridlock Sends Markets Into Freefall'
        ],
        newsArticles: [
          {
            source: 'CNBC',
            headline: 'House Votes Down Bailout - Markets in Meltdown',
            snippet: 'In a stunning defeat, the House rejected the emergency rescue package 228-205. Dow Jones plummeted 777 points in the worst point drop in history...'
          },
          {
            source: 'Wall Street Journal',
            headline: 'Credit Markets Seize Up as Rescue Plan Fails',
            snippet: 'Interbank lending has virtually stopped. LIBOR-OIS spread blowing out. Banks refusing to lend to each other amid fears of more failures...'
          },
          {
            source: 'Reuters',
            headline: 'Global Selloff Accelerates - "This Is 1929" Say Traders',
            snippet: 'Asian and European markets following U.S. lower. Gold surging. Treasury yields collapsing as investors seek ultimate safety...'
          }
        ],
        impact: 'extreme',
        marketReaction: -7.0
      },
      {
        date: 'Oct 10, 2008',
        title: 'Market Capitulation',
        description: 'S&P 500 plunges 8.8% in worst week since 1933, VIX hits record 76',
        maskedTitle: 'Phase 3: Total Panic',
        maskedDescription: 'Fear index reaches record levels as markets experience worst week in decades',
        headlines: [
          '😱 PANIC: VIX Explodes to 76 - Worst Week Since Great Depression',
          '🌊 TOTAL CAPITULATION: S&P 500 Down 22% in 8 Days',
          '💸 $8 TRILLION in Market Value Evaporates Worldwide'
        ],
        newsArticles: [
          {
            source: 'Bloomberg',
            headline: 'Fear Index Hits Record 76 as Capitulation Accelerates',
            snippet: 'The VIX volatility index surged to an unprecedented 76, surpassing even the 1987 crash. Portfolio managers reporting record redemptions...'
          },
          {
            source: 'Financial Times',
            headline: 'Margin Calls Force Massive Liquidation Across All Assets',
            snippet: 'Hedge funds facing redemptions selling everything. Even gold and Treasuries falling as managers raise cash. Nothing is safe in this environment...'
          },
          {
            source: 'Market Watch',
            headline: 'Retail Investors Capitulate - "I Give Up" Says Amateur Trader',
            snippet: 'Trading volumes explode as retail investors throw in the towel. 401k holders watching retirement savings evaporate. Suicide hotline calls spike...'
          }
        ],
        impact: 'extreme',
        marketReaction: -8.8
      },
      {
        date: 'Nov 20, 2008',
        title: 'Auto Industry Crisis',
        description: 'GM and Chrysler near bankruptcy, threatening millions of jobs',
        maskedTitle: 'Phase 4: Industrial Breakdown',
        maskedDescription: 'Major industrial sector faces collapse, threatening massive job losses',
        headlines: [
          '🚗 CRISIS: Auto Giants Weeks From Bankruptcy',
          '⚙️ 3 Million Jobs at Risk as Industrial Icons Collapse',
          '🏭 Manufacturing Belt in Freefall - Depression Fears Grow'
        ],
        newsArticles: [
          {
            source: 'Detroit News',
            headline: 'Big Three CEOs Plead for Bailout - "We Need $25B Now"',
            snippet: 'Auto executives warn of catastrophic job losses if government does not intervene. Suppliers already filing bankruptcy. Entire supply chain at risk...'
          },
          {
            source: 'Wall Street Journal',
            headline: 'Credit Crisis Spreads to Main Street - Real Economy Imploding',
            snippet: 'No longer just a Wall Street problem. Unemployment claims surging. Consumer spending collapsing. Recession deepening faster than expected...'
          },
          {
            source: 'CNBC',
            headline: 'Markets Resume Selloff - No Bottom in Sight',
            snippet: 'S&P testing October lows. Energy and industrial stocks leading decline. Analysts slashing earnings estimates. "We have no visibility" say CFOs...'
          }
        ],
        impact: 'high',
        marketReaction: -6.7
      },
      {
        date: 'Mar 9, 2009',
        title: 'Market Bottom',
        description: 'S&P 500 hits 676, down 57% from peak. Beginning of bull market',
        maskedTitle: 'Phase 5: Rock Bottom',
        maskedDescription: 'Markets reach lowest point after catastrophic decline. Potential reversal ahead',
        headlines: [
          '📊 S&P 500 HITS 666 - Biblical Bottom or Further to Fall?',
          '💀 DOWN 57% - Worst Bear Market Since Great Depression',
          '🤔 Contrarian Whispers: "Maximum Pessimism = Maximum Opportunity"'
        ],
        newsArticles: [
          {
            source: 'Bloomberg',
            headline: 'S&P Crashes to 12-Year Low - Is This Finally The Bottom?',
            snippet: 'Market down 57% from peak. Some contrarians arguing valuations becoming attractive. But most analysts see more pain ahead. "Catch a falling knife" they warn...'
          },
          {
            source: 'Barrons',
            headline: 'Dividend Yields Top 4% - Value Investors See Opportunity',
            snippet: 'For first time in decades, S&P dividend yield exceeds Treasury yields. Warren Buffett saying "be greedy when others are fearful" but still facing losses...'
          },
          {
            source: 'Financial Times',
            headline: 'Bank Stress Tests Announced - Glimmer of Hope?',
            snippet: 'Government unveiling comprehensive bank stress tests. Some stability returning to credit markets. Is the worst behind us? Sentiment still deeply negative...'
          }
        ],
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
    maskedName: 'Operation Viral Shock',
    maskedDescription: 'Survive a global health crisis that triggers unprecedented market panic and the fastest bear market in history',
    realWorldSummary: 'The COVID-19 pandemic caused the fastest bear market in history, with the S&P 500 dropping 34% in just 23 trading days during February-March 2020. Global lockdowns, oil price wars, and economic uncertainty triggered multiple circuit breakers. However, massive central bank intervention and fiscal stimulus led to a rapid V-shaped recovery, making it one of the shortest bear markets ever recorded.',
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
        maskedTitle: 'Phase 1: Global Threat Emerges',
        maskedDescription: 'A worldwide health crisis begins to spread, spooking markets as economic impact becomes clear',
        headlines: [
          '🦠 ALERT: Novel Virus Spreading Beyond Asia',
          '🌍 WHO Warns of Pandemic Risk - Markets Rattled',
          '✈️ Travel Stocks Plunge as Outbreak Spreads to Europe'
        ],
        newsArticles: [
          {
            source: 'Reuters',
            headline: 'Global Health Crisis Fears Trigger Market Selloff',
            snippet: 'Virus cases surging in Italy and South Korea. Markets realizing this is not contained. Supply chain disruptions beginning to emerge from Asia...'
          },
          {
            source: 'CNBC',
            headline: 'CDC Warns Americans to Prepare - "Disruption to Daily Life"',
            snippet: 'Health officials warning of community spread in U.S. inevitable. Pharma stocks rallying but travel, leisure sectors getting crushed. Volatility spiking...'
          },
          {
            source: 'Wall Street Journal',
            headline: 'Economic Impact Unknown but "Potentially Severe" Say Economists',
            snippet: 'Analysts scrambling to model impact of potential lockdowns. No historical precedent for modern pandemic. Uncertainty driving selling pressure...'
          }
        ],
        impact: 'high',
        marketReaction: -3.4
      },
      {
        date: 'Mar 9, 2020',
        title: 'Black Monday',
        description: 'Oil price war + pandemic fears trigger circuit breakers',
        maskedTitle: 'Phase 2: Panic Monday',
        maskedDescription: 'Multiple crises converge, triggering automatic market shutdowns for the first time in years',
        headlines: [
          '⚫ BLACK MONDAY: Circuit Breakers Halt Trading',
          '🛢️ OIL CRASHES 30% as Price War Erupts',
          '🚨 DOUBLE WHAMMY: Pandemic + Energy Crisis = Panic'
        ],
        newsArticles: [
          {
            source: 'Bloomberg',
            headline: 'Trading Halted as S&P Plunges 7% - First Circuit Breaker Since 2008',
            snippet: 'Markets in freefall as oil price war combines with virus fears. Saudi Arabia flooding market with crude. Futures limit down. This is getting real...'
          },
          {
            source: 'Financial Times',
            headline: 'Italy Locks Down Entire Country - First Western Nation',
            snippet: '60 million people under quarantine. Markets realizing economies will shut down. No earnings visibility. Analysts slashing forecasts in real-time...'
          },
          {
            source: 'Market Watch',
            headline: 'VIX Spikes to 54 - Highest Since 2008 Crisis',
            snippet: 'Fear gauge exploding higher. Option markets pricing in continued chaos. "Sell everything" mentality taking hold. Even bonds selling off...'
          }
        ],
        impact: 'extreme',
        marketReaction: -7.6
      },
      {
        date: 'Mar 16, 2020',
        title: 'Circuit Breaker Week',
        description: 'Third circuit breaker in a week, S&P down 12% in single day',
        maskedTitle: 'Phase 3: System Overload',
        maskedDescription: 'Third trading halt in one week as markets experience historic intraday volatility',
        headlines: [
          '💥 THIRD CIRCUIT BREAKER IN 6 DAYS',
          '🆘 S&P CRASHES 12% - Biggest Drop Since 1987',
          '🏢 Everything Closing: Schools, Offices, Restaurants, Life'
        ],
        newsArticles: [
          {
            source: 'CNBC',
            headline: 'Trading Halted Again - Market Structure Breaking Down',
            snippet: 'Third circuit breaker this week. S&P down 12% in single session. Fed cutting rates to zero. Emergency measures everywhere but markets not responding...'
          },
          {
            source: 'Bloomberg Terminal',
            headline: 'VIX HITS 82.69 - EXCEEDS 2008 CRISIS PEAK',
            snippet: 'Volatility index reaching levels never seen before. Options markets in chaos. Bid-ask spreads widening. Liquidity evaporating. Market makers stepping back...'
          },
          {
            source: 'Wall Street Journal',
            headline: 'Entire U.S. Economy Shutting Down - Unemployment to Skyrocket',
            snippet: 'States ordering lockdowns. Non-essential businesses closing. Airlines empty. Hotels vacant. Economic impact will be catastrophic. Recession certain...'
          }
        ],
        impact: 'extreme',
        marketReaction: -12.0
      },
      {
        date: 'Mar 23, 2020',
        title: 'Market Bottom',
        description: 'S&P 500 hits 2,237, down 34% from peak in fastest bear market ever',
        maskedTitle: 'Phase 4: Fastest Bear Ever',
        maskedDescription: 'Markets complete record-breaking collapse in shortest time period ever recorded',
        headlines: [
          '📉 FASTEST BEAR MARKET IN HISTORY - 23 Days',
          '😷 6.6M Jobless Claims in ONE WEEK - Unthinkable',
          '💊 No Vaccine, No Treatment, No End in Sight'
        ],
        newsArticles: [
          {
            source: 'Reuters',
            headline: 'S&P 500 Down 34% From Peak - Fastest Bear Market Ever',
            snippet: 'What took months in 2008 happened in weeks. Economy in freefall. Jobless claims exploding. Depression-level unemployment coming. Stay at home orders everywhere...'
          },
          {
            source: 'Financial Times',
            headline: 'Central Banks Deploy "Whatever It Takes" - Unlimited QE',
            snippet: 'Fed announcing unlimited bond purchases. Fiscal stimulus of $2 trillion passed. Governments doing everything possible. But will it work against virus?'
          },
          {
            source: 'Market Watch',
            headline: 'Capitulation or Bottom? Nobody Knows',
            snippet: 'Some see value emerging. Others see depression ahead. Hospital systems overwhelmed. Death toll rising. Economic data will be apocalyptic. Can you catch this knife?'
          }
        ],
        impact: 'extreme',
        marketReaction: -2.9
      },
      {
        date: 'Apr 6, 2020',
        title: 'V-Shaped Rally Begins',
        description: 'Fed unlimited QE + stimulus checks fuel historic rebound',
        maskedTitle: 'Phase 5: Money Printer Goes Brrr',
        maskedDescription: 'Central banks unleash unlimited stimulus, igniting one of the strongest rallies in history',
        headlines: [
          '💵 BRRR: Fed Balance Sheet Explodes $3 Trillion',
          '🚀 Markets Rally 25% From Lows Despite Worsening Virus',
          '💰 Stimulus Checks Arriving - Robinhood Accounts Surge'
        ],
        newsArticles: [
          {
            source: 'Bloomberg',
            headline: 'Unprecedented Rally as Fed Goes "All In"',
            snippet: 'Markets surging despite worst economic data ever. Fed buying everything. Stimulus checks in bank accounts. "Don\'t fight the Fed" proving true again...'
          },
          {
            source: 'CNBC',
            headline: 'Retail Traders Pile In - "Stocks Only Go Up"',
            snippet: 'New trading accounts exploding. Young traders using stimulus checks to buy stocks. Tech stocks leading rally. FOMO kicking in. Is this sustainable?'
          },
          {
            source: 'Wall Street Journal',
            headline: 'Markets vs Reality: Disconnect Growing',
            snippet: 'Unemployment at depression levels but stocks rallying. Fed put firmly in place. Liquidity flooding system. "There is no alternative" to stocks say analysts...'
          }
        ],
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
    maskedName: 'Operation Euphoria Collapse',
    maskedDescription: 'Navigate the bursting of a massive speculative bubble in technology stocks and survive a prolonged bear market',
    realWorldSummary: 'The Dot-com Bubble burst starting in March 2000 when the NASDAQ peaked at 5,048 after years of irrational speculation on internet companies. The crash wiped out $5 trillion in market value as the NASDAQ fell 78% over 31 months. Compounded by the 9/11 attacks and major corporate accounting scandals (Enron, WorldCom), this became one of the longest and most devastating bear markets for technology stocks.',
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
        maskedTitle: 'Phase 1: Peak Euphoria',
        maskedDescription: 'Speculative frenzy reaches climax as technology index hits all-time high on irrational valuations',
        headlines: [
          '🚀 NASDAQ HITS 5,048 - New Era of Technology Begins!',
          '💰 Tech Stocks to the Moon - "This Time It\'s Different"',
          '🌐 Internet Revolution: Dot-coms Worth More Than Old Economy'
        ],
        newsArticles: [
          {
            source: 'Wall Street Journal',
            headline: 'NASDAQ Reaches Historic 5,048 Milestone - No End in Sight',
            snippet: 'The technology-heavy index continues its stratospheric rise. Analysts raising price targets daily. "Traditional valuation metrics don\'t apply to the internet age" say bulls...'
          },
          {
            source: 'Bloomberg',
            headline: 'IPO Mania: Companies with No Profits Trading at 100x Sales',
            snippet: 'Dot-com IPOs doubling on first day. Investors don\'t care about earnings. "Eyeballs" and "clicks" are new metrics. Greenspan\'s "irrational exuberance" warning ignored...'
          },
          {
            source: 'CNBC',
            headline: 'Day Traders Quitting Jobs - "Stock Market is Easy Money"',
            snippet: 'Retail trading exploding. Everyone is making money in tech stocks. Barbers giving stock tips. "Get in now or miss the greatest wealth creation in history" say pundits...'
          }
        ],
        impact: 'medium',
        marketReaction: -2.6
      },
      {
        date: 'Apr 14, 2000',
        title: 'Black Friday',
        description: 'NASDAQ drops 9.7% as tech bubble starts to deflate',
        maskedTitle: 'Phase 2: Dark Friday',
        maskedDescription: 'Technology index crashes nearly 10% in single day as reality sets in',
        headlines: [
          '⚫ BLACK FRIDAY: NASDAQ CRASHES 9.7% in Single Day',
          '💥 BUBBLE BURSTING? Tech Stocks in Freefall',
          '😱 $2 TRILLION Evaporates as Reality Hits Dot-coms'
        ],
        newsArticles: [
          {
            source: 'Financial Times',
            headline: 'Tech Wreck: NASDAQ Plunges in Worst Day Since 1987',
            snippet: 'The selling is relentless. Dot-com darlings down 20-30% in single session. Margin calls forcing liquidation. Is this the end of the tech party?'
          },
          {
            source: 'Bloomberg Terminal',
            headline: 'Valuations Under Microscope - Profitless Companies Crushed',
            snippet: 'Market suddenly caring about fundamentals. Companies burning cash with no revenue getting destroyed. "Path to profitability" questions mounting. Analysts cutting ratings...'
          },
          {
            source: 'Reuters',
            headline: 'Microsoft Antitrust Ruling Triggers Tech Selloff',
            snippet: 'Federal judge rules Microsoft violated antitrust laws. Tech sector reeling. Investors questioning if regulatory risk was underestimated. Flight to quality accelerating...'
          }
        ],
        impact: 'extreme',
        marketReaction: -9.7
      },
      {
        date: 'Sep 11, 2001',
        title: '9/11 Attacks',
        description: 'Terrorist attacks close markets for 4 days, S&P drops 11.6% when reopened',
        maskedTitle: 'Phase 3: Nation Under Attack',
        maskedDescription: 'Unprecedented national crisis forces market closure. Historic reopening selloff ensues',
        headlines: [
          '🇺🇸 MARKETS CLOSED: Nation in Crisis',
          '💔 Unprecedented Shutdown - When Will Markets Reopen?',
          '⚠️ Economic Impact Unknown - Fear Grips Wall Street'
        ],
        newsArticles: [
          {
            source: 'Wall Street Journal',
            headline: 'Markets Remain Closed as Nation Reels - Longest Shutdown Since 1933',
            snippet: 'NYSE closed for fourth consecutive day. Market infrastructure damaged. Trading floors evacuated. When markets reopen, massive selloff expected...'
          },
          {
            source: 'CNBC',
            headline: 'Markets Reopen Monday - Brace for Historic Losses',
            snippet: 'S&P futures indicating 10%+ opening gap down. Airlines, insurance stocks expected to be decimated. Economic impact incalculable. Recession fears mounting...'
          },
          {
            source: 'Bloomberg',
            headline: 'S&P Plunges 11.6% on Reopening - Worst Week Since Depression',
            snippet: 'Selling pressure immense. VIX spiking. Flight to safety driving Treasury yields to record lows. Airline stocks down 40%. Insurance sector in crisis. How deep will this go?'
          }
        ],
        impact: 'extreme',
        marketReaction: -11.6
      },
      {
        date: 'Jul 2002',
        title: 'Corporate Scandals',
        description: 'Enron, WorldCom accounting frauds shake investor confidence',
        maskedTitle: 'Phase 4: Trust Evaporates',
        maskedDescription: 'Massive corporate fraud revelations destroy investor confidence in market integrity',
        headlines: [
          '🔥 WORLDCOM FRAUD: $11 Billion Accounting Scandal',
          '💼 Corporate America in Crisis - Who Can You Trust?',
          '⚖️ Criminal Charges Mount - Executive Perp Walks Begin'
        ],
        newsArticles: [
          {
            source: 'Wall Street Journal',
            headline: 'WorldCom Files Largest Bankruptcy in U.S. History After Fraud',
            snippet: '$11 billion in false accounting discovered. CEO arrested. Following Enron, Tyco, Adelphia scandals. Investors questioning all corporate earnings. Trust completely broken...'
          },
          {
            source: 'Financial Times',
            headline: 'Audit Firms Under Fire - Arthur Andersen Collapses',
            snippet: 'Accounting profession in crisis. How did auditors miss massive fraud? New regulations coming. Sarbanes-Oxley legislation being rushed through Congress...'
          },
          {
            source: 'CNBC',
            headline: 'Markets Plunge on Corporate Fraud Fears - "What Else is Fake?"',
            snippet: 'S&P down 8% in days. Investors selling everything. If WorldCom can hide $11B, what about other companies? Earnings reports now viewed with suspicion. Bear market deepening...'
          }
        ],
        impact: 'high',
        marketReaction: -7.9
      },
      {
        date: 'Oct 9, 2002',
        title: 'Bear Market Bottom',
        description: 'S&P 500 hits 776, down 49% from peak. NASDAQ down 78%',
        maskedTitle: 'Phase 5: Bear Capitulation',
        maskedDescription: 'After 31 months of decline, markets finally find bottom in historic bear market',
        headlines: [
          '📉 NASDAQ DOWN 78% - Worst Tech Crash Ever',
          '💀 31 MONTHS of Pain - Is This Finally The Bottom?',
          '🤔 Contrarians Emerging: "Maximum Pessimism Creates Opportunity"'
        ],
        newsArticles: [
          {
            source: 'Bloomberg',
            headline: 'S&P Hits 776 - Worst Bear Market Since 1970s Stagflation',
            snippet: 'After 31 brutal months, some signs of capitulation. But who wants to catch this falling knife? Tech stocks obliterated. Most dot-coms bankrupt. "New economy" was a mirage...'
          },
          {
            source: 'Barrons',
            headline: 'Valuations Finally Reasonable - Value Investors See Opportunity',
            snippet: 'P/E ratios back to historical norms. Dividend yields attractive again. Warren Buffett buying. But sentiment remains deeply negative. "Once burned, twice shy" say retail investors...'
          },
          {
            source: 'Market Watch',
            headline: 'Mutual Fund Redemptions Accelerate - Retail Throwing in Towel',
            snippet: 'Individual investors finally capitulating after 2+ years of losses. 401k accounts devastated. "I\'ll never trust stocks again" common refrain. Classic bottom signal? Or more pain ahead?'
          }
        ],
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
