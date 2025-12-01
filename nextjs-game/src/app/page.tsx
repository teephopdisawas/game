'use client';

import Link from 'next/link';
import { useGame } from '@/lib/GameContext';

export default function Home() {
  const { gameState, isLoaded, resetGame } = useGame();

  const hasExistingSave = isLoaded && gameState.playerName !== '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Background glyph decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl opacity-10 animate-glyph-pulse">◈</div>
        <div className="absolute top-40 right-20 text-6xl opacity-10 animate-glyph-pulse" style={{ animationDelay: '1s' }}>◇</div>
        <div className="absolute bottom-40 left-1/4 text-7xl opacity-10 animate-glyph-pulse" style={{ animationDelay: '2s' }}>⬡</div>
        <div className="absolute bottom-20 right-1/3 text-9xl opacity-10 animate-glyph-pulse" style={{ animationDelay: '0.5s' }}>∞</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in">
        {/* Title */}
        <div className="mb-8">
          <span className="text-6xl mb-4 block">🔮</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Valdaren
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-400 font-light">
            Echoes of Ellidra
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          A frost-bound land where <span className="text-purple-400 font-semibold">language shapes reality</span>. 
          Wake with no memory as ancient glyphs respond to your touch. 
          Discover your identity as the <span className="text-cyan-400 font-semibold">First Speaker</span>.
        </p>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: '📜', label: '15+ Quests' },
            { icon: '🔤', label: '5 Dialects' },
            { icon: '⚔️', label: '4 Factions' },
            { icon: '🗺️', label: '6 Regions' },
          ].map(({ icon, label }) => (
            <div key={label} className="bg-slate-900/50 rounded-lg p-3 border border-purple-500/20">
              <span className="text-2xl block mb-1">{icon}</span>
              <span className="text-sm text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {hasExistingSave ? (
            <>
              <Link
                href="/story"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                Continue Story 📖
              </Link>
              <button
                onClick={() => {
                  if (confirm('Start a new game? This will reset your progress.')) {
                    resetGame();
                  }
                }}
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-xl font-medium text-lg border border-slate-600 transition-all duration-300"
              >
                New Game ✨
              </button>
            </>
          ) : (
            <Link
              href="/story"
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-xl font-bold text-xl shadow-lg shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              Begin Your Journey 🌟
            </Link>
          )}
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { href: '/map', label: 'World Map', icon: '🗺️' },
            { href: '/characters', label: 'Characters', icon: '👥' },
            { href: '/factions', label: 'Factions', icon: '⚔️' },
            { href: '/language', label: 'Language', icon: '🔤' },
          ].map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-gray-400 hover:text-white rounded-lg text-sm transition-colors border border-slate-700 hover:border-purple-500/50"
            >
              {icon} {label}
            </Link>
          ))}
        </div>

        {/* Lore teaser */}
        <div className="mt-12 p-6 bg-slate-900/40 rounded-xl border border-purple-500/20 text-left max-w-xl mx-auto">
          <h3 className="text-purple-400 font-semibold mb-2">✨ The World of Valdaren</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            In this frost-bound realm, <strong className="text-white">Ellidric</strong> — the language of memory — holds 
            the power to unlock buried memories, alter perception, and reshape reality itself. 
            The <strong className="text-blue-400">Institute</strong> seeks to codify it, 
            the <strong className="text-green-400">Clans</strong> protect its oral traditions, 
            and the mysterious <strong className="text-purple-400">Echoborn</strong> claim to be the language made flesh.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-center text-gray-600 text-sm">
        Built with Next.js • Powered by the language of memory
      </footer>
    </div>
  );
}
