# 🔮 Echoes of Ellidra - Visual Novel Game ✨

A mystical visual novel where **Language Shapes Reality**! Built with Next.js 15, React 19, and TypeScript. 🎮💜

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

# Start production server
npm run start
```

Visit `http://localhost:3000` to start your adventure! 🎮

## 📦 Tech Stack

- **Framework**: Next.js 15.5.7 with App Router
- **React**: 19.2.1
- **TypeScript**: 5.9.3
- **Styling**: CSS Modules with custom animations
- **State Management**: React Hooks + localStorage
- **Deployment**: Optimized for Vercel

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
- ⚡️ Server-side rendering with Next.js
- 🎯 Static generation for instant loads
- 🔒 Security headers
- 💨 Compression enabled
- 📱 PWA-ready with manifest
- 🖼️ Optimized images (AVIF & WebP)
- 🚀 Standalone output for Vercel

## 📁 Project Structure

```
game/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main game page
├── src/
│   ├── components/        # Game UI components
│   │   ├── Background.tsx
│   │   ├── ChoiceMenu.tsx
│   │   ├── DialogueBox.tsx
│   │   ├── StatusBar.tsx
│   │   └── TitleScreen.tsx
│   ├── hooks/            # Custom React hooks
│   │   └── useGameState.ts
│   ├── data/             # Game story and data
│   │   └── story.ts
│   ├── types/            # TypeScript definitions
│   │   └── game.ts
│   ├── App.tsx           # Main game component
│   ├── App.css           # App styling
│   └── index.css         # Global styles
├── public/               # Static assets
│   └── manifest.json     # PWA manifest
├── next.config.ts        # Next.js configuration
└── tsconfig.json         # TypeScript config
```

## 🔄 Migration from Vite

This project was successfully migrated from Vite to Next.js 15! See [MIGRATION.md](./MIGRATION.md) for details.

Key changes:
- ✅ App Router structure
- ✅ Client components with 'use client' directive
- ✅ SSR-compatible localStorage handling
- ✅ Vercel-optimized configuration

## 🎮 How to Play

1. Click **"⚔️ New Adventure"** to start
2. Read the dialogue by clicking through
3. Make choices that affect faction relationships
4. Unlock new dialogue options by learning languages
5. Your progress is auto-saved!
6. Use **💾 Save** button to manually save
7. Use **🔄 Reset** to start fresh (saves your progress first!)

## 🌟 Deployment

### Vercel (Recommended)
This project is optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments! 🚀

### Other Platforms
The standalone output mode makes it easy to deploy anywhere:
- Build: `npm run build`
- Start: `npm run start`
- Runs on port 3000 by default

## 🛠️ Development

```bash
# Run dev server with Turbopack (fast!)
npm run dev

# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Build for production
npm run build
```

## 📜 License

This is a game project built for fun and learning! Feel free to explore and learn from it! 💜

## 🙌 Credits

Built with Next.js 15 + React 19 + TypeScript by Gen Z devs for Gen Z gamers! 💯🔥

---

**Ready to dive into the world of Valdaren?** Start your journey now! 🔮✨
