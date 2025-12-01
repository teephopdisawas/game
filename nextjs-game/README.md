# 🔮 Valdaren: Echoes of Ellidra - Next.js Edition

> **A mystical visual novel where language shapes reality** ✨

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## 🎮 Quick Start

```bash
cd nextjs-game
npm install
npm run dev
# Visit http://localhost:3000
```

## 🌟 Features

### Core Game Systems
- **📖 Interactive Story System** - Branching dialogue with consequences
- **🗺️ World Map** - 6 explorable regions of Valdaren
- **👥 Character System** - 8+ characters with trust mechanics
- **⚔️ Faction System** - 4 factions with reputation tracking
- **🔤 Language System** - 5 Ellidric dialects with mastery progression
- **📜 Quest System** - 10+ quests across 4 story acts

### Technical Features
- **Next.js App Router** - Modern React architecture
- **TypeScript** - Full type safety
- **Tailwind CSS** - Responsive, dark-themed UI
- **LocalStorage Persistence** - Auto-save game state
- **Client-Side State Management** - React Context + Hooks

## 📁 Project Structure

```
nextjs-game/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home page
│   │   ├── story/           # Story/dialogue page
│   │   ├── map/             # World map page
│   │   ├── characters/      # Characters page
│   │   ├── factions/        # Factions page
│   │   ├── language/        # Language system page
│   │   └── quests/          # Quest journal page
│   ├── components/          # React components
│   │   ├── Navigation.tsx
│   │   ├── DialogueBox.tsx
│   │   ├── CharacterCard.tsx
│   │   ├── FactionCard.tsx
│   │   ├── RegionCard.tsx
│   │   └── QuestCard.tsx
│   ├── data/                # Game data (lore-based)
│   │   ├── characters.ts
│   │   ├── factions.ts
│   │   ├── regions.ts
│   │   ├── languages.ts
│   │   ├── quests.ts
│   │   └── story.ts
│   ├── hooks/               # Custom React hooks
│   │   └── useGameState.ts
│   ├── lib/                 # Utilities
│   │   └── GameContext.tsx
│   └── types/               # TypeScript definitions
│       └── game.ts
└── world_data/              # Source lore documents
```

## 🌍 The World of Valdaren

A frost-bound land where **Ellidric** — the language of memory — holds power to:
- Unlock buried memories
- Alter perception of reality
- Change loyalty, personality, or identity

### Factions
- **🏛️ Institute of Lingua Arcanum** - Codify and control Ellidric
- **🌲 Clans of the Whispering Woods** - Protect oral traditions
- **🌀 The Echoborn** - Living manifestations of glyphs
- **⚖️ Neutral Territories** - Balance between powers

### Regions
- **Ravengard** - Institute capital
- **Whispering Woods** - Clan heartland
- **Ancient Ruins** - Birthplace of Ellidric
- **Snowveil Forest** - Clan borderlands
- **Lumisth Glacier** - Frozen Fringe
- **Lake Eirysa** - Neutral diplomatic waters

## 🛠️ Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run start    # Start production server
```

## 📚 Lore Integration

This game preserves all lore from the original `world_data/` directory:
- `lore.md` - Setting, history, Ellidric language
- `characters.md` - Character profiles and hooks
- `factions.md` - Political groups and beliefs
- `mechanics.md` - Gameplay systems

---

*May your choices reshape Valdaren, and may Valdaren reshape your understanding of what interactive storytelling can achieve!* 🔮✨
