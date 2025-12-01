'use client';

import { useGame } from '@/lib/GameContext';
import { ellidricDialects, baseLanguages, glyphs } from '@/data/languages';

export default function LanguagePage() {
  const { gameState, learnLanguage, updateDialectMastery } = useGame();

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">🔤</span>
          <h1 className="text-4xl font-bold text-white mb-3">The Language of Memory</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ellidric — the ancient tongue that shapes reality. Each glyph carries four layers: 
            Sound, Emotion, Memory, and Ethics. Master its dialects to unlock new story paths.
          </p>
        </div>

        {/* Glyph overview */}
        <div className="mb-10 p-6 bg-slate-900/50 rounded-xl border border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>✨</span>
            Your Glyph Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {glyphs.map((glyph) => {
              const isUnlocked = gameState.glyphsUnlocked.includes(glyph.id);
              return (
                <div 
                  key={glyph.id}
                  className={`p-4 rounded-lg text-center transition-all ${
                    isUnlocked 
                      ? 'bg-purple-900/30 border border-purple-500/50' 
                      : 'bg-slate-800/30 border border-slate-600/30 opacity-50'
                  }`}
                >
                  <div className={`text-4xl mb-2 ${isUnlocked ? 'animate-glyph-pulse' : ''}`}>
                    {isUnlocked ? glyph.symbol : '?'}
                  </div>
                  <div className="text-sm text-gray-400">
                    {isUnlocked ? glyph.sound : '???'}
                  </div>
                  {isUnlocked && (
                    <div className="text-xs text-purple-400 mt-1">
                      {glyph.emotion}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            {gameState.glyphsUnlocked.length} of {glyphs.length} glyphs unlocked
          </p>
        </div>

        {/* Ellidric Dialects */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span>📚</span>
            Ellidric Dialects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ellidricDialects.map((dialect) => {
              const mastery = gameState.dialectMastery[dialect.id] ?? 0;
              return (
                <div 
                  key={dialect.id}
                  className="p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white">{dialect.name}</h3>
                    <span className="text-sm text-purple-400">{mastery}%</span>
                  </div>
                  
                  {/* Mastery bar */}
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-500"
                      style={{ width: `${mastery}%` }}
                    />
                  </div>

                  <p className="text-gray-400 text-sm mb-3">
                    <span className="text-purple-400">Faction:</span> {dialect.faction}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    <span className="text-purple-400">Traits:</span> {dialect.traits}
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    {dialect.culturalNotes}
                  </p>

                  {/* Study button (demo) */}
                  <button
                    onClick={() => updateDialectMastery(dialect.id, 5)}
                    className="mt-4 w-full py-2 bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 rounded-lg text-sm transition-colors border border-purple-500/30"
                  >
                    Study (+5%)
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Base Languages */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🌍</span>
            Base Languages
          </h2>
          <p className="text-gray-400 mb-6">
            Each real-world language reveals different facets of Ellidric. English provides baseline 
            translation, but deeper understanding requires Dutch, Latin, and Greek.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {baseLanguages.map((lang) => {
              const isLearned = gameState.languagesLearned.includes(lang.id);
              return (
                <div 
                  key={lang.id}
                  className={`p-5 rounded-xl transition-all ${
                    isLearned 
                      ? 'bg-green-900/30 border border-green-500/50' 
                      : 'bg-slate-800/50 border border-slate-600/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{lang.name}</h3>
                    {isLearned ? (
                      <span className="text-green-400 text-sm">✓ Learned</span>
                    ) : (
                      <span className="text-gray-500 text-sm">🔒 Locked</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{lang.unlockEffect}</p>
                  
                  {!isLearned && (
                    <button
                      onClick={() => learnLanguage(lang.id)}
                      className="w-full py-2 bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 rounded-lg text-sm transition-colors border border-cyan-500/30"
                    >
                      Learn Language
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Glyph Mechanics Explanation */}
        <div className="p-6 bg-gradient-to-r from-slate-900/80 to-purple-900/40 rounded-xl border border-purple-500/20">
          <h2 className="text-xl font-bold text-purple-400 mb-4">🔮 The Four Layers of Ellidric</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-white font-semibold mb-2">1. Sound</h3>
              <p className="text-gray-400 text-sm">The phonetic form — how the glyph is spoken. Each pronunciation carries power.</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-white font-semibold mb-2">2. Emotion</h3>
              <p className="text-gray-400 text-sm">The feeling it carries. Glyphs resonate with specific emotional states.</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-white font-semibold mb-2">3. Mnemonic Tether</h3>
              <p className="text-gray-400 text-sm">The memory it links to. Speaking a glyph can unlock buried recollections.</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-white font-semibold mb-2">4. Ethical Resonance</h3>
              <p className="text-gray-400 text-sm">The moral/spiritual weight. Using glyphs has consequences beyond the physical.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
