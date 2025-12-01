// 🎭 Story/Dialogue Data - Opening story content
import { StoryScene, DialogueNode } from '@/types/game';

export const storyScenes: StoryScene[] = [
  {
    id: 'scene-awakening',
    title: 'The Awakening',
    location: 'Ancient Ruins',
    dialogue: [
      {
        id: 'awakening-1',
        speaker: 'Narrator',
        text: 'Darkness... then light. Cold stone beneath your fingers. Ancient glyphs shimmer on the walls around you, pulsing with an otherworldly glow.',
        choices: [],
        nextNodeId: 'awakening-2'
      },
      {
        id: 'awakening-2',
        speaker: 'Narrator',
        text: 'You have no memory of how you arrived here. No memory of who you are. But as your eyes adjust, the glyphs seem to... respond to your presence.',
        choices: [],
        nextNodeId: 'awakening-3'
      },
      {
        id: 'awakening-3',
        speaker: 'Narrator',
        text: 'A symbol etched into the nearest pillar begins to glow brighter. You feel an irresistible pull toward it.',
        choices: [
          {
            id: 'choice-1a',
            text: 'Reach out and touch the glyph',
            consequence: {
              glyphUnlock: 'glyph-memory'
            }
          },
          {
            id: 'choice-1b',
            text: 'Step back cautiously',
          }
        ],
        nextNodeId: 'awakening-4'
      },
      {
        id: 'awakening-4',
        speaker: 'Narrator',
        text: 'The moment your fingers brush the ancient symbol, a flood of sensation washes over you. Not memories - something deeper. The glyph\'s meaning unfolds in your mind: ◈ — "Memory."',
        choices: [],
        nextNodeId: 'awakening-5'
      },
      {
        id: 'awakening-5',
        speaker: '???',
        text: 'So... you\'ve finally awakened.',
        choices: [],
        nextNodeId: 'awakening-6'
      },
      {
        id: 'awakening-6',
        speaker: 'Narrator',
        text: 'A figure emerges from the shadows. A woman with calculating eyes and silver-streaked hair, holding a lantern that casts strange patterns on the walls.',
        choices: [],
        nextNodeId: 'awakening-7'
      },
      {
        id: 'awakening-7',
        speaker: 'Lyra Veyndral',
        text: 'Don\'t look so alarmed. I\'m Lyra Veyndral - a cartographer of sorts. Though what I map isn\'t geography. It\'s memory. And you... you\'ve just activated a glyph that hasn\'t responded to anyone in centuries.',
        choices: [
          {
            id: 'choice-2a',
            text: '"Who am I? Why can\'t I remember anything?"',
            consequence: {
              characterTrustChange: [{ character: 'lyra', change: 5 }]
            }
          },
          {
            id: 'choice-2b',
            text: '"What are these glyphs? What is this place?"',
            consequence: {
              characterTrustChange: [{ character: 'lyra', change: 5 }]
            }
          },
          {
            id: 'choice-2c',
            text: '"Stay back! How do I know you\'re not a threat?"',
            consequence: {
              characterTrustChange: [{ character: 'lyra', change: -5 }]
            }
          }
        ],
        nextNodeId: 'awakening-8'
      },
      {
        id: 'awakening-8',
        speaker: 'Lyra Veyndral',
        text: 'Reasonable questions, all of them. This place is the Ancient Ruins - the birthplace of Ellidric, the language of memory. As for who you are... that\'s what I\'m here to help you discover.',
        choices: [],
        nextNodeId: 'awakening-9'
      },
      {
        id: 'awakening-9',
        speaker: 'Lyra Veyndral',
        text: 'The fact that the glyphs respond to you... it suggests something extraordinary. There are those who would kill for that power. And others who would kill to suppress it.',
        choices: [
          {
            id: 'choice-3a',
            text: '"Teach me more about Ellidric."',
            consequence: {
              factionRepChange: [{ faction: 'institute', change: 5 }]
            }
          },
          {
            id: 'choice-3b',
            text: '"What factions are fighting over this power?"',
          },
          {
            id: 'choice-3c',
            text: '"Can these glyphs help me recover my memories?"',
          }
        ],
        nextNodeId: 'awakening-10'
      },
      {
        id: 'awakening-10',
        speaker: 'Lyra Veyndral',
        text: 'All in time. First, we need to get you somewhere safe. The Institute will be very interested in meeting you - and so will others. But the choice of who to trust... that must be yours.',
        choices: [],
        nextNodeId: 'awakening-11'
      },
      {
        id: 'awakening-11',
        speaker: 'Narrator',
        text: 'Lyra extends her hand toward you. Beyond her, you can see two paths - one leading toward distant city lights, another vanishing into a dark forest where whispers seem to carry on the wind.',
        choices: [
          {
            id: 'choice-4a',
            text: 'Take Lyra\'s hand and follow her toward the city',
            consequence: {
              factionRepChange: [{ faction: 'institute', change: 10 }],
              characterTrustChange: [{ character: 'lyra', change: 10 }]
            }
          },
          {
            id: 'choice-4b',
            text: 'Ask about the whispering forest first',
            consequence: {
              factionRepChange: [{ faction: 'clans', change: 5 }]
            }
          }
        ],
        nextNodeId: 'awakening-12'
      },
      {
        id: 'awakening-12',
        speaker: 'Lyra Veyndral',
        text: 'A wise choice - or at least, a choice. In Valdaren, that\'s often all we have. Come. Your story is just beginning, and the language of reality waits for you to speak it.',
        choices: [],
      }
    ]
  }
];

export const getSceneById = (id: string): StoryScene | undefined => {
  return storyScenes.find(s => s.id === id);
};

export const getDialogueNode = (sceneId: string, nodeId: string): DialogueNode | undefined => {
  const scene = getSceneById(sceneId);
  if (!scene) return undefined;
  return scene.dialogue.find(d => d.id === nodeId);
};
