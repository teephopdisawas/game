# 🔮 Echoes of Ellidra ✨

> **A visual novel where language shapes reality!** Wake up in the frost-bound realm of Valdaren with no memory, discover you're the legendary First Speaker, and choose your destiny among warring factions! 🎮💜

![Status](https://img.shields.io/badge/status-active-success) ![Built With](https://img.shields.io/badge/built_with-react_typescript_vite-blue) ![Vibes](https://img.shields.io/badge/vibes-absolutely_legendary-gold)

## 🎮 Play Now!

```bash
cd game
npm install    # Install dependencies (~10 seconds) 📦
npm run dev    # Start dev server 🚀
# Visit http://localhost:5173 and begin your journey! ✨
```

## 🌟 Features

- **🏛️ Faction System** - Choose between the Institute, the Clans, or walk your own path
- **🔤 Ellidric Language** - Master the mystical tongue that reshapes reality
- **💬 Branching Dialogue** - Your choices have real consequences
- **🌀 Memory Drift** - Explore unstable zones where memories blur
- **💾 Auto-Save** - Never lose your progress
- **✨ Beautiful UI** - Smooth animations and mystical atmosphere

## 📖 The Story

You wake in the frost-wrapped realm of **Valdaren** with no memory. Ancient **Ellidric** glyphs respond to your touch like they know you're the main character. Three factions war over control of this mystical language:

- **🏛️ Institute of Lingua Arcanum** - They want to codify and control Ellidric
- **🌲 Clans of the Whispering Woods** - They believe language must be wild and free  
- **👻 The Echoborn** - Mysterious beings who claim to BE the language itself

Your choices will reshape Valdaren itself. What kind of First Speaker will you become?

## 🛠️ Development

```bash
# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

## 🐳 Docker Deployment

```bash
# Build and run production container
docker compose build web
docker compose up web
# Visit http://localhost:3000

# Development with hot reload
docker compose --profile dev up web-dev
```

## 🌐 Deploy

- **Vercel**: Automatic via `vercel.json`
- **Netlify**: Configure via `netlify.toml`
- **Docker**: Use `docker-compose.yml`

## 📁 Project Structure

```
game/                    # Main game application
├── src/
│   ├── components/     # React UI components
│   ├── data/          # Story and game data
│   ├── hooks/         # Custom React hooks
│   └── types/         # TypeScript definitions
├── public/            # Static assets
└── dist/              # Production build

world_data/            # Game lore and world building
├── lore.md           # World history and Ellidric language
├── characters.md     # Character profiles
├── factions.md       # Faction details
└── mechanics.md      # Game systems

docs/                  # Deployment tutorials
Ellidric/             # Language reference
```

## 🎭 Tech Stack

- **⚛️ React 19** - UI framework
- **⚡ Vite 7** - Lightning-fast builds
- **📘 TypeScript** - Type safety
- **🎨 CSS** - Beautiful styling

## 📚 Lore Resources

Check out the `world_data/` directory for deep dives into:
- The history of Valdaren
- Ellidric language mechanics
- Faction philosophies
- Character backgrounds

---

**✨ May your choices reshape Valdaren! ✨**

*Built with 💜 by storytellers who believe games can be literature*
