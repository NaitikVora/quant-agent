import { useState, useEffect } from 'react';
import { DecisionRecord } from '@/types';
import { keystore } from '@/lib/keystore';

export function useDecisionStore() {
  const [records, setRecords] = useState<DecisionRecord[]>([]);

  useEffect(() => {
    setRecords(keystore.getAll());
  }, []);

  const addRecord = (record: DecisionRecord) => {
    keystore.add(record);
    setRecords(keystore.getAll());
  };

  const clearMission = (missionId: string) => {
    keystore.clearMission(missionId);
    setRecords(keystore.getAll());
  };

  const clearAll = () => {
    keystore.clearAll();
    setRecords([]);
  };

  return {
    records,
    addRecord,
    clearMission,
    clearAll
  };
}
