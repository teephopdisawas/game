// 📜 Quest Data - Based on world_data/mechanics.md
import { Quest } from '@/types/game';

export const quests: Quest[] = [
  // ACT 1: AWAKENING
  {
    id: 'prologue-awakening',
    title: 'The Awakening',
    description: 'You wake in Valdaren with no memory, but ancient glyphs respond to your touch. Discover who you are and why the language of reality answers your call.',
    act: 1,
    objectives: [
      { id: 'obj-1-1', description: 'Regain consciousness in the Ancient Ruins', completed: false },
      { id: 'obj-1-2', description: 'Touch your first Ellidric glyph', completed: false },
      { id: 'obj-1-3', description: 'Meet Lyra Veyndral', completed: false }
    ],
    status: 'available',
    rewards: ['Memory Glyph unlocked', 'Basic Ellidric understanding'],
    prerequisites: []
  },
  {
    id: 'first-words',
    title: 'First Words',
    description: 'Lyra believes you may be connected to the First Speaker. Learn the basics of Codex Ellidric to communicate with the Institute.',
    act: 1,
    objectives: [
      { id: 'obj-2-1', description: 'Travel to Ravengard with Lyra', completed: false },
      { id: 'obj-2-2', description: 'Study Codex Ellidric basics', completed: false },
      { id: 'obj-2-3', description: 'Pass the Institute\'s entry examination', completed: false }
    ],
    status: 'locked',
    rewards: ['Codex Ellidric dialect progress', 'Access to Grand Archive'],
    prerequisites: ['prologue-awakening']
  },
  {
    id: 'voices-in-woods',
    title: 'Voices in the Woods',
    description: 'Serai of the Whispering Woods sends word - the Clans wish to meet you. But their oral traditions reveal a different truth about Ellidric.',
    act: 1,
    objectives: [
      { id: 'obj-3-1', description: 'Journey to the Whispering Woods', completed: false },
      { id: 'obj-3-2', description: 'Meet Serai the Storykeeper', completed: false },
      { id: 'obj-3-3', description: 'Experience Verdant Ellidric firsthand', completed: false }
    ],
    status: 'locked',
    rewards: ['Verdant Ellidric dialect introduction', 'Living Glyph tutorial'],
    prerequisites: ['first-words']
  },

  // ACT 2: DIVERGENCE
  {
    id: 'institute-path',
    title: 'Path of Order',
    description: 'Arch-Archivist Velran offers you a place among the Institute\'s elite. But their Memory Engines hide dark secrets.',
    act: 2,
    objectives: [
      { id: 'obj-4-1', description: 'Accept or decline Velran\'s offer', completed: false },
      { id: 'obj-4-2', description: 'Investigate Memory Engine operations', completed: false },
      { id: 'obj-4-3', description: 'Discover the truth about "healing" memories', completed: false }
    ],
    status: 'locked',
    rewards: ['Institute reputation boost', 'Advanced Codex glyphs'],
    prerequisites: ['voices-in-woods']
  },
  {
    id: 'clan-path',
    title: 'Path of the Living Word',
    description: 'Elder Thrynn shares his corrupted memories with you. Can you help restore what the Institute has altered?',
    act: 2,
    objectives: [
      { id: 'obj-5-1', description: 'Enter Thrynn\'s Memory Drift', completed: false },
      { id: 'obj-5-2', description: 'Navigate the unstable memories', completed: false },
      { id: 'obj-5-3', description: 'Choose to stabilize or liberate the drift', completed: false }
    ],
    status: 'locked',
    rewards: ['Clan reputation boost', 'Memory Drift access'],
    prerequisites: ['voices-in-woods']
  },
  {
    id: 'echoborn-encounter',
    title: 'Meeting the Echo',
    description: 'Veyth the Echoborn finds you. They speak only in Pure Ellidric - and claim you are not who you think you are.',
    act: 2,
    objectives: [
      { id: 'obj-6-1', description: 'Encounter Veyth at the Lumisth Glacier', completed: false },
      { id: 'obj-6-2', description: 'Attempt to understand their message', completed: false },
      { id: 'obj-6-3', description: 'Learn the first Pure Ellidric phrase', completed: false }
    ],
    status: 'locked',
    rewards: ['Echo Ellidric introduction', 'Origin Glyph unlocked'],
    prerequisites: ['institute-path', 'clan-path']
  },

  // ACT 3: REVELATION
  {
    id: 'memory-wars',
    title: 'The Memory Wars',
    description: 'The Institute declares war on "corrupted" memories. The Clans prepare to defend the oral tradition. You must choose a side - or forge a new path.',
    act: 3,
    objectives: [
      { id: 'obj-7-1', description: 'Witness the first Institute purge', completed: false },
      { id: 'obj-7-2', description: 'Rally support for your chosen faction', completed: false },
      { id: 'obj-7-3', description: 'Reach Lake Eirysa for the peace talks', completed: false }
    ],
    status: 'locked',
    rewards: ['Major faction alignment', 'Access to faction-specific endings'],
    prerequisites: ['echoborn-encounter']
  },
  {
    id: 'first-speaker-truth',
    title: 'Truth of the First Speaker',
    description: 'In the deepest chamber of the Ancient Ruins, you discover the truth about your identity and the First Speaker\'s sacrifice.',
    act: 3,
    objectives: [
      { id: 'obj-8-1', description: 'Return to the Ancient Ruins', completed: false },
      { id: 'obj-8-2', description: 'Enter the First Speaker\'s Sanctum', completed: false },
      { id: 'obj-8-3', description: 'Unlock your sealed memory', completed: false }
    ],
    status: 'locked',
    rewards: ['True identity revealed', 'Pure Ellidric mastery path'],
    prerequisites: ['memory-wars']
  },

  // ACT 4: CONVERGENCE
  {
    id: 'final-choice',
    title: 'The Final Choice',
    description: 'With the power of the First Speaker awakened, you must decide the fate of Valdaren. Will you codify, preserve, or transcend Ellidric?',
    act: 4,
    objectives: [
      { id: 'obj-9-1', description: 'Confront Arch-Archivist Velran', completed: false },
      { id: 'obj-9-2', description: 'Unite or divide the factions', completed: false },
      { id: 'obj-9-3', description: 'Speak the Final Word', completed: false }
    ],
    status: 'locked',
    rewards: ['Game ending determined', 'Epilogue unlocked'],
    prerequisites: ['first-speaker-truth']
  },
  {
    id: 'new-dawn',
    title: 'A New Dawn',
    description: 'The echoes of your choice reshape Valdaren. Witness the new world you have created.',
    act: 4,
    objectives: [
      { id: 'obj-10-1', description: 'See the consequences of your choices', completed: false },
      { id: 'obj-10-2', description: 'Speak with surviving characters', completed: false },
      { id: 'obj-10-3', description: 'Write your final glyph', completed: false }
    ],
    status: 'locked',
    rewards: ['Game completion', 'New Game+ unlocked'],
    prerequisites: ['final-choice']
  }
];

export const getQuestById = (id: string): Quest | undefined => {
  return quests.find(q => q.id === id);
};

export const getQuestsByAct = (act: number): Quest[] => {
  return quests.filter(q => q.act === act);
};

export const getAvailableQuests = (): Quest[] => {
  return quests.filter(q => q.status === 'available' || q.status === 'active');
};
