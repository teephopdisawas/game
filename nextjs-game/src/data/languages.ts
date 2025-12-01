// 🔤 Language System Data - Based on world_data/lore.md and mechanics.md
import { EllidricDialect, Language, Glyph } from '@/types/game';

export const ellidricDialects: EllidricDialect[] = [
  {
    id: 'codex',
    name: 'Codex Ellidric',
    faction: 'Institute of Lingua Arcanum',
    traits: 'Standardized, precise, optimized for written glyph codification',
    culturalNotes: 'Seen as the "official" form, but criticized for stripping away poetic nuance. Low puzzle complexity; unlocks official archives.',
    masteryLevel: 0
  },
  {
    id: 'verdant',
    name: 'Verdant Ellidric',
    faction: 'Clans of the Whispering Woods',
    traits: 'Oral, tonal, rhythm-based; glyphs sung or carved into living wood',
    culturalNotes: 'Language is considered alive; meanings shift with performance. Enables "Living Glyph" puzzles where glyphs shift mid-scene.',
    masteryLevel: 0
  },
  {
    id: 'glacial',
    name: 'Glacial Ellidric',
    faction: 'Lumisth Glacier dwellers',
    traits: 'Sparse, symbolic; glyphs etched into ice/crystal, meaning changes with light',
    culturalNotes: 'Used for ritual and prophecy; outsiders find it cryptic. Enables "Light-Shift" puzzles where you rotate glyphs to reveal hidden meaning.',
    masteryLevel: 0
  },
  {
    id: 'echo',
    name: 'Echo Ellidric',
    faction: 'The Echoborn',
    traits: 'Closest to Proto-Ellidric; fragmented glyph-bursts, often incomprehensible without other dialects',
    culturalNotes: 'Holds keys to ancient magic; feared and revered. Communication with Echoborn requires this dialect.',
    masteryLevel: 0
  },
  {
    id: 'pure',
    name: 'Pure Ellidric',
    faction: 'Proto-Ellidric (First Speaker)',
    traits: 'The mythic root language, spoken by the First Speaker. Only fragments survive in ancient glyphs.',
    culturalNotes: 'Requires knowledge of 2+ dialects; bypasses certain faction locks. Unlocks Proto-Ellidric fragments and hidden world events.',
    masteryLevel: 0
  }
];

export const baseLanguages: Language[] = [
  {
    id: 'english',
    name: 'English',
    unlockEffect: 'Baseline translation - Standard dialogue options',
    learned: true
  },
  {
    id: 'dutch',
    name: 'Dutch',
    unlockEffect: 'Reveals emotional subtext - Uncovers hidden feelings in glyphs',
    learned: false
  },
  {
    id: 'latin',
    name: 'Latin',
    unlockEffect: 'Unlocks ritual glyphs - Access to ceremonial Ellidric phrases',
    learned: false
  },
  {
    id: 'greek',
    name: 'Greek',
    unlockEffect: 'Reveals philosophical/ethical layers - Deeper glyph meanings',
    learned: false
  }
];

export const glyphs: Glyph[] = [
  {
    id: 'glyph-memory',
    symbol: '◈',
    sound: 'meh-VOR',
    emotion: 'Nostalgia',
    mnemonicTether: 'Links to childhood memories',
    ethicalResonance: 'Preservation vs manipulation',
    unlocked: true
  },
  {
    id: 'glyph-truth',
    symbol: '◇',
    sound: 've-RAS',
    emotion: 'Clarity',
    mnemonicTether: 'Moments of sudden understanding',
    ethicalResonance: 'Truth can heal or wound',
    unlocked: false
  },
  {
    id: 'glyph-bond',
    symbol: '⬡',
    sound: 'lin-KAH',
    emotion: 'Connection',
    mnemonicTether: 'Deep relationships',
    ethicalResonance: 'Bonds can liberate or bind',
    unlocked: false
  },
  {
    id: 'glyph-change',
    symbol: '⟡',
    sound: 'mur-TAN',
    emotion: 'Flux',
    mnemonicTether: 'Transformative moments',
    ethicalResonance: 'Change is neither good nor evil',
    unlocked: false
  },
  {
    id: 'glyph-silence',
    symbol: '○',
    sound: '(silent)',
    emotion: 'Peace / Void',
    mnemonicTether: 'Moments of profound stillness',
    ethicalResonance: 'Silence can comfort or isolate',
    unlocked: false
  },
  {
    id: 'glyph-echo',
    symbol: '∞',
    sound: 'ek-HO',
    emotion: 'Resonance',
    mnemonicTether: 'Patterns that repeat across time',
    ethicalResonance: 'Echoes carry wisdom and warnings',
    unlocked: false
  },
  {
    id: 'glyph-drift',
    symbol: '≋',
    sound: 'dri-FT',
    emotion: 'Uncertainty',
    mnemonicTether: 'Memories that feel unreal',
    ethicalResonance: 'Reality is mutable',
    unlocked: false
  },
  {
    id: 'glyph-origin',
    symbol: '⊕',
    sound: 'or-IGN',
    emotion: 'Beginning',
    mnemonicTether: 'First moments, first words',
    ethicalResonance: 'Origins shape all that follows',
    unlocked: false
  }
];

export const getDialectById = (id: string): EllidricDialect | undefined => {
  return ellidricDialects.find(d => d.id === id);
};

export const getLanguageById = (id: string): Language | undefined => {
  return baseLanguages.find(l => l.id === id);
};

export const getUnlockedGlyphs = (): Glyph[] => {
  return glyphs.filter(g => g.unlocked);
};
