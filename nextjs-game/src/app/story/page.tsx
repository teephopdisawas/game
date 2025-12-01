'use client';

import { useState } from 'react';
import { useGame } from '@/lib/GameContext';
import DialogueBox from '@/components/DialogueBox';
import { getSceneById } from '@/data/story';
import { DialogueChoice } from '@/types/game';

export default function StoryPage() {
  const { gameState, updateCurrentScene, updatePlayerName, isLoaded } = useGame();
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [tempName, setTempName] = useState('');

  const currentScene = getSceneById(gameState.currentScene);
  const currentDialogue = currentScene?.dialogue[currentDialogueIndex];
  
  // Derive showNameInput from state instead of using useEffect
  const showNameInput = isLoaded && !gameState.playerName;

  const handleContinue = () => {
    if (!currentScene) return;
    
    if (currentDialogueIndex < currentScene.dialogue.length - 1) {
      setCurrentDialogueIndex(prev => prev + 1);
    }
  };

  const handleChoiceSelect = (_choice: DialogueChoice) => {
    handleContinue();
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      updatePlayerName(tempName.trim());
    }
  };

  const getBackgroundStyle = () => {
    const location = currentScene?.location || '';
    switch (location) {
      case 'Ancient Ruins':
        return 'from-purple-950 via-slate-900 to-indigo-950';
      case 'Ravengard':
        return 'from-blue-950 via-slate-900 to-gray-950';
      case 'Whispering Woods':
        return 'from-green-950 via-slate-900 to-emerald-950';
      default:
        return 'from-slate-950 via-purple-950 to-slate-950';
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-purple-400 animate-pulse text-xl">Loading...</div>
      </div>
    );
  }

  // Name input screen
  if (showNameInput) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-slate-900/80 rounded-xl border border-purple-500/30 p-8 backdrop-blur-sm">
          <div className="text-center mb-6">
            <span className="text-5xl mb-4 block">🔮</span>
            <h2 className="text-2xl font-bold text-white mb-2">Before We Begin...</h2>
            <p className="text-gray-400">What name echoes in the void of your lost memories?</p>
          </div>
          
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full px-4 py-3 bg-slate-800 border border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 mb-4"
              autoFocus
              maxLength={30}
            />
            <button
              type="submit"
              disabled={!tempName.trim()}
              className="w-full py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
            >
              Begin Your Journey ✨
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!currentScene || !currentDialogue) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <span className="text-6xl mb-4 block">📖</span>
          <h2 className="text-2xl font-bold text-white mb-4">Story Scene Not Found</h2>
          <p className="text-gray-400 mb-6">The current scene could not be loaded.</p>
          <button
            onClick={() => updateCurrentScene('scene-awakening')}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg"
          >
            Return to Beginning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getBackgroundStyle()} px-4 py-8`}>
      {/* Location header */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <span className="text-sm text-gray-500">Location</span>
              <h3 className="text-white font-semibold">{currentScene.location}</h3>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500">Scene</span>
            <h3 className="text-purple-400 font-semibold">{currentScene.title}</h3>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Progress</span>
          <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 transition-all duration-500"
              style={{ width: `${((currentDialogueIndex + 1) / currentScene.dialogue.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-500">{currentDialogueIndex + 1}/{currentScene.dialogue.length}</span>
        </div>
      </div>

      {/* Main dialogue area */}
      <div className="max-w-4xl mx-auto">
        {/* Scene visualization */}
        <div className="aspect-video bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-t-xl border border-b-0 border-purple-500/20 flex items-center justify-center mb-0 overflow-hidden">
          <div className="text-center">
            {/* Animated glyphs based on scene */}
            <div className="flex gap-4 text-6xl opacity-30 animate-glyph-pulse mb-4">
              <span>◈</span>
              <span style={{ animationDelay: '0.5s' }}>◇</span>
              <span style={{ animationDelay: '1s' }}>⬡</span>
            </div>
            <p className="text-gray-500 text-sm italic">{currentScene.location}</p>
          </div>
        </div>

        {/* Dialogue box */}
        <DialogueBox 
          node={currentDialogue}
          onChoiceSelect={handleChoiceSelect}
          onContinue={handleContinue}
        />
      </div>

      {/* Game info footer */}
      <div className="max-w-4xl mx-auto mt-6 flex justify-between items-center text-sm text-gray-500">
        <div>
          <span className="text-gray-600">Player: </span>
          <span className="text-purple-400">{gameState.playerName}</span>
        </div>
        <div>
          <span className="text-gray-600">Act </span>
          <span className="text-purple-400">{gameState.currentAct}</span>
        </div>
      </div>
    </div>
  );
}
