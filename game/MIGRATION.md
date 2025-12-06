# 🔥 Next.js 15 Migration Complete! ✨

Yo fam! This visual novel game has been successfully migrated from Vite to Next.js 15! 🎮💜

## 🎯 What Changed

### Framework Migration
- ✅ **Vite → Next.js 15** with App Router
- ✅ **React 19** - Already had it, kept it! 💯
- ✅ **TypeScript** - Still rocking the type safety!
- ✅ **Standalone output** - Optimized for Vercel deployment

### Structure Changes
- 📁 Added `app/` directory with App Router structure
  - `app/layout.tsx` - Root layout with metadata
  - `app/page.tsx` - Main game page (client component)
- 🎨 All game components, hooks, and logic stayed in `src/` - NO CHANGES! 🙌
- 🔧 Created `next.config.ts` with Vercel optimizations
- 📦 Updated `package.json` with Next.js scripts

### Client-Side Adaptations
- 🔒 Added `'use client'` directive to components using hooks:
  - `src/App.tsx`
  - `src/components/DialogueBox.tsx`
  - `src/components/Background.tsx`
  - `src/hooks/useGameState.ts`
- 💾 Fixed localStorage to work with SSR (added `typeof window` checks)
- ✨ Updated title screen credits to show Next.js 15!

### Configuration Files
- ✅ `next.config.ts` - Next.js config with:
  - Standalone output for Vercel
  - Image optimization
  - Security headers
  - Compression enabled
- ✅ `.eslintrc.json` - Next.js ESLint config
- ✅ `tsconfig.json` - Updated for Next.js
- ✅ `.gitignore` - Added Next.js specific ignores
- ✅ `public/manifest.json` - PWA manifest for mobile

## 🚀 How to Use

### Development
```bash
npm run dev
# Runs on http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## 📦 What Stayed the Same

ALL the game logic, components, and data stayed EXACTLY the same! 🎉
- ✅ Game state management with localStorage
- ✅ All game components (DialogueBox, ChoiceMenu, StatusBar, etc.)
- ✅ Story data and types
- ✅ Custom hooks
- ✅ All CSS styling
- ✅ Game saves still work perfectly!

## 🔮 Vercel Deployment Features

This setup is OPTIMIZED for Vercel! 💜
- ⚡️ Standalone output for minimal bundle size
- 🖼️ Image optimization with AVIF & WebP
- 🔒 Security headers built-in
- 💨 Compression enabled
- 🎯 Static generation for instant loads
- 📱 PWA-ready with manifest

## 🎮 Tech Stack

- **Framework**: Next.js 15.5.7
- **React**: 19.2.1
- **TypeScript**: 5.9.3
- **Node**: 18+ required

## 🙌 Migration Notes

The migration was super clean! Since the game is a single-page application with no routing, we just:
1. Wrapped everything in Next.js App Router
2. Made components client-side where needed
3. Fixed localStorage for SSR
4. Configured for optimal Vercel deployment

Everything else stayed the same - the game logic, save system, and all components work EXACTLY as before! No cap! 🧢✨

Built with love by Gen Z devs for Gen Z gamers! 💯🔥
