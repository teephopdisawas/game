'use client';

import FactionCard from '@/components/FactionCard';
import { factions, minorFactions } from '@/data/factions';
import { useGame } from '@/lib/GameContext';

export default function FactionsPage() {
  const { gameState } = useGame();

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">⚔️</span>
          <h1 className="text-4xl font-bold text-white mb-3">Factions of Valdaren</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Power in Valdaren flows through language. Each faction holds a different vision for 
            Ellidric&apos;s future — choose your allegiances wisely, for they will shape your destiny.
          </p>
        </div>

        {/* Your standings overview */}
        <div className="mb-10 p-6 bg-slate-900/50 rounded-xl border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📊</span>
            Your Standings
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {factions.map((faction) => {
              const rep = gameState.factionReputation[faction.id] ?? 0;
              const getLabel = (r: number) => {
                if (r >= 50) return 'Honored';
                if (r >= 0) return 'Neutral';
                if (r >= -50) return 'Unfriendly';
                return 'Hostile';
              };
              return (
                <div 
                  key={faction.id}
                  className="p-4 rounded-lg text-center"
                  style={{ backgroundColor: `${faction.color}15`, borderColor: `${faction.color}30` }}
                >
                  <div className="text-2xl mb-2">
                    {faction.id === 'institute' && '🏛️'}
                    {faction.id === 'clans' && '🌲'}
                    {faction.id === 'echoborn' && '🌀'}
                    {faction.id === 'neutral' && '⚖️'}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {faction.name.split(' ').slice(0, 2).join(' ')}
                  </div>
                  <div 
                    className="text-xs font-medium"
                    style={{ color: faction.color }}
                  >
                    {getLabel(rep)} ({rep > 0 ? '+' : ''}{rep})
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Major factions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span>👑</span>
            Major Factions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {factions.filter(f => f.id !== 'neutral').map((faction) => (
              <FactionCard 
                key={faction.id} 
                faction={faction}
                showDetails
              />
            ))}
          </div>
        </div>

        {/* Neutral territories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span>⚖️</span>
            Neutral Territories
          </h2>
          <div className="max-w-2xl mx-auto">
            <FactionCard 
              faction={factions.find(f => f.id === 'neutral')!}
              showDetails
            />
          </div>
        </div>

        {/* Minor factions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🔱</span>
            Minor Factions & Guilds
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {minorFactions.map((faction) => (
              <div 
                key={faction.id}
                className="p-5 bg-slate-800/50 rounded-xl border border-slate-600/50 hover:border-purple-500/30 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2">{faction.name}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  <span className="text-purple-400">Belief:</span> {faction.belief}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="text-gray-400">Role:</span> {faction.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Faction conflict lore */}
        <div className="p-6 bg-gradient-to-r from-slate-900/80 to-purple-900/40 rounded-xl border border-purple-500/20">
          <h2 className="text-xl font-bold text-purple-400 mb-4">⚡ The Great Conflict</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              At the heart of Valdaren&apos;s turmoil lies a fundamental disagreement: 
              <strong className="text-white"> What is the true nature of Ellidric, and who should control it?</strong>
            </p>
            <p>
              The <strong className="text-blue-400">Institute</strong> believes language must be codified 
              to be understood and safely wielded. They build Memory Engines to standardize and regulate 
              Ellidric, viewing oral traditions as chaotic and dangerous.
            </p>
            <p>
              The <strong className="text-green-400">Clans</strong> argue that writing Ellidric kills its 
              spirit. To them, the language is alive — it shifts, grows, and breathes only in spoken form. 
              The Institute&apos;s codification is nothing less than linguistic murder.
            </p>
            <p>
              And the <strong className="text-purple-400">Echoborn</strong>? They claim to transcend this 
              debate entirely. To them, they ARE Ellidric — living glyphs who remember the First Speaker&apos;s 
              original intent. But can they be trusted? Or are they merely echoes of something that should 
              have remained forgotten?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
