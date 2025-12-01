'use client';

import { Faction } from '@/types/game';
import { useGame } from '@/lib/GameContext';

interface FactionCardProps {
  faction: Faction;
  showDetails?: boolean;
}

export default function FactionCard({ faction, showDetails = false }: FactionCardProps) {
  const { gameState } = useGame();
  const reputation = gameState.factionReputation[faction.id] ?? faction.reputation;

  const getReputationColor = (rep: number) => {
    if (rep >= 50) return 'text-green-400';
    if (rep >= 20) return 'text-cyan-400';
    if (rep >= 0) return 'text-gray-400';
    if (rep >= -30) return 'text-orange-400';
    return 'text-red-400';
  };

  const getReputationLabel = (rep: number) => {
    if (rep >= 75) return 'Revered';
    if (rep >= 50) return 'Honored';
    if (rep >= 25) return 'Friendly';
    if (rep >= 0) return 'Neutral';
    if (rep >= -25) return 'Unfriendly';
    if (rep >= -50) return 'Hostile';
    return 'Hated';
  };

  const getFactionIcon = (id: string) => {
    switch (id) {
      case 'institute': return '🏛️';
      case 'clans': return '🌲';
      case 'echoborn': return '🌀';
      case 'neutral': return '⚖️';
      default: return '🔮';
    }
  };

  return (
    <div 
      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border-2 p-6 hover:shadow-xl transition-all duration-300"
      style={{ borderColor: `${faction.color}50` }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl">{getFactionIcon(faction.id)}</div>
        <div>
          <h3 className="text-xl font-bold text-white">{faction.name}</h3>
          <p className="text-gray-400 italic text-sm">&ldquo;{faction.motto}&rdquo;</p>
        </div>
      </div>

      {/* Reputation Bar */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Your Standing</span>
          <span className={`text-sm font-bold ${getReputationColor(reputation)}`}>
            {getReputationLabel(reputation)} ({reputation > 0 ? '+' : ''}{reputation})
          </span>
        </div>
        <div className="h-3 bg-slate-700 rounded-full overflow-hidden relative">
          {/* Center marker */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-500 z-10" />
          {/* Reputation fill */}
          <div 
            className="h-full transition-all duration-700"
            style={{ 
              width: `${Math.abs(reputation) / 2}%`,
              marginLeft: reputation >= 0 ? '50%' : `${50 - Math.abs(reputation) / 2}%`,
              backgroundColor: faction.color
            }}
          />
        </div>
      </div>

      {/* Core Belief */}
      <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: `${faction.color}15` }}>
        <h4 className="text-sm font-semibold mb-1" style={{ color: faction.color }}>Core Belief</h4>
        <p className="text-gray-300 text-sm">{faction.coreBelief}</p>
      </div>

      {showDetails && (
        <>
          {/* Structure */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-purple-400 mb-1">Structure</h4>
            <p className="text-gray-400 text-sm">{faction.structure}</p>
          </div>

          {/* Key Figures */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Figures</h4>
            <div className="flex flex-wrap gap-2">
              {faction.keyFigures.map((figure, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-slate-800 rounded-full text-xs text-gray-300 border border-slate-600"
                >
                  {figure}
                </span>
              ))}
            </div>
          </div>

          {/* Gameplay Impact */}
          <div>
            <h4 className="text-sm font-semibold text-purple-400 mb-2">Gameplay Impact</h4>
            <ul className="space-y-1">
              {faction.gameplayImpact.map((impact, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                  <span style={{ color: faction.color }}>✦</span>
                  {impact}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
