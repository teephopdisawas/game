'use client';

import { useState, useCallback, useEffect } from 'react';
import { GameState, SaveData } from '@/types/game';

const STORAGE_KEY = 'valdaren-echoes-save';

const initialGameState: GameState = {
  playerName: '',
  currentAct: 1,
  currentScene: 'scene-awakening',
  
  languagesLearned: ['english'],
  dialectMastery: {
    codex: 0,
    verdant: 0,
    glacial: 0,
    echo: 0,
    pure: 0
  },
  glyphsUnlocked: ['glyph-memory'],
  questsCompleted: [],
  activeQuests: ['prologue-awakening'],
  
  factionReputation: {
    institute: 0,
    clans: 0,
    echoborn: 0,
    neutral: 50
  },
  characterTrust: {
    lyra: 0,
    kaelen: -20,
    serai: 10,
    veyth: 0,
    meren: 15,
    thrynn: 5,
    sava: 0,
    velran: -30
  },
  
  driftStability: 50,
  worldStateFlags: [],
  glyphCorruptionLevel: 0,
  
  achievementsUnlocked: [],
  
  saveSlot: 0,
  lastSaved: null,
  playtime: 0
};

// Load saved game state from localStorage
function loadSavedState(): GameState {
  if (typeof window === 'undefined') return initialGameState;
  
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved) as GameState;
    } catch {
      console.error('Failed to parse saved game state');
    }
  }
  return initialGameState;
}

export function useGameState() {
  // Initialize state with saved data (runs once, client-side)
  const [gameState, setGameState] = useState<GameState>(() => loadSavedState());
  // For SSR: always true since we initialize from localStorage in useState initializer
  const isLoaded = true;

  // Auto-save on state change (debounced)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timeout = setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [gameState]);

  const updatePlayerName = useCallback((name: string) => {
    setGameState(prev => ({ ...prev, playerName: name }));
  }, []);

  const updateCurrentScene = useCallback((sceneId: string) => {
    setGameState(prev => ({ ...prev, currentScene: sceneId }));
  }, []);

  const updateCurrentAct = useCallback((act: number) => {
    setGameState(prev => ({ ...prev, currentAct: act }));
  }, []);

  const learnLanguage = useCallback((languageId: string) => {
    setGameState(prev => {
      if (prev.languagesLearned.includes(languageId)) return prev;
      return {
        ...prev,
        languagesLearned: [...prev.languagesLearned, languageId]
      };
    });
  }, []);

  const updateDialectMastery = useCallback((dialectId: string, amount: number) => {
    setGameState(prev => ({
      ...prev,
      dialectMastery: {
        ...prev.dialectMastery,
        [dialectId]: Math.min(100, Math.max(0, (prev.dialectMastery[dialectId] || 0) + amount))
      }
    }));
  }, []);

  const unlockGlyph = useCallback((glyphId: string) => {
    setGameState(prev => {
      if (prev.glyphsUnlocked.includes(glyphId)) return prev;
      return {
        ...prev,
        glyphsUnlocked: [...prev.glyphsUnlocked, glyphId]
      };
    });
  }, []);

  const completeQuest = useCallback((questId: string) => {
    setGameState(prev => ({
      ...prev,
      questsCompleted: [...prev.questsCompleted, questId],
      activeQuests: prev.activeQuests.filter(id => id !== questId)
    }));
  }, []);

  const activateQuest = useCallback((questId: string) => {
    setGameState(prev => {
      if (prev.activeQuests.includes(questId)) return prev;
      return {
        ...prev,
        activeQuests: [...prev.activeQuests, questId]
      };
    });
  }, []);

  const updateFactionReputation = useCallback((factionId: string, change: number) => {
    setGameState(prev => ({
      ...prev,
      factionReputation: {
        ...prev.factionReputation,
        [factionId]: Math.min(100, Math.max(-100, (prev.factionReputation[factionId] || 0) + change))
      }
    }));
  }, []);

  const updateCharacterTrust = useCallback((characterId: string, change: number) => {
    setGameState(prev => ({
      ...prev,
      characterTrust: {
        ...prev.characterTrust,
        [characterId]: Math.min(100, Math.max(-100, (prev.characterTrust[characterId] || 0) + change))
      }
    }));
  }, []);

  const updateDriftStability = useCallback((change: number) => {
    setGameState(prev => ({
      ...prev,
      driftStability: Math.min(100, Math.max(0, prev.driftStability + change))
    }));
  }, []);

  const addWorldStateFlag = useCallback((flag: string) => {
    setGameState(prev => {
      if (prev.worldStateFlags.includes(flag)) return prev;
      return {
        ...prev,
        worldStateFlags: [...prev.worldStateFlags, flag]
      };
    });
  }, []);

  const unlockAchievement = useCallback((achievementId: string) => {
    setGameState(prev => {
      if (prev.achievementsUnlocked.includes(achievementId)) return prev;
      return {
        ...prev,
        achievementsUnlocked: [...prev.achievementsUnlocked, achievementId]
      };
    });
  }, []);

  const saveGame = useCallback((slot: number) => {
    const saveData: SaveData = {
      slot,
      gameState: { ...gameState, saveSlot: slot, lastSaved: new Date().toISOString() },
      timestamp: new Date().toISOString(),
      playerName: gameState.playerName,
      currentAct: gameState.currentAct,
      playtime: gameState.playtime
    };
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(`${STORAGE_KEY}-slot-${slot}`, JSON.stringify(saveData));
      setGameState(prev => ({ ...prev, saveSlot: slot, lastSaved: saveData.timestamp }));
    }
    
    return saveData;
  }, [gameState]);

  const loadGame = useCallback((slot: number) => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`${STORAGE_KEY}-slot-${slot}`);
      if (saved) {
        try {
          const saveData = JSON.parse(saved) as SaveData;
          setGameState(saveData.gameState);
          return true;
        } catch {
          console.error('Failed to load game from slot', slot);
        }
      }
    }
    return false;
  }, []);

  const getSaveSlots = useCallback((): (SaveData | null)[] => {
    const slots: (SaveData | null)[] = [];
    if (typeof window !== 'undefined') {
      for (let i = 0; i < 6; i++) {
        const saved = localStorage.getItem(`${STORAGE_KEY}-slot-${i}`);
        if (saved) {
          try {
            slots.push(JSON.parse(saved) as SaveData);
          } catch {
            slots.push(null);
          }
        } else {
          slots.push(null);
        }
      }
    }
    return slots;
  }, []);

  const resetGame = useCallback(() => {
    setGameState(initialGameState);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return {
    gameState,
    isLoaded,
    updatePlayerName,
    updateCurrentScene,
    updateCurrentAct,
    learnLanguage,
    updateDialectMastery,
    unlockGlyph,
    completeQuest,
    activateQuest,
    updateFactionReputation,
    updateCharacterTrust,
    updateDriftStability,
    addWorldStateFlag,
    unlockAchievement,
    saveGame,
    loadGame,
    getSaveSlots,
    resetGame
  };
}
