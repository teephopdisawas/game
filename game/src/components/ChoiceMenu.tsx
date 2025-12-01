// 🎯 Choice Menu Component ✨
import type { DialogueChoice } from '../types';
import './ChoiceMenu.css';

interface ChoiceMenuProps {
  choices: DialogueChoice[];
  onSelect: (choice: DialogueChoice) => void;
  languagesKnown: string[];
}

export function ChoiceMenu({ choices, onSelect, languagesKnown }: ChoiceMenuProps) {
  return (
    <div className="choice-menu">
      <div className="choice-title">
        🎯 What will you do?
      </div>
      <div className="choices-container">
        {choices.map((choice, index) => {
          const isLocked = choice.requiredLanguage && !languagesKnown.includes(choice.requiredLanguage);
          
          return (
            <button
              key={choice.id}
              className={`choice-button ${isLocked ? 'locked' : ''}`}
              onClick={() => !isLocked && onSelect(choice)}
              disabled={isLocked}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="choice-text">{choice.text}</span>
              {isLocked && (
                <span className="locked-hint">
                  🔒 Requires {choice.requiredLanguage}
                </span>
              )}
              {choice.factionEffect && !isLocked && (
                <span className={`faction-hint ${choice.factionEffect.change > 0 ? 'positive' : 'negative'}`}>
                  {getFactionIcon(choice.factionEffect.faction)} 
                  {choice.factionEffect.change > 0 ? '+' : ''}{choice.factionEffect.change}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function getFactionIcon(faction: string): string {
  switch (faction) {
    case 'institute': return '🏛️';
    case 'clans': return '🌲';
    case 'echoborn': return '👻';
    default: return '⚖️';
  }
}
