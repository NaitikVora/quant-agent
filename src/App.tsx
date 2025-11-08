import { useState, useMemo } from 'react';
import MissionGrid from './components/MissionGrid';
import DecisionConsole from './components/DecisionConsole';
import AgentNarrative from './components/AgentNarrative';
import HistoryPanel from './components/HistoryPanel';
import AchievementNotification from './components/AchievementNotification';
import LevelUpNotification from './components/LevelUpNotification';
import Confetti from './components/Confetti';
import XPBar from './components/XPBar';
import PlayerProfile from './components/PlayerProfile';
import AchievementsPanel from './components/AchievementsPanel';
import { CrisisScenario, AgentResponse, DecisionRecord } from './types';
import { Achievement } from './types/gamification';
import { missions } from './data/missions';
import { analyzeDecision } from './lib/aiAgent';
import { useDecisionStore } from './hooks/useDecisionStore';
import { useGamification } from './hooks/useGamification';
import { Trophy, User } from 'lucide-react';
import './App.css';

function App() {
  const { records, addRecord, clearMission } = useDecisionStore();
  const { profile, refreshProfile, recordTrade, completeMission } = useGamification();

  const [activeMission, setActiveMission] = useState<CrisisScenario | null>(null);
  const [stageIndex, setStageIndex] = useState(0);
  const [capital, setCapital] = useState(100000);
  const [agentResponse, setAgentResponse] = useState<AgentResponse | null>(null);
  const [missionStartCapital, setMissionStartCapital] = useState(100000);

  // Gamification UI state
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [newLevel, setNewLevel] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiType, setConfettiType] = useState<'success' | 'epic' | 'legendary'>('success');
  const [showProfile, setShowProfile] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);

  const missionRecords = useMemo(() => {
    if (!activeMission) return records;
    return records.filter((record) => record.missionId === activeMission.id);
  }, [records, activeMission]);

  const progress = useMemo(() => {
    if (!activeMission) return 0;
    const totalStages = activeMission.keyEvents.length;
    if (!agentResponse) return 0;
    const completed = agentResponse.missionComplete ? totalStages : Math.min(stageIndex, totalStages);
    return Math.round((completed / totalStages) * 100);
  }, [activeMission, stageIndex, agentResponse]);

  const handleMissionSelect = (mission: CrisisScenario) => {
    setActiveMission(mission);
    setStageIndex(0);
    setCapital(100000);
    setMissionStartCapital(100000);
    setAgentResponse(null);
  };

  const handleDecision = async (decisionText: string, allocation: number) => {
    if (!activeMission) return;

    try {
      const response = await analyzeDecision({
        scenario: activeMission,
        decision: decisionText,
        stageIndex,
        capital,
        allocation
      });

      setAgentResponse(response);
      setCapital(response.capitalAfter);
      setStageIndex(response.nextStageIndex);

      // Store decision in keystore
      const record: DecisionRecord = {
        id: `${activeMission.id}-${Date.now()}`,
        missionId: activeMission.id,
        missionName: activeMission.name,
        stageIndex,
        stageTitle: response.stageTitle,
        decision: decisionText,
        allocation,
        capitalBefore: capital,
        capitalAfter: response.capitalAfter,
        pnl: response.pnl,
        pnlPct: response.pnlPct,
        aiSummary: response.summary,
        betterAlternative: response.betterAlternative,
        riskCallout: response.riskCallout,
        timestamp: new Date().toISOString()
      };

      addRecord(record);

      // Gamification: Record trade and check for achievements
      const { newAchievements } = recordTrade(response.pnl, allocation, capital);

      // Show confetti for wins
      if (response.pnl > 0) {
        setShowConfetti(true);
        setConfettiType('success');
        setTimeout(() => setShowConfetti(false), 100);
      }

      // Show achievement notifications
      if (newAchievements.length > 0) {
        const firstAchievement = newAchievements[0];
        setNewAchievement(firstAchievement);

        // Show confetti based on rarity
        if (firstAchievement.rarity === 'legendary') {
          setConfettiType('legendary');
        } else if (firstAchievement.rarity === 'epic') {
          setConfettiType('epic');
        }
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 100);
      }

      // Check for level up
      const oldLevel = profile.stats.level;
      refreshProfile();
      const updatedProfile = profile;
      if (updatedProfile.stats.level > oldLevel) {
        setNewLevel(updatedProfile.stats.level);
        setShowLevelUp(true);
        setConfettiType('epic');
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 100);
      }

      // Check if mission is complete
      if (response.missionComplete) {
        const missionPnl = response.capitalAfter - missionStartCapital;
        const missionRecords = records.filter(r => r.missionId === activeMission.id);
        const allWins = missionRecords.every(r => r.pnl > 0) && response.pnl > 0;

        completeMission(activeMission.id, missionPnl, allWins);
        refreshProfile();

        // Big confetti for mission complete with profit
        if (missionPnl > 0) {
          setConfettiType('legendary');
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 100);
        }
      }

    } catch (error) {
      console.error('Failed to analyze decision:', error);
    }
  };

  const handleClearMission = () => {
    if (activeMission) {
      clearMission(activeMission.id);
    }
  };

  return (
    <div className="app-container">
      {/* Gamification Overlays */}
      <Confetti trigger={showConfetti} type={confettiType} />
      <AchievementNotification
        achievement={newAchievement}
        onClose={() => setNewAchievement(null)}
      />
      <LevelUpNotification
        newLevel={newLevel}
        show={showLevelUp}
        onClose={() => setShowLevelUp(false)}
      />

      {/* Sidebar Panels */}
      {showProfile && (
        <div className="modal-overlay" onClick={() => setShowProfile(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <PlayerProfile profile={profile} />
          </div>
        </div>
      )}

      {showAchievements && (
        <div className="modal-overlay" onClick={() => setShowAchievements(false)}>
          <div className="modal-content modal-wide" onClick={(e) => e.stopPropagation()}>
            <AchievementsPanel profile={profile} />
          </div>
        </div>
      )}

      <header className="app-header">
        <div className="header-content">
          <div>
            <div className="eyebrow">QuantQuest Agent</div>
            <h1 className="app-title">AI-Powered Crisis Simulations</h1>
            <p className="app-subtitle">
              Make decisions, watch markets react, earn XP and unlock achievements!
            </p>
          </div>

          {/* Gamification Buttons */}
          <div className="gamification-buttons">
            <button onClick={() => setShowProfile(true)} className="icon-button" title="View Profile">
              <User className="h-5 w-5" />
            </button>
            <button onClick={() => setShowAchievements(true)} className="icon-button" title="View Achievements">
              <Trophy className="h-5 w-5" />
              {profile.achievements.length > 0 && (
                <span className="badge-count">{profile.achievements.length}</span>
              )}
            </button>
          </div>
        </div>

        {/* XP Bar */}
        <div className="xp-bar-wrapper">
          <XPBar stats={profile.stats} />
        </div>

        {activeMission && (
          <div className="progress-card">
            <div className="text-sm text-gray-400 mb-2">Mission Progress</div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">{progress}%</div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="text-xs text-gray-500 mt-2">{activeMission.name}</div>
          </div>
        )}
      </header>

      <main className="app-layout">
        <aside className="sidebar">
          <MissionGrid
            missions={missions}
            selectedMissionId={activeMission?.id}
            onSelect={handleMissionSelect}
          />
        </aside>

        <section className="main-content">
          <DecisionConsole
            scenario={activeMission}
            stageIndex={stageIndex}
            capital={capital}
            onSubmit={handleDecision}
            disabled={!activeMission || (agentResponse?.missionComplete ?? false)}
          />
          <AgentNarrative
            response={agentResponse}
            scenario={activeMission}
            capital={capital}
          />
        </section>
      </main>

      <HistoryPanel
        records={missionRecords}
        missionName={activeMission?.name ?? 'All Missions'}
        onClear={activeMission ? handleClearMission : undefined}
      />
    </div>
  );
}

export default App;
