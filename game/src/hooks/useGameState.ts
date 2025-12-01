// 🎮 Game State Hook for Echoes of Ellidra 🔮✨
import { useState, useCallback } from 'react';
import type { GameState, FactionType, LanguageType, EllidricDialect } from '../types';
import { scenes, initialGameState } from '../data';

const STORAGE_KEY = 'echoes-of-ellidra-save';

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return { ...initialGameState };
      }
    }
    return { ...initialGameState };
  });

  const [isLoading, setIsLoading] = useState(false);

  // Get current scene
  const currentScene = scenes.find(s => s.id === gameState.currentSceneId) || scenes[0];

  // Navigate to a new scene
  const goToScene = useCallback((sceneId: string) => {
    setGameState(prev => {
      const newState = {
        ...prev,
        currentSceneId: sceneId,
        completedScenes: prev.completedScenes.includes(prev.currentSceneId)
          ? prev.completedScenes
          : [...prev.completedScenes, prev.currentSceneId],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  }, []);

  // Update faction reputation
  const updateFaction = useCallback((faction: FactionType, change: number) => {
    setGameState(prev => {
      const newRep = Math.max(-100, Math.min(100, prev.factionReputation[faction] + change));
      const newState = {
        ...prev,
        factionReputation: {
          ...prev.factionReputation,
          [faction]: newRep,
        },
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  }, []);

  // Learn a new language
  const learnLanguage = useCallback((language: LanguageType) => {
    setGameState(prev => {
      if (prev.languagesKnown.includes(language)) return prev;
      const newState = {
        ...prev,
        languagesKnown: [...prev.languagesKnown, language],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  }, []);

  // Learn a new Ellidric dialect
  const learnDialect = useCallback((dialect: EllidricDialect) => {
    setGameState(prev => {
      if (prev.dialectsKnown.includes(dialect)) return prev;
      const newState = {
        ...prev,
        dialectsKnown: [...prev.dialectsKnown, dialect],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  }, []);

  // Collect a glyph
  const collectGlyph = useCallback((glyph: string) => {
    setGameState(prev => {
      if (prev.glyphsCollected.includes(glyph)) return prev;
      const newState = {
        ...prev,
        glyphsCollected: [...prev.glyphsCollected, glyph],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  }, []);

  // Save game
  const saveGame = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  }, [gameState]);

  // Load game
  const loadGame = useCallback(() => {
    setIsLoading(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setGameState(parsed);
      } catch (e) {
        console.error('Failed to load save:', e);
      }
    }
    setIsLoading(false);
  }, []);

  // Reset game
  const resetGame = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setGameState({ ...initialGameState });
  }, []);

  // Set player name
  const setPlayerName = useCallback((name: string) => {
    setGameState(prev => {
      const newState = { ...prev, playerName: name };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  }, []);

  return {
    gameState,
    currentScene,
    isLoading,
    goToScene,
    updateFaction,
    learnLanguage,
    learnDialect,
    collectGlyph,
    saveGame,
    loadGame,
    resetGame,
    setPlayerName,
  };
}
