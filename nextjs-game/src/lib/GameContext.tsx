'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useGameState } from '@/hooks/useGameState';
import { GameState, SaveData } from '@/types/game';

interface GameContextType {
  gameState: GameState;
  isLoaded: boolean;
  updatePlayerName: (name: string) => void;
  updateCurrentScene: (sceneId: string) => void;
  updateCurrentAct: (act: number) => void;
  learnLanguage: (languageId: string) => void;
  updateDialectMastery: (dialectId: string, amount: number) => void;
  unlockGlyph: (glyphId: string) => void;
  completeQuest: (questId: string) => void;
  activateQuest: (questId: string) => void;
  updateFactionReputation: (factionId: string, change: number) => void;
  updateCharacterTrust: (characterId: string, change: number) => void;
  updateDriftStability: (change: number) => void;
  addWorldStateFlag: (flag: string) => void;
  unlockAchievement: (achievementId: string) => void;
  saveGame: (slot: number) => SaveData;
  loadGame: (slot: number) => boolean;
  getSaveSlots: () => (SaveData | null)[];
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const gameStateHook = useGameState();

  return (
    <GameContext.Provider value={gameStateHook}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
