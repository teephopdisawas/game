// 🎮 Game Types for Echoes of Ellidra 🔮✨

export interface DialogueChoice {
  id: string;
  text: string;
  nextSceneId: string;
  factionEffect?: {
    faction: FactionType;
    change: number;
  };
  requiredLanguage?: LanguageType;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  emotion?: 'neutral' | 'happy' | 'sad' | 'angry' | 'mysterious';
}

export interface Scene {
  id: string;
  title: string;
  location: LocationType;
  dialogue: DialogueLine[];
  choices?: DialogueChoice[];
  nextSceneId?: string;
  backgroundImage?: string;
}

export type FactionType = 
  | 'institute' 
  | 'clans' 
  | 'echoborn' 
  | 'neutral';

export type LocationType = 
  | 'ravengard' 
  | 'whispering-woods' 
  | 'snowveil-forest' 
  | 'lumisth-glacier' 
  | 'ancient-ruins' 
  | 'lake-eirysa'
  | 'unknown';

export type LanguageType = 
  | 'english' 
  | 'dutch' 
  | 'latin' 
  | 'greek';

export type EllidricDialect = 
  | 'codex' 
  | 'verdant' 
  | 'glacial' 
  | 'pure';

export interface GameState {
  currentSceneId: string;
  playerName: string;
  languagesKnown: LanguageType[];
  dialectsKnown: EllidricDialect[];
  factionReputation: Record<FactionType, number>;
  glyphsCollected: string[];
  memoryFragments: string[];
  driftStability: number;
  completedScenes: string[];
}

export interface Character {
  id: string;
  name: string;
  role: string;
  faction: FactionType;
  description: string;
  personality: string[];
}

export interface SaveSlot {
  id: number;
  gameState: GameState;
  savedAt: string;
  sceneName: string;
}
