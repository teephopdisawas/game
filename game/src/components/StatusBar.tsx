// 📊 Status Bar Component ✨
import type { GameState } from '../types';
import './StatusBar.css';

interface StatusBarProps {
  gameState: GameState;
  sceneName: string;
  onSave: () => void;
  onReset: () => void;
}

export function StatusBar({ gameState, sceneName, onSave, onReset }: StatusBarProps) {
  const { factionReputation, languagesKnown, dialectsKnown, driftStability } = gameState;

  return (
    <div className="status-bar">
      <div className="status-left">
        <span className="location-badge">
          📍 {formatLocation(sceneName)}
        </span>
        <span className="stability-badge" style={{ 
          color: driftStability > 70 ? '#22c55e' : driftStability > 30 ? '#f59e0b' : '#ef4444' 
        }}>
          🌀 Drift: {driftStability}%
        </span>
      </div>
      
      <div className="status-center">
        <div className="factions-display">
          <FactionBadge faction="institute" value={factionReputation.institute} icon="🏛️" />
          <FactionBadge faction="clans" value={factionReputation.clans} icon="🌲" />
          <FactionBadge faction="echoborn" value={factionReputation.echoborn} icon="👻" />
        </div>
      </div>

      <div className="status-right">
        <div className="languages-display">
          {languagesKnown.map(lang => (
            <span key={lang} className="lang-badge">🗣️ {lang}</span>
          ))}
          {dialectsKnown.map(dialect => (
            <span key={dialect} className="dialect-badge">🔮 {dialect}</span>
          ))}
        </div>
        <div className="status-buttons">
          <button className="status-btn save-btn" onClick={onSave} title="Save Game">
            💾
          </button>
          <button className="status-btn reset-btn" onClick={onReset} title="New Game">
            🔄
          </button>
        </div>
      </div>
    </div>
  );
}

function FactionBadge({ faction, value, icon }: { faction: string; value: number; icon: string }) {
  const color = value > 20 ? '#22c55e' : value < -20 ? '#ef4444' : '#94a3b8';
  return (
    <span className="faction-badge" style={{ borderColor: color }} title={`${faction}: ${value}`}>
      {icon} {value > 0 ? '+' : ''}{value}
    </span>
  );
}

function formatLocation(location: string): string {
  return location
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
