'use client';

import { Character } from '@/types/game';
import { useGame } from '@/lib/GameContext';

interface CharacterCardProps {
  character: Character;
  showDetails?: boolean;
}

export default function CharacterCard({ character, showDetails = false }: CharacterCardProps) {
  const { gameState } = useGame();
  const trustLevel = gameState.characterTrust[character.id] ?? character.trustLevel;

  const getTrustColor = (trust: number) => {
    if (trust >= 50) return 'text-green-400';
    if (trust >= 20) return 'text-cyan-400';
    if (trust >= 0) return 'text-gray-400';
    if (trust >= -30) return 'text-orange-400';
    return 'text-red-400';
  };

  const getTrustLabel = (trust: number) => {
    if (trust >= 75) return 'Devoted Ally';
    if (trust >= 50) return 'Trusted Friend';
    if (trust >= 25) return 'Friendly';
    if (trust >= 0) return 'Neutral';
    if (trust >= -25) return 'Wary';
    if (trust >= -50) return 'Hostile';
    return 'Enemy';
  };

  const getFactionColor = (faction: string) => {
    switch (faction) {
      case 'institute': return 'bg-blue-600/30 text-blue-300 border-blue-500/50';
      case 'clans': return 'bg-green-600/30 text-green-300 border-green-500/50';
      case 'echoborn': return 'bg-purple-600/30 text-purple-300 border-purple-500/50';
      default: return 'bg-gray-600/30 text-gray-300 border-gray-500/50';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-purple-500/30 p-5 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">{character.portrait}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{character.name}</h3>
          <p className="text-purple-400 text-sm">{character.role}</p>
        </div>
      </div>

      {/* Faction Badge */}
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getFactionColor(character.faction)}`}>
          {character.faction === 'institute' && '🏛️ Institute'}
          {character.faction === 'clans' && '🌲 Clans'}
          {character.faction === 'echoborn' && '🌀 Echoborn'}
          {character.faction === 'neutral' && '⚪ Neutral'}
        </span>
      </div>

      {/* Trust Meter */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Trust Level</span>
          <span className={`text-sm font-medium ${getTrustColor(trustLevel)}`}>
            {getTrustLabel(trustLevel)}
          </span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ${
              trustLevel >= 0 ? 'bg-gradient-to-r from-cyan-500 to-green-500' : 'bg-gradient-to-r from-red-500 to-orange-500'
            }`}
            style={{ width: `${Math.abs(trustLevel)}%`, marginLeft: trustLevel < 0 ? `${100 - Math.abs(trustLevel)}%` : '0' }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>-100</span>
          <span>0</span>
          <span>+100</span>
        </div>
      </div>

      {/* Personality */}
      <p className="text-gray-300 text-sm mb-3">
        <span className="text-purple-400">Personality:</span> {character.personality}
      </p>

      {showDetails && (
        <>
          {/* Core Conflict */}
          <div className="mb-4 p-3 bg-slate-900/50 rounded-lg border border-purple-500/20">
            <h4 className="text-sm font-semibold text-purple-400 mb-1">Core Conflict</h4>
            <p className="text-gray-300 text-sm">{character.coreConflict}</p>
          </div>

          {/* Gameplay Hooks */}
          <div>
            <h4 className="text-sm font-semibold text-purple-400 mb-2">Story Hooks</h4>
            <ul className="space-y-1">
              {character.gameplayHooks.map((hook, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  {hook}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
