// 🎮 Game State Composable for Echoes of Ellidra 🔮✨
import { ref, computed } from 'vue'
import type { GameState, FactionType, LanguageType, EllidricDialect } from '../types'
import { scenes, initialGameState } from '../data'

const STORAGE_KEY = 'echoes-of-ellidra-save'

// Create initial state from localStorage or default
const createInitialState = (): GameState => {
  if (typeof window === 'undefined') {
    return { ...initialGameState }
  }
  
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      return JSON.parse(saved)
    } catch {
      return { ...initialGameState }
    }
  }
  return { ...initialGameState }
}

// Singleton state - shared across all components that use this composable
const gameState = ref<GameState>(createInitialState())
const isLoading = ref(false)

export function useGameState() {
  // Get current scene
  const currentScene = computed(() => {
    return scenes.find(s => s.id === gameState.value.currentSceneId) || scenes[0]
  })

  // Navigate to a new scene
  const goToScene = (sceneId: string) => {
    const prev = gameState.value
    const newState: GameState = {
      ...prev,
      currentSceneId: sceneId,
      completedScenes: prev.completedScenes.includes(prev.currentSceneId)
        ? prev.completedScenes
        : [...prev.completedScenes, prev.currentSceneId],
    }
    gameState.value = newState
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
  }

  // Update faction reputation
  const updateFaction = (faction: FactionType, change: number) => {
    const prev = gameState.value
    const newRep = Math.max(-100, Math.min(100, prev.factionReputation[faction] + change))
    const newState: GameState = {
      ...prev,
      factionReputation: {
        ...prev.factionReputation,
        [faction]: newRep,
      },
    }
    gameState.value = newState
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
  }

  // Learn a new language
  const learnLanguage = (language: LanguageType) => {
    const prev = gameState.value
    if (prev.languagesKnown.includes(language)) return
    const newState: GameState = {
      ...prev,
      languagesKnown: [...prev.languagesKnown, language],
    }
    gameState.value = newState
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
  }

  // Learn a new Ellidric dialect
  const learnDialect = (dialect: EllidricDialect) => {
    const prev = gameState.value
    if (prev.dialectsKnown.includes(dialect)) return
    const newState: GameState = {
      ...prev,
      dialectsKnown: [...prev.dialectsKnown, dialect],
    }
    gameState.value = newState
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
  }

  // Collect a glyph
  const collectGlyph = (glyph: string) => {
    const prev = gameState.value
    if (prev.glyphsCollected.includes(glyph)) return
    const newState: GameState = {
      ...prev,
      glyphsCollected: [...prev.glyphsCollected, glyph],
    }
    gameState.value = newState
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
  }

  // Save game
  const saveGame = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState.value))
  }

  // Load game
  const loadGame = () => {
    isLoading.value = true
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        gameState.value = parsed
      } catch (e) {
        console.error('Failed to load save:', e)
      }
    }
    isLoading.value = false
  }

  // Reset game
  const resetGame = () => {
    localStorage.removeItem(STORAGE_KEY)
    gameState.value = { ...initialGameState }
  }

  // Set player name
  const setPlayerName = (name: string) => {
    const newState = { ...gameState.value, playerName: name }
    gameState.value = newState
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
  }

  return {
    gameState,
    currentScene,
    isLoading,
    goToScene,
    updateFaction,
    learnLanguage,
    learnDialect,
    collectGlyph,
    saveGame,
    loadGame,
    resetGame,
    setPlayerName,
  }
}
