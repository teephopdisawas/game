// 🌅 Background Scene Component ✨
import { useMemo } from 'react';
import type { LocationType } from '../types';
import './Background.css';

interface BackgroundProps {
  location: LocationType;
}

// Pre-generate particle data outside of render
const glyphs = ['✧', '⬡', '◇', '⟡', '✦', '⚝', '☆', '◈', '⬢', '❋'];

interface ParticleData {
  left: string;
  delay: string;
  duration: string;
  glyph: string;
}

function generateParticles(count: number): ParticleData[] {
  return Array.from({ length: count }, (_, i) => ({
    left: `${(i * 5) % 100}%`,
    delay: `${(i * 0.7) % 10}s`,
    duration: `${10 + (i * 0.5) % 10}s`,
    glyph: glyphs[i % glyphs.length],
  }));
}

export function Background({ location }: BackgroundProps) {
  // Memoize particles so they don't change on re-render
  const particles = useMemo(() => generateParticles(20), []);

  return (
    <div className={`background background-${location}`}>
      <div className="background-overlay" />
      <div className="glyph-particles">
        {particles.map((particle, i) => (
          <span 
            key={i} 
            className="glyph-particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          >
            {particle.glyph}
          </span>
        ))}
      </div>
    </div>
  );
}
