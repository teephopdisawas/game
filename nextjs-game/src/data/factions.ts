// ⚔️ Factions Data - Based on world_data/factions.md
import { Faction } from '@/types/game';

export const factions: Faction[] = [
  {
    id: 'institute',
    name: 'Institute of Lingua Arcanum',
    motto: 'Order through Words',
    coreBelief: 'Ellidric must be codified, regulated, and weaponized for stability',
    structure: 'Hierarchical, with Archivists, Enforcers, and Cartographers',
    keyFigures: ['Arch-Archivist Velran', 'Kaelen Dravik', 'Lyra Veyndral'],
    gameplayImpact: [
      'Grants access to Memory Engines',
      'Restricts oral glyph interpretations',
      'Unlocks Codex Ellidric dialect'
    ],
    reputation: 0,
    color: '#3B82F6' // Blue
  },
  {
    id: 'clans',
    name: 'Clans of the Whispering Woods',
    motto: 'The Word Breathes',
    coreBelief: 'Ellidric is alive; writing it kills its spirit',
    structure: 'Decentralized, led by Storykeepers',
    keyFigures: ['Serai', 'Elder Thrynn'],
    gameplayImpact: [
      'Unlocks Living Glyph mechanic',
      'Provides alternate quest resolutions',
      'Unlocks Verdant Ellidric dialect'
    ],
    reputation: 0,
    color: '#22C55E' // Green
  },
  {
    id: 'echoborn',
    name: 'The Echoborn',
    motto: 'We Are the Echo',
    coreBelief: 'They are reincarnations of glyphs, not mortals',
    structure: 'Non-hierarchical; individuals wander alone',
    keyFigures: ['Veyth'],
    gameplayImpact: [
      'Dialogue entirely in Ellidric',
      'Offer rare glyphs unattainable elsewhere',
      'Unlocks Pure Ellidric dialect'
    ],
    reputation: 0,
    color: '#A855F7' // Purple
  },
  {
    id: 'neutral',
    name: 'Neutral Territories',
    motto: 'Balance in All Things',
    coreBelief: 'All factions hold fragments of truth',
    structure: 'Various guilds and independent groups',
    keyFigures: ['Sava the Polyglot', 'Drift Wardens', 'The Silent Chorus'],
    gameplayImpact: [
      'Access to all faction territories',
      'Sells translation keys',
      'Unlocks musical glyph puzzles'
    ],
    reputation: 0,
    color: '#6B7280' // Gray
  }
];

export const minorFactions = [
  {
    id: 'polyglot-guild',
    name: 'The Polyglot Guild',
    belief: 'All languages hold fragments of truth',
    role: 'Sells translation keys'
  },
  {
    id: 'drift-wardens',
    name: 'Drift Wardens',
    belief: 'Contain unstable Drift Zones',
    role: 'Side quest givers'
  },
  {
    id: 'silent-chorus',
    name: 'The Silent Chorus',
    belief: 'Communicate only through glyph-song',
    role: 'Unlocks musical glyph puzzles'
  }
];

export const getFactionById = (id: string): Faction | undefined => {
  return factions.find(f => f.id === id);
};
