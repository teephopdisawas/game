'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: '🏠 Home', icon: '🏠' },
  { href: '/story', label: '📖 Story', icon: '📖' },
  { href: '/map', label: '🗺️ World Map', icon: '🗺️' },
  { href: '/characters', label: '👥 Characters', icon: '👥' },
  { href: '/factions', label: '⚔️ Factions', icon: '⚔️' },
  { href: '/language', label: '🔤 Language', icon: '🔤' },
  { href: '/quests', label: '📜 Quests', icon: '📜' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
          >
            <span className="text-2xl">🔮</span>
            <span className="font-bold text-lg hidden sm:inline">Valdaren</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map(({ href, label, icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    px-2 sm:px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-purple-600/50 text-white shadow-lg shadow-purple-500/25' 
                      : 'text-gray-300 hover:bg-purple-600/30 hover:text-white'
                    }
                  `}
                >
                  <span className="sm:hidden">{icon}</span>
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
