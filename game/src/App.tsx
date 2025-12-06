// 🎮 Echoes of Ellidra - Main App Component ✨
'use client';

import { useState, useCallback } from 'react';
import { useGameState } from './hooks';
import { 
  DialogueBox, 
  ChoiceMenu, 
  StatusBar, 
  Background, 
  TitleScreen 
} from './components';
import type { DialogueChoice } from './types';
import './App.css';

type GameScreen = 'title' | 'playing';

function App() {
  const [screen, setScreen] = useState<GameScreen>('title');
  const [showChoices, setShowChoices] = useState(false);
  
  const {
    gameState,
    currentScene,
    goToScene,
    updateFaction,
    saveGame,
    resetGame,
    loadGame,
  } = useGameState();

  // Check if there's a saved game (client-side only!)
  const hasSave = typeof window !== 'undefined' && localStorage.getItem('echoes-of-ellidra-save') !== null;

  // Handle starting a new game
  const handleNewGame = useCallback(() => {
    resetGame();
    setScreen('playing');
    setShowChoices(false);
  }, [resetGame]);

  // Handle continuing saved game
  const handleContinue = useCallback(() => {
    loadGame();
    setScreen('playing');
    setShowChoices(false);
  }, [loadGame]);

  // Handle dialogue completion
  const handleDialogueComplete = useCallback(() => {
    if (currentScene.choices && currentScene.choices.length > 0) {
      setShowChoices(true);
    } else if (currentScene.nextSceneId) {
      goToScene(currentScene.nextSceneId);
    }
  }, [currentScene, goToScene]);

  // Handle choice selection
  const handleChoiceSelect = useCallback((choice: DialogueChoice) => {
    if (choice.factionEffect) {
      updateFaction(choice.factionEffect.faction, choice.factionEffect.change);
    }
    setShowChoices(false);
    goToScene(choice.nextSceneId);
  }, [goToScene, updateFaction]);

  // Handle reset with confirmation
  const handleReset = useCallback(() => {
    if (window.confirm('🔄 Start a new adventure? Your current progress will be saved!')) {
      saveGame();
      handleNewGame();
    }
  }, [saveGame, handleNewGame]);

  // Render title screen
  if (screen === 'title') {
    return (
      <TitleScreen 
        onStart={handleNewGame}
        hasSave={hasSave}
        onContinue={handleContinue}
      />
    );
  }

  // Render game screen
  return (
    <div className="game-container">
      <Background location={currentScene.location} />
      
      <StatusBar 
        gameState={gameState}
        sceneName={currentScene.title}
        onSave={saveGame}
        onReset={handleReset}
      />

      <main className="game-main">
        {!showChoices ? (
          <DialogueBox 
            dialogue={currentScene.dialogue}
            onComplete={handleDialogueComplete}
          />
        ) : (
          currentScene.choices && (
            <ChoiceMenu 
              choices={currentScene.choices}
              onSelect={handleChoiceSelect}
              languagesKnown={gameState.languagesKnown}
            />
          )
        )}
      </main>
    </div>
  );
}

export default App;
