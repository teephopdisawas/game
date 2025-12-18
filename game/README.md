# 🔮 Echoes of Ellidra - Visual Novel Game ✨

A mystical visual novel where **Language Shapes Reality**! Built with Vue.js 3, TypeScript, and Vite. 🎮💜

## 🎯 About

Explore the world of Valdaren, master the ancient Ellidric language, collect magical glyphs, and shape your destiny through meaningful choices. This single-page visual novel features:

- 🏛️ **Dynamic Faction System** - Build relationships with the Institute, Clans, and Echoborn
- 🔤 **Language Mechanics** - Learn different languages to unlock dialogue options
- 💾 **Auto-Save System** - Your progress is automatically saved in localStorage
- 🌀 **Memory Drift Zones** - Navigate through mystical locations
- 📖 **Rich Story** - Multiple dialogue paths and meaningful choices
- ✨ **Beautiful UI** - Animated backgrounds with floating glyphs

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to start your adventure! 🎮

## 📦 Tech Stack

- **Framework**: Vue.js 3.4 with Composition API
- **Build Tool**: Vite 5.2
- **TypeScript**: 5.4
- **Styling**: CSS with custom animations
- **State Management**: Vue Composables + localStorage
- **Deployment**: Optimized for Vercel/Netlify

## 🎨 Features

### Game Mechanics
- ✅ Typewriter dialogue effect
- ✅ Multiple choice decision system
- ✅ Language-gated dialogue options
- ✅ Faction reputation tracking
- ✅ Progress bar for dialogue sequences
- ✅ Save/Load game functionality
- ✅ Drift stability meter

### Technical Features
- ⚡️ Fast dev server with Vite HMR
- 🎯 Static generation for instant loads
- 🔒 Type-safe with TypeScript
- 💨 Optimized production builds
- 📱 Responsive design
- 🖼️ CSS animations and transitions

## 📁 Project Structure

```
game/
├── index.html              # Entry HTML file
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
├── src/
│   ├── main.ts             # Vue app entry
│   ├── App.vue             # Main game component
│   ├── components/         # Vue components
│   │   ├── Background.vue
│   │   ├── ChoiceMenu.vue
│   │   ├── DialogueBox.vue
│   │   ├── StatusBar.vue
│   │   ├── FactionBadge.vue
│   │   └── TitleScreen.vue
│   ├── composables/        # Vue composables
│   │   └── useGameState.ts
│   ├── data/               # Game story and data
│   │   └── story.ts
│   ├── types/              # TypeScript definitions
│   │   └── game.ts
│   └── index.css           # Global styles
└── public/                 # Static assets
    └── manifest.json       # PWA manifest
```

## 🎮 How to Play

1. Click **"⚔️ New Adventure"** to start
2. Read the dialogue by clicking through
3. Make choices that affect faction relationships
4. Unlock new dialogue options by learning languages
5. Your progress is auto-saved!
6. Use **💾 Save** button to manually save
7. Use **🔄 Reset** to start fresh (saves your progress first!)

## 🌟 Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy dist folder to Netlify
```

### Docker
The project can be containerized for deployment anywhere:
```bash
# Build production files
npm run build

# Serve with any static file server
```

## 🛠️ Development

```bash
# Run dev server with HMR
npm run dev

# Type checking
npm run build

# Preview production build
npm run preview
```

## 📜 License

This is a game project built for fun and learning! Feel free to explore and learn from it! 💜

## 🙌 Credits

Built with Vue.js 3 + TypeScript + Vite by Gen Z devs for Gen Z gamers! 💯🔥

---

**Ready to dive into the world of Valdaren?** Start your journey now! 🔮✨
