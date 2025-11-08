# Quick Setup Guide

## Step 1: Get Your Anthropic API Key

1. Visit [https://console.anthropic.com/](https://console.anthropic.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (it starts with `sk-ant-...`)

## Step 2: Configure Environment

Create a `.env` file in the project root:

```bash
VITE_ANTHROPIC_API_KEY=sk-ant-your-key-here
```

**Important**: Never commit this file to git! It's already in `.gitignore`.

## Step 3: Install Dependencies (if not done)

```bash
npm install
```

## Step 4: Start the Development Server

```bash
npm run dev
```

The app will be available at: **http://localhost:5173**

## Step 5: Start Playing

1. **Select a Mission**: Click on one of the crisis scenarios (2008 GFC, COVID-19, Dot-com)
2. **Read the Brief**: Check the current market conditions and economic indicators
3. **Make a Decision**: Type your strategy in plain English
   - Examples:
     - "Buy protective puts on the S&P 500"
     - "Go long tech stocks, this is an overreaction"
     - "Move 80% to cash and wait for stabilization"
4. **Set Allocation**: Use the slider to choose how much capital to deploy (0-100%)
5. **Execute**: Click "Execute Decision"
6. **Learn**: Read the AI agent's analysis of what happened

## Understanding the Interface

### Mission Grid (Left Sidebar)
- Shows all available crisis scenarios
- Color-coded by difficulty
- Shows duration and max drawdown

### Decision Console (Top Center)
- Current market brief with key events
- Economic indicators in real-time
- Text input for your strategy
- Capital allocation slider

### AI Agent Analysis (Bottom Center)
- P&L outcome (profit/loss)
- Narrative of what happened
- Better alternative strategies
- Risk management insights
- Preview of next events

### History Panel (Bottom)
- All your past decisions
- Win rate and average P&L
- Total performance metrics
- Can clear history per mission

## Tips for Better Decisions

1. **Read the Indicators**: Economic data gives clues about market direction
2. **Manage Risk**: Don't allocate 100% on one decision
3. **Think Contrarian**: Sometimes the obvious move is the wrong move
4. **Learn from AI**: The agent's coaching helps you improve
5. **Track Progress**: Review your history to see patterns

## Troubleshooting

### "Failed to analyze decision" Error
- Check your `.env` file has the correct API key
- Verify the API key is active in Anthropic console
- Check browser console for detailed error messages

### Styling Issues
- Clear browser cache
- Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### No Missions Showing
- Check browser console for JavaScript errors
- Verify all files are in place in `src/data/missions.ts`

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Next Steps

Once you're comfortable with the basic gameplay:
- Try different strategies for the same crisis
- Compare your decisions across missions
- Aim for positive returns in extreme volatility scenarios
- Study the AI's coaching to improve your intuition

---

Happy simulating! Remember: This is for education, not financial advice.
