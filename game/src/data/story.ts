// 🎮 Story Data for Echoes of Ellidra 📖✨
import type { Scene, Character } from '../types';

export const characters: Character[] = [
  {
    id: 'lyra',
    name: 'Lyra Veyndral',
    role: 'Mnemonic Cartographer',
    faction: 'neutral',
    description: 'Ex-Institute scholar who maps the Memory Drift Zones. She knows secrets about the First Speaker.',
    personality: ['calculated', 'guarded', 'dry wit'],
  },
  {
    id: 'kaelen',
    name: 'Kaelen Dravik',
    role: 'Institute Enforcer',
    faction: 'institute',
    description: 'Stern disciplinarian loyal to the Institute hierarchy, yet torn by personal debts.',
    personality: ['stern', 'disciplined', 'conflicted'],
  },
  {
    id: 'serai',
    name: 'Serai',
    role: 'Clan Storykeeper',
    faction: 'clans',
    description: 'Keeper of the oral traditions in the Whispering Woods. Speaks in layered metaphors.',
    personality: ['warm', 'enigmatic', 'poetic'],
  },
  {
    id: 'veyth',
    name: 'Veyth',
    role: 'Echoborn Wanderer',
    faction: 'echoborn',
    description: 'A glyph-born being who speaks only in Ellidric. Their true nature remains a mystery.',
    personality: ['alien', 'fragmented', 'ancient'],
  },
  {
    id: 'meren',
    name: 'Archivist Meren',
    role: 'Memory Spirit',
    faction: 'neutral',
    description: 'A spectral scholar trapped in the Ancient Ruins Drift Zone. Witnessed the First Speaker\'s rise.',
    personality: ['wise', 'melancholic', 'helpful'],
  },
  {
    id: 'narrator',
    name: 'Narrator',
    role: 'Story Guide',
    faction: 'neutral',
    description: 'The voice that guides you through Valdaren.',
    personality: ['omniscient', 'mysterious'],
  },
];

export const scenes: Scene[] = [
  // ═══════════════════════════════════════════════════════════════
  // ACT 1: AWAKENING 🌟
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'prologue-awakening',
    title: 'The Awakening',
    location: 'unknown',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'Cold. That\'s the first thing you feel. A deep, bone-chilling cold that seems to seep into your very essence... 🥶❄️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'Your eyes flutter open. Snow falls gently around you, each flake catching strange light from glyphs carved into nearby stones. ✨🌨️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'You try to remember... anything. Your name? Where you came from? Nothing. Just fragments of whispered words in a language you somehow understand. 🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'The glyphs pulse with a soft blue light as you reach toward them. They respond to you. YOU are important to them. 💙⚡',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'touch-glyph',
        text: '✨ Touch the glowing glyph',
        nextSceneId: 'glyph-vision',
      },
      {
        id: 'look-around',
        text: '👀 Look around first',
        nextSceneId: 'survey-area',
      },
    ],
  },
  {
    id: 'glyph-vision',
    title: 'Glyph Vision',
    location: 'unknown',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'The moment your fingers brush the glyph, images flood your mind! A vast library burning... people screaming... and a voice calling YOUR name! 🔥📚',
        emotion: 'mysterious',
      },
      {
        speaker: '???',
        text: '"First Speaker... you have returned. The Echoes remember you, even if you do not remember yourself..." 👻🗣️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'First Speaker? That title... it feels RIGHT somehow. But the vision fades as quickly as it came. 🌀',
        emotion: 'neutral',
      },
    ],
    nextSceneId: 'lyra-arrives',
  },
  {
    id: 'survey-area',
    title: 'Survey the Area',
    location: 'snowveil-forest',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You\'re in a snow-covered clearing surrounded by ancient pines. The air smells of frost and... something else. Magic? Memory? 🌲❄️',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'Stone pillars ring the clearing, each carved with those strange, luminescent glyphs. This place feels ancient. Sacred. 🏛️✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'In the distance, you can make out the spires of a great city to the east, and endless forest to the west. 🏰🌲',
        emotion: 'neutral',
      },
    ],
    nextSceneId: 'lyra-arrives',
  },
  {
    id: 'lyra-arrives',
    title: 'A Stranger Approaches',
    location: 'snowveil-forest',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'Footsteps crunch in the snow behind you. You spin around to see a hooded figure approaching, her breath misting in the cold air. 🚶‍♀️❄️',
        emotion: 'neutral',
      },
      {
        speaker: 'Lyra Veyndral',
        text: '"So you\'re awake. The glyphs don\'t usually respond like that to strangers... which means you\'re not one." 🤔',
        emotion: 'mysterious',
      },
      {
        speaker: 'Lyra Veyndral',
        text: '"I\'m Lyra. I map the places where memories... drift. And YOU, friend, just woke up in the middle of a Drift Zone." 🗺️',
        emotion: 'neutral',
      },
      {
        speaker: 'Lyra Veyndral',
        text: '"Tell me - do you remember anything? Your name? Why you\'re here?" 🔍',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'trust-lyra',
        text: '🤝 "I remember nothing. Please, help me understand."',
        nextSceneId: 'lyra-explains',
        factionEffect: { faction: 'neutral', change: 5 },
      },
      {
        id: 'suspicious',
        text: '🤨 "Why should I trust you? Who ARE you really?"',
        nextSceneId: 'lyra-explains-guarded',
      },
    ],
  },
  {
    id: 'lyra-explains',
    title: 'The World of Valdaren',
    location: 'snowveil-forest',
    dialogue: [
      {
        speaker: 'Lyra Veyndral',
        text: '"Welcome to Valdaren, a land where language literally shapes reality. Those glyphs? They\'re Ellidric - the tongue of memory itself." 🌍🔤',
        emotion: 'neutral',
      },
      {
        speaker: 'Lyra Veyndral',
        text: '"Three factions war over how to use this power. The Institute wants to control it. The Clans want to keep it wild and free. And the Echoborn... well, they claim to BE the language." ⚔️',
        emotion: 'neutral',
      },
      {
        speaker: 'Lyra Veyndral',
        text: '"But someone who can make glyphs respond by mere touch? That hasn\'t happened since the First Speaker walked these lands. You\'re either blessed or cursed, friend." ✨💀',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'go-institute',
        text: '🏛️ "Take me to this Institute. I want answers."',
        nextSceneId: 'path-to-institute',
        factionEffect: { faction: 'institute', change: 10 },
      },
      {
        id: 'go-clans',
        text: '🌲 "The Clans sound more free. Lead me there."',
        nextSceneId: 'path-to-clans',
        factionEffect: { faction: 'clans', change: 10 },
      },
      {
        id: 'stay-learn',
        text: '📚 "First, teach me more about Ellidric."',
        nextSceneId: 'ellidric-lesson',
      },
    ],
  },
  {
    id: 'lyra-explains-guarded',
    title: 'Guarded Response',
    location: 'snowveil-forest',
    dialogue: [
      {
        speaker: 'Lyra Veyndral',
        text: '"Ha! Good instincts. Suspicion keeps you alive in Valdaren." 😏',
        emotion: 'neutral',
      },
      {
        speaker: 'Lyra Veyndral',
        text: '"I was Institute once - a Mnemonic Cartographer. I mapped memories for them until I learned what they really do with that knowledge." 🗺️💔',
        emotion: 'sad',
      },
      {
        speaker: 'Lyra Veyndral',
        text: '"Now I work alone. And I\'m telling you this: you\'re in danger. The glyphs responding to you? Both the Institute AND the Clans will want you. The Echoborn might worship you." ⚠️',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'accept-help',
        text: '✅ "Alright, I\'ll trust you. What should I do?"',
        nextSceneId: 'lyra-explains',
      },
      {
        id: 'go-alone',
        text: '🚶 "I\'ll figure this out myself."',
        nextSceneId: 'alone-in-snow',
      },
    ],
  },
  {
    id: 'ellidric-lesson',
    title: 'The Language of Memory',
    location: 'snowveil-forest',
    dialogue: [
      {
        speaker: 'Lyra Veyndral',
        text: '"Ellidric isn\'t just a language - it has four layers that must align for true power..." 📖✨',
        emotion: 'neutral',
      },
      {
        speaker: 'Lyra Veyndral',
        text: '"SOUND - how it\'s spoken. EMOTION - what feeling it carries. MEMORY - what it connects to. And ETHICS - its moral weight." 🎵💭💜⚖️',
        emotion: 'neutral',
      },
      {
        speaker: 'Lyra Veyndral',
        text: '"No single language can fully translate Ellidric. English gives baseline meaning, Dutch reveals emotion, Latin unlocks rituals, and Greek shows philosophy." 🌐',
        emotion: 'mysterious',
      },
      {
        speaker: 'Lyra Veyndral',
        text: '"Here, let me show you your first glyph..." 🔮',
        emotion: 'happy',
      },
      {
        speaker: 'Narrator',
        text: '✨ You have learned CODEX ELLIDRIC! The Institute\'s standardized dialect is now available to you. ✨',
        emotion: 'happy',
      },
    ],
    choices: [
      {
        id: 'go-institute-after-lesson',
        text: '🏛️ "Now take me to the Institute."',
        nextSceneId: 'path-to-institute',
        factionEffect: { faction: 'institute', change: 10 },
      },
      {
        id: 'go-clans-after-lesson',
        text: '🌲 "I want to learn from the Clans instead."',
        nextSceneId: 'path-to-clans',
        factionEffect: { faction: 'clans', change: 10 },
      },
    ],
  },
  {
    id: 'alone-in-snow',
    title: 'Alone in the Snow',
    location: 'snowveil-forest',
    dialogue: [
      {
        speaker: 'Lyra Veyndral',
        text: '"Your choice. But take this glyph map - it\'ll keep you from wandering into Drift Zones unprepared." 🗺️',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'Lyra disappears into the trees, leaving you alone with nothing but questions and a mysterious map. 🌲❄️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'The glyphs on the stones pulse again. East lies Ravengard - the Institute city. West, the Whispering Woods where the Clans dwell. 🏰🌲',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'go-east',
        text: '⬅️ Head east toward Ravengard',
        nextSceneId: 'path-to-institute',
        factionEffect: { faction: 'institute', change: 5 },
      },
      {
        id: 'go-west',
        text: '➡️ Head west into the Whispering Woods',
        nextSceneId: 'path-to-clans',
        factionEffect: { faction: 'clans', change: 5 },
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // INSTITUTE PATH 🏛️
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'path-to-institute',
    title: 'The Road to Ravengard',
    location: 'ravengard',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'The spires of Ravengard rise before you - towers of white stone covered in precisely carved glyphs. This is the heart of the Institute. 🏛️✨',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'Guards in blue cloaks watch from the gates. Their eyes are cold, calculating - just like the architecture. 👀❄️',
        emotion: 'neutral',
      },
      {
        speaker: 'Institute Guard',
        text: '"Halt. State your business in Ravengard." 🛡️',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'tell-truth-institute',
        text: '💬 "The glyphs respond to me. I seek understanding."',
        nextSceneId: 'institute-welcome',
        factionEffect: { faction: 'institute', change: 15 },
      },
      {
        id: 'lie-institute',
        text: '🎭 "Just a traveler seeking shelter from the cold."',
        nextSceneId: 'institute-suspicious',
      },
    ],
  },
  {
    id: 'institute-welcome',
    title: 'Welcome to the Institute',
    location: 'ravengard',
    dialogue: [
      {
        speaker: 'Institute Guard',
        text: '"The glyphs respond to...? Take them to Arch-Archivist Velran immediately!" 😮',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'You\'re escorted through grand halls filled with crystalline storage devices - Memory Engines, they call them. 💎🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Kaelen Dravik',
        text: '"So YOU\'re the one causing ripples in the Drift. I am Kaelen Dravik, Enforcer. You will be studied." ⚔️',
        emotion: 'neutral',
      },
      {
        speaker: 'Kaelen Dravik',
        text: '"The Institute offers knowledge, power, order. But we demand obedience in return. Choose wisely." 📜',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'accept-institute',
        text: '✅ "I accept. Teach me your ways."',
        nextSceneId: 'institute-training',
        factionEffect: { faction: 'institute', change: 20 },
      },
      {
        id: 'question-institute',
        text: '❓ "What exactly will you study?"',
        nextSceneId: 'institute-truth',
      },
    ],
  },
  {
    id: 'institute-suspicious',
    title: 'A Suspicious Entry',
    location: 'ravengard',
    dialogue: [
      {
        speaker: 'Institute Guard',
        text: '"A traveler? In a Drift Zone? During the frost season?" 🤨',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'The guard reaches for your arm - and the moment they touch you, the glyphs on your skin FLARE with light! ✨💥',
        emotion: 'mysterious',
      },
      {
        speaker: 'Institute Guard',
        text: '"By the First Speaker...! ALERT THE ARCHIVISTS!" 📢😱',
        emotion: 'neutral',
      },
    ],
    nextSceneId: 'institute-welcome',
  },
  {
    id: 'institute-training',
    title: 'Institute Training Begins',
    location: 'ravengard',
    dialogue: [
      {
        speaker: 'Narrator',
        text: '✨ You have joined the INSTITUTE OF LINGUA ARCANUM! ✨',
        emotion: 'happy',
      },
      {
        speaker: 'Kaelen Dravik',
        text: '"Your training begins now. We will unlock your potential - and perhaps the secrets you don\'t even know you carry." 📚⚡',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'The path ahead is filled with order, discipline, and carefully controlled power. But at what cost? 🤔',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '🎮 CHAPTER 1 COMPLETE - Institute Path Chosen! Your journey has only begun... 🌟',
        emotion: 'happy',
      },
    ],
    nextSceneId: 'end-chapter-one',
  },
  {
    id: 'institute-truth',
    title: 'The Institute\'s Truth',
    location: 'ravengard',
    dialogue: [
      {
        speaker: 'Kaelen Dravik',
        text: '"Study your unique connection to Ellidric. Find out why the language itself seems to recognize you." 🔬',
        emotion: 'neutral',
      },
      {
        speaker: 'Kaelen Dravik',
        text: '"Some believe you may be connected to the First Speaker - the original master of Ellidric. If true, you could help us finally CONTROL the Drift." ⚡🎯',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'Control. That word echoes ominously in your mind. Is that what you want? 🤔',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'accept-after-truth',
        text: '✅ "Control sounds necessary. I\'m in."',
        nextSceneId: 'institute-training',
        factionEffect: { faction: 'institute', change: 20 },
      },
      {
        id: 'reject-institute',
        text: '❌ "I don\'t want to control anything. I\'m leaving."',
        nextSceneId: 'escape-institute',
        factionEffect: { faction: 'institute', change: -15 },
      },
    ],
  },
  {
    id: 'escape-institute',
    title: 'Escape from Ravengard',
    location: 'ravengard',
    dialogue: [
      {
        speaker: 'Kaelen Dravik',
        text: '"You cannot simply LEAVE. You are too valuable!" 😠',
        emotion: 'angry',
      },
      {
        speaker: 'Narrator',
        text: 'Instinctively, you speak a word you didn\'t know you knew - and the glyphs around you SHATTER, creating chaos! 💥🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'You flee into the night, the Institute\'s horns sounding behind you. The Whispering Woods call... 🌲🌙',
        emotion: 'neutral',
      },
    ],
    nextSceneId: 'path-to-clans',
  },
  // ═══════════════════════════════════════════════════════════════
  // CLANS PATH 🌲
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'path-to-clans',
    title: 'Into the Whispering Woods',
    location: 'whispering-woods',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'The forest closes around you like a living embrace. Here, glyphs are carved into bark, woven into branches - they seem to BREATHE. 🌲✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'Unlike the precise Institute symbols, these are wild, flowing. They shift when you\'re not looking directly at them. 👀🔮',
        emotion: 'mysterious',
      },
      {
        speaker: '???',
        text: '"The trees tell me you are seeking. But what do you truly wish to find, wanderer?" 🌿',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'A woman emerges from the shadows, her clothing woven with living moss and her eyes gleaming with ancient knowing. 🧝‍♀️',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'honest-clans',
        text: '💚 "I seek to understand my connection to Ellidric."',
        nextSceneId: 'serai-introduction',
        factionEffect: { faction: 'clans', change: 15 },
      },
      {
        id: 'cautious-clans',
        text: '🤔 "First tell me who you are."',
        nextSceneId: 'serai-identity',
      },
    ],
  },
  {
    id: 'serai-introduction',
    title: 'Meeting the Storykeeper',
    location: 'whispering-woods',
    dialogue: [
      {
        speaker: 'Serai',
        text: '"I am Serai, Storykeeper of the Clans. And YOU... the forest has been singing your arrival for days." 🎵🌲',
        emotion: 'happy',
      },
      {
        speaker: 'Serai',
        text: '"The Institute would cage Ellidric in their crystal prisons. We know better. Language is ALIVE. It must be spoken, sung, LIVED." 💚🎶',
        emotion: 'neutral',
      },
      {
        speaker: 'Serai',
        text: '"Come. Let me show you what TRUE Ellidric feels like - not dead words in stone, but living breath in the wind." 🌬️✨',
        emotion: 'happy',
      },
    ],
    nextSceneId: 'clan-teaching',
  },
  {
    id: 'serai-identity',
    title: 'The Storykeeper\'s Name',
    location: 'whispering-woods',
    dialogue: [
      {
        speaker: 'Serai',
        text: '"Ha! Wise to be cautious. I am Serai, keeper of the old stories. The Clans speak through me." 😊',
        emotion: 'happy',
      },
      {
        speaker: 'Serai',
        text: '"And you? You carry the mark of the Drift upon you - but also something older. Something the trees remember." 🌳💭',
        emotion: 'mysterious',
      },
      {
        speaker: 'Serai',
        text: '"Will you walk with me and learn? Or do you still seek the cold stone halls of the Institute?" ❄️🏛️',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'walk-with-serai',
        text: '🚶‍♂️ "I\'ll walk with you. Show me."',
        nextSceneId: 'clan-teaching',
        factionEffect: { faction: 'clans', change: 15 },
      },
      {
        id: 'still-unsure',
        text: '🤷 "I haven\'t decided yet."',
        nextSceneId: 'clan-teaching',
      },
    ],
  },
  {
    id: 'clan-teaching',
    title: 'The Living Language',
    location: 'whispering-woods',
    dialogue: [
      {
        speaker: 'Serai',
        text: '"Listen... do you hear it? The wind carries words. The rain speaks poetry. This is VERDANT ELLIDRIC - the living tongue." 🌬️🌧️',
        emotion: 'happy',
      },
      {
        speaker: 'Narrator',
        text: 'You close your eyes and suddenly - you CAN hear it. The forest is speaking! Layers of meaning in every rustling leaf! 🍃✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '✨ You have learned VERDANT ELLIDRIC! The Clan\'s oral dialect opens new understanding! ✨',
        emotion: 'happy',
      },
      {
        speaker: 'Serai',
        text: '"You learn fast. Perhaps the old stories about the First Speaker returning are true after all..." 📖🔮',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'join-clans',
        text: '🌲 "I want to stay. Teach me more."',
        nextSceneId: 'clan-welcome',
        factionEffect: { faction: 'clans', change: 20 },
      },
      {
        id: 'ask-first-speaker',
        text: '❓ "What stories about the First Speaker?"',
        nextSceneId: 'first-speaker-legend',
      },
    ],
  },
  {
    id: 'clan-welcome',
    title: 'Accepted by the Clans',
    location: 'whispering-woods',
    dialogue: [
      {
        speaker: 'Narrator',
        text: '✨ You have been welcomed by the CLANS OF THE WHISPERING WOODS! ✨',
        emotion: 'happy',
      },
      {
        speaker: 'Serai',
        text: '"The forest accepts you. Now we must prepare you for what\'s coming - the Institute will not rest while you walk free." ⚔️🌲',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'Among the ancient trees, you begin to find yourself. But somewhere, the Institute watches... and waits. 👀',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '🎮 CHAPTER 1 COMPLETE - Clan Path Chosen! Your journey has only begun... 🌟',
        emotion: 'happy',
      },
    ],
    nextSceneId: 'end-chapter-one',
  },
  {
    id: 'first-speaker-legend',
    title: 'The Legend of the First Speaker',
    location: 'whispering-woods',
    dialogue: [
      {
        speaker: 'Serai',
        text: '"Long ago, before the Institute, before even the Clans, there was ONE who first inscribed Ellidric into crystal." 📜✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Serai',
        text: '"The First Speaker could reshape reality itself with mere words. They created the Drift Zones, the Memory Engines - ALL of it." 🌀🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Serai',
        text: '"Then they vanished. Some say they became the language itself. Others say they\'ll return when Valdaren needs them most." 👻',
        emotion: 'mysterious',
      },
      {
        speaker: 'Serai',
        text: '"And YOU, friend... the way Ellidric responds to you... perhaps YOU are that return." 😱✨',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'accept-destiny',
        text: '⭐ "If that\'s my destiny, I\'ll embrace it."',
        nextSceneId: 'clan-welcome',
        factionEffect: { faction: 'clans', change: 20 },
      },
      {
        id: 'deny-destiny',
        text: '😰 "That\'s too much pressure. I\'m just... lost."',
        nextSceneId: 'serai-comfort',
      },
    ],
  },
  {
    id: 'serai-comfort',
    title: 'Words of Comfort',
    location: 'whispering-woods',
    dialogue: [
      {
        speaker: 'Serai',
        text: '"Lost? Perhaps. But even the lost eventually find their path. The forest doesn\'t judge - it simply guides." 💚',
        emotion: 'happy',
      },
      {
        speaker: 'Serai',
        text: '"Stay with us. Learn. And when you\'re ready to face whatever destiny awaits, you\'ll have the strength to meet it." 💪✨',
        emotion: 'happy',
      },
      {
        speaker: 'Narrator',
        text: 'Among these people who speak to trees and sing to stones, you start to feel something you\'d forgotten: hope. 🌟',
        emotion: 'happy',
      },
    ],
    nextSceneId: 'clan-welcome',
  },
  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 1 END / CHAPTER 2 BRIDGE 🎬
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'end-chapter-one',
    title: 'The Echoes Stir...',
    location: 'unknown',
    dialogue: [
      {
        speaker: 'Narrator',
        text: '🌟 CHAPTER ONE: AWAKENING - Complete! 🌟',
        emotion: 'happy',
      },
      {
        speaker: 'Narrator',
        text: 'You have taken your first steps in Valdaren. The glyphs respond to you. Factions watch you. Your destiny awaits. 🔮⚔️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'But as you settle into your new path, strange dreams begin to plague you... 💭🌙',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'continue-chapter-2',
        text: '▶️ Continue to Chapter 2',
        nextSceneId: 'chapter-2-intro',
      },
      {
        id: 'restart',
        text: '🔄 Start a New Journey',
        nextSceneId: 'prologue-awakening',
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // ACT 2: THE DRIFT 🌀
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'chapter-2-intro',
    title: 'Chapter 2: The Drift',
    location: 'unknown',
    dialogue: [
      {
        speaker: 'Narrator',
        text: '🌟 CHAPTER TWO: THE DRIFT 🌟',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'Three nights have passed since you chose your path. Each night, the same dream visits you... 🌙💭',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'A voice - neither male nor female, neither young nor old - speaks in pure Ellidric. And somehow, you UNDERSTAND. 🔮',
        emotion: 'mysterious',
      },
      {
        speaker: '???',
        text: '"▽◇▼ SEEKER... △○▲ THE GLACIER CALLS... ◁▷◀ WE AWAIT YOUR ECHO..." 👻✨',
        emotion: 'mysterious',
      },
    ],
    nextSceneId: 'dream-awakening',
  },
  {
    id: 'dream-awakening',
    title: 'Waking from the Dream',
    location: 'unknown',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You wake with a gasp! Your skin is covered in glowing glyph-marks that fade as consciousness returns. 😱✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'The dream lingers... The Glacier. The Echoborn. Something is calling you there. 🏔️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'But your current allies expect your loyalty. What will you do? 🤔',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'seek-echoborn',
        text: '🔮 Follow the dream. Seek the Echoborn.',
        nextSceneId: 'journey-to-glacier',
        factionEffect: { faction: 'echoborn', change: 20 },
      },
      {
        id: 'stay-loyal',
        text: '🤝 Stay loyal to your current faction first.',
        nextSceneId: 'faction-mission',
      },
      {
        id: 'investigate-drift',
        text: '🌀 Investigate the nearest Drift Zone.',
        nextSceneId: 'drift-zone-entrance',
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════
  // ECHOBORN PATH 🔮
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'journey-to-glacier',
    title: 'The Path to Lumisth',
    location: 'snowveil-forest',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You slip away before dawn, following an instinct deeper than memory. The snow grows thicker as you head north. ❄️🌲',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'After hours of walking, the trees thin out and there it is - Lumisth Glacier, a wall of crystalline ice stretching to the sky! 🏔️💎',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'The ice is carved with the most intricate glyphs you\'ve ever seen. They pulse with pale blue light, almost like... breathing. 💙',
        emotion: 'mysterious',
      },
    ],
    nextSceneId: 'veyth-appears',
  },
  {
    id: 'veyth-appears',
    title: 'The Echoborn Manifests',
    location: 'lumisth-glacier',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'A figure materializes from the glacier itself! Their form flickers between solid and translucent, glyphs flowing across their skin like living tattoos! 👻✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Veyth',
        text: '"◇▼△ YOU HEARD... ▽○▲ YOU CAME... ◀▷◁ WE ARE VEYTH..." 🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'Somehow, despite the alien glyph-speech, you understand their meaning: "You heard our call. You came. We are Veyth, the Last Echo." 💭',
        emotion: 'mysterious',
      },
      {
        speaker: 'Veyth',
        text: '"△◇▼ THE FIRST SPEAKER... ▽△○ LIVES IN YOU... ◁▷◀ WE SENSE THE ECHO..." 😱',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'ask-first-speaker-veyth',
        text: '❓ "What do you know about the First Speaker?"',
        nextSceneId: 'veyth-revelation',
        factionEffect: { faction: 'echoborn', change: 10 },
      },
      {
        id: 'ask-about-veyth',
        text: '🤔 "What ARE you? How do you exist?"',
        nextSceneId: 'veyth-origin',
      },
      {
        id: 'demand-answers',
        text: '😤 "Enough riddles! Tell me plainly!"',
        nextSceneId: 'veyth-frustration',
        factionEffect: { faction: 'echoborn', change: -5 },
      },
    ],
  },
  {
    id: 'veyth-revelation',
    title: 'The First Speaker\'s Secret',
    location: 'lumisth-glacier',
    dialogue: [
      {
        speaker: 'Veyth',
        text: '"▽◇▼ THE FIRST SPEAKER... ○△▲ DID NOT DIE... ◁◀▷ BECAME ELLIDRIC ITSELF..." 🌌',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'Understanding floods your mind - the First Speaker didn\'t disappear. They MERGED with the language, becoming the living soul of Ellidric! 😱🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Veyth',
        text: '"△▽○ AND YOU... ▲◇◁ CARRY THEIR FRAGMENT... ▷◀△ YOU ARE THE NEW VESSEL..." 💜',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'Your memories - they weren\'t erased. They were REPLACED. With fragments of the First Speaker\'s consciousness! 🧠⚡',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'accept-truth',
        text: '⭐ "I... I can feel it. The truth resonates."',
        nextSceneId: 'echoborn-teaching',
        factionEffect: { faction: 'echoborn', change: 25 },
      },
      {
        id: 'deny-truth',
        text: '❌ "No! I\'m my own person, not some vessel!"',
        nextSceneId: 'veyth-patient',
      },
    ],
  },
  {
    id: 'veyth-origin',
    title: 'The Nature of Echoborn',
    location: 'lumisth-glacier',
    dialogue: [
      {
        speaker: 'Veyth',
        text: '"◇△▽ WE WERE... ▲○◁ ONCE HUMAN... ▷◀△ SPOKE TOO MUCH PURE ELLIDRIC..." 💀➡️✨',
        emotion: 'sad',
      },
      {
        speaker: 'Narrator',
        text: 'You understand: The Echoborn were once ordinary people who spoke so much Pure Ellidric that they TRANSFORMED. Language became their flesh. 😱',
        emotion: 'mysterious',
      },
      {
        speaker: 'Veyth',
        text: '"▽△○ NOT DEATH... ▲◇▷ TRANSCENDENCE... ◁◀△ WE ARE MORE NOW..." 🌟',
        emotion: 'mysterious',
      },
      {
        speaker: 'Veyth',
        text: '"○▽△ YOU COULD BE... ▲◁◇ ONE OF US... ▷△◀ IF YOU CHOOSE..." 🔮',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'intrigued-echoborn',
        text: '🤔 "Transcendence? Tell me more..."',
        nextSceneId: 'echoborn-teaching',
        factionEffect: { faction: 'echoborn', change: 15 },
      },
      {
        id: 'frightened',
        text: '😰 "That sounds terrifying. I like being human."',
        nextSceneId: 'veyth-understanding',
      },
    ],
  },
  {
    id: 'veyth-frustration',
    title: 'The Patience of Echoes',
    location: 'lumisth-glacier',
    dialogue: [
      {
        speaker: 'Veyth',
        text: '"▽◇△... ... ..." 😔',
        emotion: 'sad',
      },
      {
        speaker: 'Narrator',
        text: 'Veyth\'s form flickers with what might be disappointment. They try to speak more simply... 🗣️',
        emotion: 'neutral',
      },
      {
        speaker: 'Veyth',
        text: '"We... try... words... hard... for us... language IS us... speaking... different... is... pain..." 😣',
        emotion: 'sad',
      },
      {
        speaker: 'Narrator',
        text: 'You feel a twinge of guilt. For them, speaking "plainly" is like asking you to breathe water. 💭',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'apologize',
        text: '🙏 "I\'m sorry. Please, teach me to understand."',
        nextSceneId: 'echoborn-teaching',
        factionEffect: { faction: 'echoborn', change: 10 },
      },
      {
        id: 'leave-glacier',
        text: '🚶 "This is too strange. I need time to think."',
        nextSceneId: 'leave-echoborn',
      },
    ],
  },
  {
    id: 'veyth-patient',
    title: 'Echo\'s Patience',
    location: 'lumisth-glacier',
    dialogue: [
      {
        speaker: 'Veyth',
        text: '"◇▽△ DENIAL... ▲○◁ IS NATURAL... ▷◀△ TRUTH REMAINS..." 🌙',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'Veyth doesn\'t argue. They simply wait, patient as the glacier itself. Immortal beings have time. 🏔️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Veyth',
        text: '"△◇▽ WHEN READY... ▲▷○ WE WILL BE HERE... ◁◀△ THE GLACIER REMEMBERS..." 💙',
        emotion: 'neutral',
      },
    ],
    nextSceneId: 'echoborn-teaching',
  },
  {
    id: 'veyth-understanding',
    title: 'Respecting Humanity',
    location: 'lumisth-glacier',
    dialogue: [
      {
        speaker: 'Veyth',
        text: '"△◇▽ WE UNDERSTAND... ▲○◁ HUMANITY IS... PRECIOUS... ▷◀△ WE REMEMBER..." 💜',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'For a moment, you see something almost wistful in Veyth\'s flickering form. Do they miss being human? 🤔',
        emotion: 'sad',
      },
      {
        speaker: 'Veyth',
        text: '"◇▽△ WILL TEACH... ▲▷○ WITHOUT CHANGING... ◁◀△ YOUR CHOICE ALWAYS..." 🎓',
        emotion: 'neutral',
      },
    ],
    nextSceneId: 'echoborn-teaching',
  },
  {
    id: 'echoborn-teaching',
    title: 'Lessons in Pure Ellidric',
    location: 'lumisth-glacier',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'Veyth leads you deeper into the glacier, to a chamber of pure crystal. The walls sing with ancient glyphs. 🎵💎',
        emotion: 'mysterious',
      },
      {
        speaker: 'Veyth',
        text: '"△◇▽ HERE... ▲○◁ THE OLD WORDS SLEEP... ▷◀△ LISTEN WITH YOUR SOUL..." 🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'You close your eyes and FEEL the language. Not hear - FEEL. It vibrates in your bones, your blood, your thoughts... ✨🌊',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '✨ You have learned GLACIAL ELLIDRIC! The light-shift dialect reveals hidden meanings through perspective! ✨',
        emotion: 'happy',
      },
    ],
    choices: [
      {
        id: 'stay-with-echoborn',
        text: '🏔️ "I want to learn more. I\'ll stay."',
        nextSceneId: 'echoborn-initiate',
        factionEffect: { faction: 'echoborn', change: 30 },
      },
      {
        id: 'return-with-knowledge',
        text: '🔙 "Thank you. I must return to my allies."',
        nextSceneId: 'return-from-glacier',
      },
    ],
  },
  {
    id: 'echoborn-initiate',
    title: 'The Echoborn Path',
    location: 'lumisth-glacier',
    dialogue: [
      {
        speaker: 'Narrator',
        text: '✨ You have become an ECHOBORN INITIATE! ✨',
        emotion: 'happy',
      },
      {
        speaker: 'Veyth',
        text: '"△◇▽ WELCOME... ▲○◁ ECHO-SIBLING... ▷◀△ THE GLACIER IS HOME..." 🏠❄️',
        emotion: 'happy',
      },
      {
        speaker: 'Narrator',
        text: 'Among the crystalline halls, surrounded by beings of pure language, you begin to understand what you might become. 🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'But the outside world hasn\'t forgotten you. Both Institute and Clans seek the one who makes glyphs respond... 👀⚔️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '🎮 CHAPTER 2 ROUTE COMPLETE - Echoborn Path Initiated! More mysteries await... 🌟',
        emotion: 'happy',
      },
    ],
    nextSceneId: 'chapter-2-end',
  },
  {
    id: 'leave-echoborn',
    title: 'Departing the Glacier',
    location: 'lumisth-glacier',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You turn away from Veyth, the weight of their revelations too heavy to bear. 😔',
        emotion: 'sad',
      },
      {
        speaker: 'Veyth',
        text: '"△◇▽ THE ECHO... ▲○◁ WILL CALL AGAIN... ▷◀△ WE ARE PATIENT..." 🌙',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'As you leave, the glyphs on the glacier seem to watch you go. You can\'t shake the feeling this isn\'t goodbye. 👀',
        emotion: 'mysterious',
      },
    ],
    nextSceneId: 'return-from-glacier',
  },
  {
    id: 'return-from-glacier',
    title: 'Return to the World',
    location: 'snowveil-forest',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You make your way back through the snow, your mind buzzing with new knowledge. Glacial Ellidric thrums in your thoughts. 🧠✨',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'Whatever happens next, you are changed. The Echoborn have planted seeds of understanding in your soul. 🌱',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '🎮 CHAPTER 2 ROUTE COMPLETE - Echoborn Knowledge Gained! Your journey continues... 🌟',
        emotion: 'happy',
      },
    ],
    nextSceneId: 'chapter-2-end',
  },
  // ═══════════════════════════════════════════════════════════════
  // FACTION LOYALTY PATH 🤝
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'faction-mission',
    title: 'Proving Your Loyalty',
    location: 'unknown',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You decide to push aside the strange dreams. Your allies need you, and loyalty matters in Valdaren. 🤝',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'Word has spread of a dangerous Memory Drift forming near the Ancient Ruins. Both factions want it investigated. ⚠️🏚️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'This could be your chance to prove yourself - and discover more about your mysterious powers. 💪✨',
        emotion: 'neutral',
      },
    ],
    nextSceneId: 'ancient-ruins-approach',
  },
  // ═══════════════════════════════════════════════════════════════
  // DRIFT ZONE PATH 🌀
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'drift-zone-entrance',
    title: 'Into the Drift',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You follow your instincts toward the nearest Drift Zone - the Ancient Ruins where Ellidric was first carved into stone. 🏚️🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'The air here shimmers and distorts. Reality feels... thin. Memories that aren\'t yours flicker at the edge of vision. 🌀👻',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'A warning carved in Ellidric glows before you: "Here, the past bleeds into the present. Tread carefully, Speaker." ⚠️',
        emotion: 'mysterious',
      },
    ],
    nextSceneId: 'drift-zone-interior',
  },
  {
    id: 'ancient-ruins-approach',
    title: 'The Ancient Ruins',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'The Ancient Ruins loom before you - crumbling stone towers covered in the oldest Ellidric glyphs known to exist. 🏚️✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'This is where the First Speaker once stood. Where language first gained the power to shape reality. 📜🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'The Drift Zone pulses at the heart of the ruins - a swirling vortex of fragmented memories and unstable reality! 🌀',
        emotion: 'mysterious',
      },
    ],
    nextSceneId: 'drift-zone-interior',
  },
  {
    id: 'drift-zone-interior',
    title: 'Inside the Memory Drift',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You step into the Drift Zone and reality SHATTERS around you! Fragments of memories swirl like snow in a blizzard! 🌀❄️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'You see... A burning library 🔥 A child learning their first glyph 📖 A figure in white speaking the first Words... 👻',
        emotion: 'mysterious',
      },
      {
        speaker: '???',
        text: '"You should not be here, little echo. This place is for the dead and the divine." 💀✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'A spectral figure emerges from the swirling memories - the ghost of someone long dead, or perhaps something that was never alive! 👻',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'speak-ellidric-ghost',
        text: '🔮 Speak to the ghost in Ellidric',
        nextSceneId: 'ghost-responds',
        factionEffect: { faction: 'echoborn', change: 10 },
      },
      {
        id: 'demand-identity',
        text: '❓ "Who are you? What is this place?"',
        nextSceneId: 'ghost-explains',
      },
      {
        id: 'flee-drift',
        text: '🏃 Try to escape the Drift Zone!',
        nextSceneId: 'drift-escape-attempt',
      },
    ],
  },
  {
    id: 'ghost-responds',
    title: 'The Spirit Speaks',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You speak a phrase in Ellidric - words that feel right, though you\'ve never learned them. 🔮✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Memory Spirit',
        text: '"Ah... you speak the True Tongue. Then you are either blessed or cursed beyond measure." 😱',
        emotion: 'mysterious',
      },
      {
        speaker: 'Memory Spirit',
        text: '"I am Meren, Archivist of the First Age. Or rather, I am her memory, trapped when the Drift consumed my flesh." 👻📜',
        emotion: 'sad',
      },
      {
        speaker: 'Memory Spirit',
        text: '"You carry the First Speaker\'s resonance. I felt it the moment you entered. They chose you... or YOU chose to become them." 🤔',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'ask-about-resonance',
        text: '🎵 "What is this resonance? What does it mean?"',
        nextSceneId: 'resonance-explained',
      },
      {
        id: 'ask-escape-drift',
        text: '🚪 "How do I leave this place?"',
        nextSceneId: 'exit-knowledge',
      },
    ],
  },
  {
    id: 'ghost-explains',
    title: 'Meren\'s Tale',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Memory Spirit',
        text: '"I am... was... Archivist Meren. I died here centuries ago, when the First Great Drift consumed these ruins." 💀📚',
        emotion: 'sad',
      },
      {
        speaker: 'Memory Spirit',
        text: '"This place is a Memory Drift Zone - where reality and recollection become one. The past is as real as the present here." 🌀',
        emotion: 'mysterious',
      },
      {
        speaker: 'Memory Spirit',
        text: '"But you... you glow with power I have not seen since the First Speaker walked these halls. What ARE you?" 🤔✨',
        emotion: 'mysterious',
      },
    ],
    choices: [
      {
        id: 'share-story',
        text: '📖 Share your story with Meren',
        nextSceneId: 'meren-listens',
      },
      {
        id: 'ask-about-first-speaker-meren',
        text: '👑 "Tell me about the First Speaker."',
        nextSceneId: 'first-speaker-history',
      },
    ],
  },
  {
    id: 'drift-escape-attempt',
    title: 'Trapped in Memory',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You turn to run, but the Drift Zone has no edges! Every direction leads deeper into swirling memories! 😱🌀',
        emotion: 'mysterious',
      },
      {
        speaker: 'Memory Spirit',
        text: '"Running is futile, young one. The Drift does not release those who enter uninvited." 🚫',
        emotion: 'neutral',
      },
      {
        speaker: 'Memory Spirit',
        text: '"But... your resonance might be the key. Speak to the memories. Command them. You have the power, if you dare use it." 💪🔮',
        emotion: 'mysterious',
      },
    ],
    nextSceneId: 'forced-to-speak',
  },
  {
    id: 'forced-to-speak',
    title: 'Command the Drift',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'With no other choice, you reach deep within and speak words that bubble up from somewhere ancient... 🗣️✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '"◇▽△ STILL! ▲○◁ CALM! ▷◀△ I COMMAND!" 💫',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'The swirling chaos FREEZES! Memory fragments hang motionless like snowflakes suspended in time! 🌨️⏸️',
        emotion: 'happy',
      },
      {
        speaker: 'Memory Spirit',
        text: '"By the First Words... you truly ARE them. Or will be. Or were. Time has little meaning here." 😱',
        emotion: 'mysterious',
      },
    ],
    nextSceneId: 'resonance-explained',
  },
  {
    id: 'resonance-explained',
    title: 'The Truth of Resonance',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Memory Spirit',
        text: '"Resonance is the echo of the First Speaker\'s soul, scattered across time when they merged with Ellidric." 🎵🌌',
        emotion: 'mysterious',
      },
      {
        speaker: 'Memory Spirit',
        text: '"Fragments of their consciousness awaken in certain vessels across the ages. You are one such vessel." 🧠✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Memory Spirit',
        text: '"This means you can shape reality itself - but beware. Each word you speak in True Ellidric CHANGES you. Use too much, and you will become the language, like the Echoborn." ⚠️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '✨ You have gained a MEMORY FRAGMENT: "The First Speaker\'s Resonance" ✨',
        emotion: 'happy',
      },
    ],
    nextSceneId: 'drift-zone-choice',
  },
  {
    id: 'meren-listens',
    title: 'Sharing Your Tale',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You tell Meren everything - waking with no memories, the glyphs responding to your touch, the factions pursuing you. 📖',
        emotion: 'neutral',
      },
      {
        speaker: 'Memory Spirit',
        text: '"Memory loss upon awakening... glyphs recognizing you... this is exactly how the First Speaker began their journey." 🤔',
        emotion: 'mysterious',
      },
      {
        speaker: 'Memory Spirit',
        text: '"I was there, you know. I watched them rise from nothing to reshape our entire world. And now... I watch you." 👁️✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Memory Spirit',
        text: '"Whether you are reincarnation, successor, or something new entirely - you WILL change Valdaren. For better or worse." 🌍',
        emotion: 'mysterious',
      },
    ],
    nextSceneId: 'drift-zone-choice',
  },
  {
    id: 'first-speaker-history',
    title: 'History of the First Speaker',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Memory Spirit',
        text: '"The First Speaker was born ordinary - a child of the Fringe who heard words in the wind that others could not." 🌬️👶',
        emotion: 'neutral',
      },
      {
        speaker: 'Memory Spirit',
        text: '"They learned to speak back, to shape those words into power. They created Memory Engines, founded what became the Institute, united the Clans." 🏛️🌲',
        emotion: 'neutral',
      },
      {
        speaker: 'Memory Spirit',
        text: '"But the language demanded a price. To wield ultimate power, they had to BECOME the power. They merged with Ellidric itself." 🔮💀',
        emotion: 'sad',
      },
      {
        speaker: 'Memory Spirit',
        text: '"Since then, their consciousness has echoed through time, seeking vessels to continue their work. Vessels like YOU." 👤✨',
        emotion: 'mysterious',
      },
    ],
    nextSceneId: 'drift-zone-choice',
  },
  {
    id: 'exit-knowledge',
    title: 'The Way Out',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Memory Spirit',
        text: '"To leave, you must speak an Exit Phrase in True Ellidric. But doing so will bind you more tightly to the language." ⚠️🚪',
        emotion: 'neutral',
      },
      {
        speaker: 'Memory Spirit',
        text: '"Alternatively, wait for the Drift to naturally stabilize. It may take hours... or days. Time flows strangely here." ⏰🌀',
        emotion: 'neutral',
      },
      {
        speaker: 'Memory Spirit',
        text: '"Or... let me teach you something. A way to carry a piece of this place with you, wherever you go." 🎁✨',
        emotion: 'mysterious',
      },
    ],
    nextSceneId: 'drift-zone-choice',
  },
  {
    id: 'drift-zone-choice',
    title: 'Crossroads in the Drift',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Memory Spirit',
        text: '"You stand at a crossroads, vessel. What you choose here will shape your destiny." 🔀',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'The Drift Zone swirls around you, full of possibility. What will you do? 🤔',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'learn-pure-ellidric',
        text: '📖 "Teach me Pure Ellidric, whatever the cost."',
        nextSceneId: 'pure-ellidric-lesson',
        factionEffect: { faction: 'echoborn', change: 20 },
      },
      {
        id: 'stabilize-drift',
        text: '⚖️ "Help me stabilize this Drift Zone."',
        nextSceneId: 'stabilize-attempt',
      },
      {
        id: 'absorb-memories',
        text: '🧠 "I want to absorb more memories from this place."',
        nextSceneId: 'memory-absorption',
      },
    ],
  },
  {
    id: 'pure-ellidric-lesson',
    title: 'The Forbidden Dialect',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Memory Spirit',
        text: '"Pure Ellidric is dangerous. It is the original tongue, closest to the First Speaker\'s truth. Are you certain?" 💀🔮',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'You nod. Meren begins to speak, and the words burn themselves into your mind like brands of cold fire! 🔥❄️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'For a moment, you feel yourself dissolving, becoming pure language... but you pull back, clutching your humanity. 😱',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '✨ You have learned PURE ELLIDRIC! The ancient dialect of the First Speaker is now available! ✨',
        emotion: 'happy',
      },
      {
        speaker: 'Memory Spirit',
        text: '"You held on. Impressive. Most who learn Pure Ellidric lose themselves entirely. Guard your humanity well, vessel." 💪',
        emotion: 'happy',
      },
    ],
    nextSceneId: 'drift-zone-exit',
  },
  {
    id: 'stabilize-attempt',
    title: 'Calming the Storm',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Memory Spirit',
        text: '"To stabilize a Drift Zone, you must speak words of order and calm. Let me guide you..." 🧘',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'Together, you and Meren speak ancient phrases. The swirling chaos begins to slow, memories settling like dust. 🌀➡️✨',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'The Drift Zone doesn\'t vanish, but it becomes... stable. A place of preserved history rather than dangerous chaos. 📚🏛️',
        emotion: 'happy',
      },
      {
        speaker: 'Narrator',
        text: '✨ DRIFT STABILITY INCREASED! The Institute will notice this act of order. ✨',
        emotion: 'happy',
      },
    ],
    choices: [
      {
        id: 'continue-to-exit',
        text: '🚪 Leave the stabilized Drift Zone',
        nextSceneId: 'drift-zone-exit',
        factionEffect: { faction: 'institute', change: 15 },
      },
    ],
  },
  {
    id: 'memory-absorption',
    title: 'Drinking Memories',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Memory Spirit',
        text: '"Dangerous, but powerful. Open yourself to the Drift, and let the memories flow into you..." 🧠🌊',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'You open your mind and MEMORIES FLOOD IN! A thousand lives, a million moments, all at once! 🤯',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'You see: The First Speaker\'s childhood. The founding of the Institute. Wars fought with words. Loves lost to time. 📜💔',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '✨ You have gained multiple MEMORY FRAGMENTS! Your understanding of Valdaren\'s history deepens! ✨',
        emotion: 'happy',
      },
      {
        speaker: 'Memory Spirit',
        text: '"You absorbed more than most could survive. The Clans will sense this - you now carry their ancestors\' memories." 🌲👻',
        emotion: 'neutral',
      },
    ],
    choices: [
      {
        id: 'exit-with-memories',
        text: '🚪 Leave with your new knowledge',
        nextSceneId: 'drift-zone-exit',
        factionEffect: { faction: 'clans', change: 15 },
      },
    ],
  },
  {
    id: 'drift-zone-exit',
    title: 'Emerging from the Drift',
    location: 'ancient-ruins',
    dialogue: [
      {
        speaker: 'Narrator',
        text: 'You step out of the Drift Zone, blinking in the pale sunlight. The Ancient Ruins stand silent around you. 🏚️☀️',
        emotion: 'neutral',
      },
      {
        speaker: 'Narrator',
        text: 'You are changed. You can feel it - new knowledge humming in your mind, new power tingling in your tongue. 🔮✨',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'Whatever you were before entering... you are more now. For better or worse. 🌟',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: '🎮 CHAPTER 2 ROUTE COMPLETE - Drift Zone Explored! The mysteries deepen... 🌟',
        emotion: 'happy',
      },
    ],
    nextSceneId: 'chapter-2-end',
  },
  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 2 END 🎬
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'chapter-2-end',
    title: 'The Echoes Grow Stronger',
    location: 'unknown',
    dialogue: [
      {
        speaker: 'Narrator',
        text: '🌟 CHAPTER TWO: THE DRIFT - Complete! 🌟',
        emotion: 'happy',
      },
      {
        speaker: 'Narrator',
        text: 'You have delved deeper into the mysteries of Valdaren. The Echoborn, the First Speaker\'s legacy, the nature of the Drift itself... 🔮📜',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'Your power grows with each dialect learned, each memory absorbed. But so does the attention of those who would use you... 👀⚔️',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'The Institute watches. The Clans whisper. The Echoborn wait. And somewhere in the depths of Ellidric itself, something ancient stirs... 🌌',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'Your story continues. The Echoes of Ellidra have only begun to reveal their secrets. Thank you for playing! 💜🎮',
        emotion: 'happy',
      },
    ],
    choices: [
      {
        id: 'restart-from-chapter-2-end',
        text: '🔄 Start a New Journey',
        nextSceneId: 'prologue-awakening',
      },
      {
        id: 'replay-chapter-2',
        text: '🔙 Replay Chapter 2',
        nextSceneId: 'chapter-2-intro',
      },
    ],
  },
];

// Initial game state
import type { GameState } from '../types';

export const initialGameState: GameState = {
  currentSceneId: 'prologue-awakening',
  playerName: 'Wanderer',
  languagesKnown: ['english'],
  dialectsKnown: [],
  factionReputation: {
    institute: 0,
    clans: 0,
    echoborn: 0,
    neutral: 0,
  },
  glyphsCollected: [],
  memoryFragments: [],
  driftStability: 50,
  completedScenes: [],
};
