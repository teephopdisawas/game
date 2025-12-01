'use client';

import { DialogueNode, DialogueChoice } from '@/types/game';
import { useGame } from '@/lib/GameContext';

interface DialogueBoxProps {
  node: DialogueNode;
  onChoiceSelect: (choice: DialogueChoice) => void;
  onContinue: () => void;
}

export default function DialogueBox({ node, onChoiceSelect, onContinue }: DialogueBoxProps) {
  const { updateFactionReputation, updateCharacterTrust, unlockGlyph, activateQuest } = useGame();

  const handleChoiceClick = (choice: DialogueChoice) => {
    // Apply consequences
    if (choice.consequence) {
      if (choice.consequence.factionRepChange) {
        choice.consequence.factionRepChange.forEach(({ faction, change }) => {
          updateFactionReputation(faction, change);
        });
      }
      if (choice.consequence.characterTrustChange) {
        choice.consequence.characterTrustChange.forEach(({ character, change }) => {
          updateCharacterTrust(character, change);
        });
      }
      if (choice.consequence.glyphUnlock) {
        unlockGlyph(choice.consequence.glyphUnlock);
      }
      if (choice.consequence.questUnlock) {
        activateQuest(choice.consequence.questUnlock);
      }
    }
    onChoiceSelect(choice);
  };

  const getSpeakerColor = (speaker: string) => {
    switch (speaker) {
      case 'Narrator':
        return 'text-gray-400 italic';
      case 'Lyra Veyndral':
        return 'text-purple-400';
      case '???':
        return 'text-cyan-400';
      default:
        return 'text-white';
    }
  };

  const getSpeakerIcon = (speaker: string) => {
    switch (speaker) {
      case 'Narrator':
        return '📜';
      case 'Lyra Veyndral':
        return '🧙‍♀️';
      case '???':
        return '❓';
      default:
        return '💬';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/95 to-purple-900/95 rounded-xl border border-purple-500/30 p-6 shadow-2xl backdrop-blur-sm">
      {/* Speaker Header */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-purple-500/20">
        <span className="text-2xl">{getSpeakerIcon(node.speaker)}</span>
        <span className={`font-bold text-lg ${getSpeakerColor(node.speaker)}`}>
          {node.speaker}
        </span>
      </div>

      {/* Dialogue Text */}
      <div className="mb-6 min-h-[80px]">
        <p className={`text-lg leading-relaxed ${node.speaker === 'Narrator' ? 'text-gray-300 italic' : 'text-white'}`}>
          {node.text}
        </p>
      </div>

      {/* Choices or Continue */}
      {node.choices && node.choices.length > 0 ? (
        <div className="space-y-3">
          <p className="text-sm text-purple-400 mb-2">Choose your response:</p>
          {node.choices.map((choice, index) => (
            <button
              key={choice.id}
              onClick={() => handleChoiceClick(choice)}
              className="w-full text-left p-4 bg-slate-800/50 hover:bg-purple-600/30 border border-purple-500/30 hover:border-purple-400 rounded-lg transition-all duration-200 group"
            >
              <span className="text-purple-400 font-bold mr-2">{index + 1}.</span>
              <span className="text-gray-200 group-hover:text-white">{choice.text}</span>
              {choice.requiredLanguage && (
                <span className="ml-2 text-xs bg-cyan-600/30 text-cyan-300 px-2 py-1 rounded">
                  Requires: {choice.requiredLanguage}
                </span>
              )}
            </button>
          ))}
        </div>
      ) : (
        <button
          onClick={onContinue}
          className="w-full p-4 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 hover:border-purple-400 rounded-lg transition-all duration-200 text-white font-medium"
        >
          Continue ▶
        </button>
      )}
    </div>
  );
}
