# 🚀 Getting Started with QuantQuest Agent

## What You Have

A complete gamified trading simulation platform with AI coaching, built entirely in the `claude-agent` folder. No modifications were made to the existing QuantQuest or quant-quest-agent projects.

---

## ⚡ Quick Start (2 Minutes)

### Step 1: Get Your API Key
1. Go to [https://console.anthropic.com/](https://console.anthropic.com/)
2. Sign up or log in
3. Create an API key
4. Copy it (starts with `sk-ant-...`)

### Step 2: Configure
Create a `.env` file in the `claude-agent` folder:
```bash
VITE_ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### Step 3: Run
```bash
npm run dev
```

Open **http://localhost:5173** in your browser!

---

## 🎮 How to Play

### 1. Select a Mission
Click on one of three historic crises:
- **2008 Financial Crisis** (Extreme) - Navigate Lehman collapse
- **COVID-19 Crash** (Hard) - Survive pandemic panic
- **Dot-com Bubble** (Hard) - Trade through tech crash

### 2. Read the Brief
Each stage shows:
- Current event (e.g., "Lehman Brothers Bankruptcy")
- Market impact (-4.71%)
- Economic indicators (VIX, Unemployment, etc.)
- Event description

### 3. Make Your Decision
**Type your strategy in natural language:**
- "Buy SPY puts to hedge downside"
- "Go long tech, this is an overreaction"
- "Move 80% to cash and wait"

**Set your allocation:**
- Use slider to choose 0-100% of capital
- Conservative: 10-30%
- Moderate: 40-60%
- Aggressive: 70-100%

### 4. Get AI Feedback
The AI agent tells you:
- **P&L**: How much you made/lost
- **What Happened**: Narrative of events
- **Better Move**: What would have worked better
- **Risk Insight**: Commentary on your approach
- **What's Next**: Preview of coming events

### 5. Track Performance
Bottom panel shows:
- Total trades
- Win rate
- Average P&L
- Full decision history

---

## 📊 Sample Decision Flow

**Stage**: 2008 GFC, Lehman Bankruptcy
**Indicators**: VIX at 76, Market down 4.71%

**Your Decision**:
> "Short financial sector ETFs, 50% allocation"

**AI Response**:
```
✅ P&L: +$8,400 (+8.4%)

Your defensive positioning worked. The Lehman collapse
triggered a financial sector meltdown. Your shorts
captured the panic, earning 8,400 credits.

Better Alternative:
Scale entries in thirds to capture rebounds while
maintaining protection. Mix hedges with opportunistic
longs once credit spreads stabilize.

Risk Callout:
50% allocation provides balance. Keep dry powder for
the TARP vote failure coming next week.

Next Event:
TARP Vote Fails - House rejects $700B bailout package,
triggering largest single-day point drop in Dow history
```

---

## 🎯 Tips for Success

### Reading the Market
- **VIX > 50**: Extreme fear, consider defensive plays
- **Negative Indicators**: Market headwinds, be cautious
- **High Impact Events**: Big moves possible, size accordingly

### Strategy Types
**Bearish** (market crashing):
- "Short", "Put", "Hedge", "Protect"

**Bullish** (buying opportunity):
- "Buy", "Long", "Accumulate", "Opportunity"

**Defensive** (wait and see):
- "Cash", "Wait", "Reduce", "Patient"

### Position Sizing
- **High Conviction + Low Risk**: 60-80%
- **Moderate Conviction**: 40-60%
- **Testing Waters**: 20-40%
- **Extreme Uncertainty**: 10-20%

### Learning Loop
1. Make decision
2. See outcome
3. Read AI coaching
4. Try better approach next stage
5. Review history to find patterns

---

## 🏆 Winning Strategies

### 2008 Financial Crisis
- Early stages: Go defensive, buy puts
- Middle stages: Stay in cash
- Final stage: Capitulate bottom, go long

### COVID-19 Crash
- Initial: Hedge with puts
- Circuit breakers: Wait for stabilization
- Recovery: Catch the V-shaped rally

### Dot-com Bubble
- Peak: Short overvalued tech
- Prolonged bear: Stay defensive
- Bottom: Position for recovery

---

## 🛠️ Troubleshooting

### "Failed to analyze decision"
- Check `.env` file exists
- Verify API key is correct
- Check Anthropic console (key active?)
- See browser console for details

### Blank Screen
- Run `npm install` again
- Check browser console for errors
- Try clearing cache (Cmd+Shift+R)

### No AI Responses
- Verify `.env` file is in root of `claude-agent`
- Don't use quotes around the key
- Make sure key starts with `sk-ant-`

### Fallback Mode
If AI fails, rule-based analysis kicks in:
- Still functional
- Less personalized
- Good for testing

---

## 📁 Project Files

```
claude-agent/
├── src/
│   ├── components/         # UI components
│   ├── data/missions.ts    # Crisis scenarios
│   ├── lib/aiAgent.ts      # AI integration
│   ├── lib/keystore.ts     # Storage
│   └── App.tsx             # Main app
├── package.json
├── .env                    # Your API key (create this!)
├── README.md               # Full docs
├── SETUP.md                # Setup guide
└── GETTING_STARTED.md      # This file
```

---

## 🎓 Educational Goals

By playing, you'll learn:
- How to read market indicators
- Risk management and position sizing
- Event-driven trading strategies
- The psychology of crisis markets
- How to analyze your decision-making

---

## 🚧 What's Next?

Once comfortable:
1. Try beating each crisis with positive returns
2. Experiment with different strategies
3. Analyze your win rate patterns
4. Compare approaches across missions

---

## 💡 Example Scenarios to Try

### Conservative Approach
- Small positions (20-30%)
- Focus on capital preservation
- Wait for clear signals
- **Goal**: Minimize losses

### Aggressive Approach
- Large positions (60-80%)
- Catch falling knives
- Bet on reversals
- **Goal**: Maximize returns

### Contrarian Approach
- Go against the crowd
- Buy fear, sell greed
- Time the bottom
- **Goal**: Beat the market

---

## 📈 Success Metrics

**Beginner Goals**:
- Complete a mission
- Achieve 40%+ win rate
- Understand indicator meanings

**Intermediate Goals**:
- Positive returns in one crisis
- 60%+ win rate
- Master position sizing

**Advanced Goals**:
- Positive returns in all crises
- 70%+ win rate
- Consistently beat benchmarks

---

## 🔗 Resources

- **README.md**: Full project documentation
- **SETUP.md**: Detailed setup instructions
- **PROJECT_SUMMARY.md**: Technical overview
- **Browser Console**: Debug information

---

## 🎉 You're Ready!

```bash
npm run dev
```

Visit **http://localhost:5173** and start your first mission!

---

**Remember**: This is educational. Real trading is complex and risky. Always consult professionals before investing real money.

Happy simulating! 🚀
