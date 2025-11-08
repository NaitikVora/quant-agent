# QuantQuest Agent

A gamified platform for simulating historic financial crises with AI-powered coaching. Make trading decisions, watch the AI agent analyze your moves, and learn from every choice.

## Features

- **Mission Selection**: Choose from historic crises (2008 Financial Crisis, COVID-19 Crash, Dot-com Bubble)
- **Real-Time Market Briefs**: Get economic indicators and event descriptions before each decision
- **Text-Based Decisions**: Type your strategy in natural language - no rigid forms
- **AI-Powered Analysis**: Powered by Anthropic's Claude, providing realistic P&L calculations and coaching
- **Decision Tracking**: Every decision is stored in a keystore for analysis
- **Performance Analytics**: Track win rate, average P&L, and total returns
- **Gamified Progress**: Visual progress tracking through each mission

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **AI**: Anthropic Claude SDK (Sonnet 3.5)
- **Storage**: LocalStorage for decision history
- **Styling**: Custom CSS with dark theme
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

1. Clone the repository:
```bash
cd claude-agent
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

## How It Works

### 1. Mission Selection
Choose a historic crisis from the mission grid. Each mission has:
- Multiple stages (key events)
- Economic indicators
- Difficulty rating
- Historic market data

### 2. Make Decisions
For each stage:
- Read the market brief with current indicators
- Type your trading strategy in natural language
- Set your capital allocation (0-100%)
- Submit your decision

### 3. AI Analysis
The AI agent analyzes your decision and provides:
- **P&L Calculation**: Realistic profit/loss based on market conditions
- **Event Narrative**: What happened after your decision
- **Better Alternatives**: Coaching on what could have worked better
- **Risk Management**: Insights on your risk approach
- **Next Events**: Preview of what's coming

### 4. Track Performance
All decisions are stored with:
- Timestamp
- Mission and stage
- Your decision text
- Capital allocation
- P&L outcome
- AI coaching

## Project Structure

```
claude-agent/
├── src/
│   ├── components/          # React components
│   │   ├── MissionGrid.tsx       # Mission selection UI
│   │   ├── DecisionConsole.tsx   # Decision input + market brief
│   │   ├── AgentNarrative.tsx    # AI analysis display
│   │   └── HistoryPanel.tsx      # Decision history + stats
│   ├── data/
│   │   └── missions.ts           # Crisis scenarios data
│   ├── hooks/
│   │   └── useDecisionStore.ts   # LocalStorage hook
│   ├── lib/
│   │   ├── aiAgent.ts            # AI integration + fallback
│   │   └── keystore.ts           # Storage utilities
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main app component
│   ├── App.css                   # Application styles
│   └── main.tsx                  # Entry point
├── package.json
├── vite.config.ts
└── README.md
```

## Customization

### Adding New Missions

Edit `src/data/missions.ts` and add a new crisis scenario:

```typescript
{
  id: 'your-crisis-id',
  name: 'Your Crisis Name',
  code: 'CODE',
  description: 'Brief description',
  startDate: 'Month Year',
  endDate: 'Month Year',
  duration: 'X months',
  maxDrawdown: '-XX%',
  volatility: 'XX%',
  difficulty: 'Medium',
  keyEvents: [
    {
      date: 'Mon DD, YYYY',
      title: 'Event Title',
      description: 'What happened',
      impact: 'high',
      marketReaction: -5.2
    }
  ],
  economicIndicators: [
    {
      name: 'Indicator Name',
      value: 100,
      unit: '%',
      change: -10,
      description: 'What this means'
    }
  ]
}
```

### Modifying AI Behavior

Edit `src/lib/aiAgent.ts`:
- Adjust the prompt for different coaching styles
- Modify P&L calculation logic
- Change the AI model (currently using `claude-3-5-sonnet-20241022`)

### Changing Storage

Replace LocalStorage in `src/lib/keystore.ts` with:
- Backend API calls
- IndexedDB for larger datasets
- Firebase/Supabase for cloud sync

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

Preview the production build:
```bash
npm run preview
```

## Features Roadmap

- [ ] Real-time multiplayer challenges
- [ ] Leaderboards and rankings
- [ ] More crisis scenarios (1987 Black Monday, 1997 Asian Crisis, etc.)
- [ ] Portfolio visualization with charts
- [ ] Achievement system
- [ ] Strategy templates
- [ ] Export decision history as CSV
- [ ] Backend API for persistent storage

## Contributing

This is a proof-of-concept educational platform. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this for educational purposes

## Acknowledgments

- Built with insights from the existing QuantQuest project
- Powered by Anthropic's Claude AI
- Financial crisis data sourced from historic market records

---

**Note**: This is an educational simulation. Past market performance does not guarantee future results. Always consult with a licensed financial advisor before making real investment decisions.
