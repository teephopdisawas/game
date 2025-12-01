// 🎮 Game Types for Valdaren: Echoes of Ellidra

export interface Character {
  id: string;
  name: string;
  role: string;
  faction: string;
  personality: string;
  coreConflict: string;
  gameplayHooks: string[];
  trustLevel: number; // -100 to +100
  portrait?: string;
}

export interface Faction {
  id: string;
  name: string;
  motto: string;
  coreBelief: string;
  structure: string;
  keyFigures: string[];
  gameplayImpact: string[];
  reputation: number; // -100 to +100
  color: string;
}

export interface Region {
  id: string;
  name: string;
  description: string;
  controllingFaction: string;
  subLocations: string[];
  atmosphere: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  act: number;
  objectives: QuestObjective[];
  status: 'locked' | 'available' | 'active' | 'completed';
  rewards: string[];
  prerequisites: string[];
}

export interface QuestObjective {
  id: string;
  description: string;
  completed: boolean;
}

export interface EllidricDialect {
  id: string;
  name: string;
  faction: string;
  traits: string;
  culturalNotes: string;
  masteryLevel: number; // 0-100
}

export interface Language {
  id: string;
  name: string;
  unlockEffect: string;
  learned: boolean;
}

export interface Glyph {
  id: string;
  symbol: string;
  sound: string;
  emotion: string;
  mnemonicTether: string;
  ethicalResonance: string;
  unlocked: boolean;
}

export interface MemoryDriftZone {
  id: string;
  name: string;
  stability: number; // 0-100
  corruptionLevel: number; // 0-5
  memoryFragments: string[];
  explored: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'story' | 'language' | 'exploration' | 'social' | 'hidden';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
  progress: number; // 0-100
}

export interface DialogueChoice {
  id: string;
  text: string;
  requiredLanguage?: string;
  requiredFactionRep?: { faction: string; minRep: number };
  consequence?: {
    factionRepChange?: { faction: string; change: number }[];
    characterTrustChange?: { character: string; change: number }[];
    questUnlock?: string;
    glyphUnlock?: string;
  };
}

export interface DialogueNode {
  id: string;
  speaker: string;
  text: string;
  choices: DialogueChoice[];
  nextNodeId?: string;
}

export interface StoryScene {
  id: string;
  title: string;
  location: string;
  dialogue: DialogueNode[];
  backgroundImage?: string;
}

export interface GameState {
  // Player Info
  playerName: string;
  currentAct: number;
  currentScene: string;
  
  // Progress
  languagesLearned: string[];
  dialectMastery: Record<string, number>;
  glyphsUnlocked: string[];
  questsCompleted: string[];
  activeQuests: string[];
  
  // Relationships
  factionReputation: Record<string, number>;
  characterTrust: Record<string, number>;
  
  // World State
  driftStability: number;
  worldStateFlags: string[];
  glyphCorruptionLevel: number;
  
  // Achievements
  achievementsUnlocked: string[];
  
  // Save/Load
  saveSlot: number;
  lastSaved: string | null;
  playtime: number;
}

export interface SaveData {
  slot: number;
  gameState: GameState;
  timestamp: string;
  playerName: string;
  currentAct: number;
  playtime: number;
}
