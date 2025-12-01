// 🎭 Characters Data - Based on world_data/characters.md
import { Character } from '@/types/game';

export const characters: Character[] = [
  {
    id: 'lyra',
    name: 'Lyra Veyndral',
    role: 'Mnemonic Cartographer',
    faction: 'institute',
    personality: 'Calculated, guarded, dry wit',
    coreConflict: 'Hides a sealed memory tied to the First Speaker',
    gameplayHooks: [
      'Introduces Memory Drift Zones',
      'Teaches Cartographer\'s Syntax',
      'Loyalty → Defensive glyphs unlocked',
      'Betrayal → Aggressive, reality-altering phrases'
    ],
    trustLevel: 0,
    portrait: '🧙‍♀️'
  },
  {
    id: 'kaelen',
    name: 'Kaelen Dravik',
    role: 'Institute Enforcer',
    faction: 'institute',
    personality: 'Stern, disciplined, loyal to hierarchy',
    coreConflict: 'Torn between duty and personal debt to Lyra',
    gameplayHooks: [
      'Acts as rival in early chapters',
      'Can become ally if convinced of Institute corruption'
    ],
    trustLevel: -20,
    portrait: '🗡️'
  },
  {
    id: 'serai',
    name: 'Serai of the Whispering Woods',
    role: 'Clan Storykeeper',
    faction: 'clans',
    personality: 'Warm, enigmatic, speaks in layered metaphors',
    coreConflict: 'Protects oral purity of Ellidric against written codification',
    gameplayHooks: [
      'Offers oral-only glyph interpretations',
      'Unlocks "Living Glyph" mechanic'
    ],
    trustLevel: 10,
    portrait: '🌿'
  },
  {
    id: 'veyth',
    name: 'Veyth the Echoborn',
    role: 'Glyph-born wanderer',
    faction: 'echoborn',
    personality: 'Alien, fragmented speech patterns',
    coreConflict: 'Unsure if they are human or pure Ellidric construct',
    gameplayHooks: [
      'Speaks only in Ellidric',
      'Dialogue changes based on player\'s language unlocks'
    ],
    trustLevel: 0,
    portrait: '🌀'
  },
  {
    id: 'meren',
    name: 'Archivist Meren',
    role: 'Glyph Scholar',
    faction: 'institute',
    personality: 'Curious, meticulous, slightly absent-minded',
    coreConflict: 'Discovers Institute secrets that challenge their beliefs',
    gameplayHooks: [
      'Provides lore dumps',
      'Offers puzzle hints'
    ],
    trustLevel: 15,
    portrait: '📚'
  },
  {
    id: 'thrynn',
    name: 'Elder Thrynn',
    role: 'Drift Survivor',
    faction: 'clans',
    personality: 'Wise but haunted by altered memories',
    coreConflict: 'Cannot tell which of his memories are real',
    gameplayHooks: [
      'Gives side quests tied to altered memories'
    ],
    trustLevel: 5,
    portrait: '👴'
  },
  {
    id: 'sava',
    name: 'Sava the Polyglot',
    role: 'Language Merchant',
    faction: 'neutral',
    personality: 'Charming, mercantile, speaks many tongues',
    coreConflict: 'Sells language knowledge to the highest bidder',
    gameplayHooks: [
      'Sells rare translation keys',
      'Offers language tutorials'
    ],
    trustLevel: 0,
    portrait: '🗣️'
  },
  {
    id: 'velran',
    name: 'Arch-Archivist Velran',
    role: 'Institute Leader',
    faction: 'institute',
    personality: 'Authoritative, calculating, believes end justifies means',
    coreConflict: 'Hiding the true nature of Memory Engines',
    gameplayHooks: [
      'Main antagonist in Institute storyline',
      'Controls access to advanced glyphs'
    ],
    trustLevel: -30,
    portrait: '🏛️'
  }
];

export const getCharacterById = (id: string): Character | undefined => {
  return characters.find(c => c.id === id);
};

export const getCharactersByFaction = (faction: string): Character[] => {
  return characters.filter(c => c.faction === faction);
};
