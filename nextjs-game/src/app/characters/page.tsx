'use client';

import CharacterCard from '@/components/CharacterCard';
import { characters, getCharactersByFaction } from '@/data/characters';
import { useState } from 'react';

const factionFilters = [
  { id: 'all', label: 'All Characters', icon: '👥' },
  { id: 'institute', label: 'Institute', icon: '🏛️' },
  { id: 'clans', label: 'Clans', icon: '🌲' },
  { id: 'echoborn', label: 'Echoborn', icon: '🌀' },
  { id: 'neutral', label: 'Neutral', icon: '⚖️' },
];

export default function CharactersPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCharacters = activeFilter === 'all' 
    ? characters 
    : getCharactersByFaction(activeFilter);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">👥</span>
          <h1 className="text-4xl font-bold text-white mb-3">Characters of Valdaren</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the inhabitants of this frost-bound realm. Each holds secrets tied to Ellidric 
            and the fate of Valdaren. Build trust or make enemies — your choices matter.
          </p>
        </div>

        {/* Faction filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {factionFilters.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === id
                  ? 'bg-purple-600/50 text-white border border-purple-400'
                  : 'bg-slate-800/50 text-gray-400 border border-slate-600 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              <span className="mr-2">{icon}</span>
              {label}
            </button>
          ))}
        </div>

        {/* Character count */}
        <div className="text-center mb-6">
          <span className="text-gray-500 text-sm">
            Showing {filteredCharacters.length} character{filteredCharacters.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Character grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCharacters.map((character) => (
            <CharacterCard 
              key={character.id} 
              character={character}
              showDetails
            />
          ))}
        </div>

        {/* Lore section */}
        <div className="mt-12 p-6 bg-slate-900/40 rounded-xl border border-purple-500/20">
          <h2 className="text-xl font-bold text-purple-400 mb-4">💡 Character Archetypes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-white font-semibold mb-2">📚 Glyph Scholars</h3>
              <p className="text-gray-400 text-sm">Provide lore dumps and puzzle hints. Their knowledge of Ellidric is academic and precise.</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-white font-semibold mb-2">🌀 Drift Survivors</h3>
              <p className="text-gray-400 text-sm">Give side quests tied to altered memories. They&apos;ve experienced the dangers of unstable Ellidric firsthand.</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-white font-semibold mb-2">🗣️ Language Merchants</h3>
              <p className="text-gray-400 text-sm">Sell rare translation keys. Their services come at a price, but they&apos;re neutral to faction politics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
