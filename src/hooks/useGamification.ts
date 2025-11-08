import { useState, useEffect } from 'react';
import { PlayerProfile } from '@/types/gamification';
import { gamification } from '@/lib/gamification';

export function useGamification() {
  const [profile, setProfile] = useState<PlayerProfile>(gamification.getProfile());

  const refreshProfile = () => {
    setProfile(gamification.getProfile());
  };

  useEffect(() => {
    refreshProfile();
  }, []);

  return {
    profile,
    refreshProfile,
    recordTrade: gamification.recordTrade.bind(gamification),
    completeMission: gamification.completeMission.bind(gamification),
    addXp: gamification.addXp.bind(gamification),
    updateStats: gamification.updateStats.bind(gamification)
  };
}
