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
  // CHAPTER END 🎬
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'end-chapter-one',
    title: 'To Be Continued...',
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
        text: 'What secrets does the First Speaker hold? What is the true nature of the Drift? And who are YOU really? 🤔💭',
        emotion: 'mysterious',
      },
      {
        speaker: 'Narrator',
        text: 'The Echoes of Ellidra will reveal all... in time. Thank you for playing! 💜🎮',
        emotion: 'happy',
      },
    ],
    choices: [
      {
        id: 'restart',
        text: '🔄 Start a New Journey',
        nextSceneId: 'prologue-awakening',
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
