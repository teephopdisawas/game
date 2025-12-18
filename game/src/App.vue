<!-- 🎮 Echoes of Ellidra - Main App Component ✨ -->
<template>
  <TitleScreen 
    v-if="screen === 'title'"
    :has-save="hasSave"
    @start="handleNewGame"
    @continue="handleContinue"
  />
  
  <div v-else class="game-container">
    <Background :location="currentScene.location" />
    
    <StatusBar 
      :game-state="gameState"
      :scene-name="currentScene.title"
      @save="saveGame"
      @reset="handleReset"
    />

    <main class="game-main">
      <DialogueBox 
        v-if="!showChoices"
        :dialogue="currentScene.dialogue"
        @complete="handleDialogueComplete"
      />
      
      <ChoiceMenu 
        v-else-if="currentScene.choices"
        :choices="currentScene.choices"
        :languages-known="gameState.languagesKnown"
        @select="handleChoiceSelect"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGameState } from './composables/useGameState'
import type { DialogueChoice } from './types'
import DialogueBox from './components/DialogueBox.vue'
import ChoiceMenu from './components/ChoiceMenu.vue'
import StatusBar from './components/StatusBar.vue'
import Background from './components/Background.vue'
import TitleScreen from './components/TitleScreen.vue'

type GameScreen = 'title' | 'playing'

const screen = ref<GameScreen>('title')
const showChoices = ref(false)

const {
  gameState,
  currentScene,
  goToScene,
  updateFaction,
  saveGame,
  resetGame,
  loadGame,
} = useGameState()

// Check if there's a saved game (client-side only!)
const hasSave = computed(() => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('echoes-of-ellidra-save') !== null
})

// Handle starting a new game
const handleNewGame = () => {
  resetGame()
  screen.value = 'playing'
  showChoices.value = false
}

// Handle continuing saved game
const handleContinue = () => {
  loadGame()
  screen.value = 'playing'
  showChoices.value = false
}

// Handle dialogue completion
const handleDialogueComplete = () => {
  if (currentScene.value.choices && currentScene.value.choices.length > 0) {
    showChoices.value = true
  } else if (currentScene.value.nextSceneId) {
    goToScene(currentScene.value.nextSceneId)
  }
}

// Handle choice selection
const handleChoiceSelect = (choice: DialogueChoice) => {
  if (choice.factionEffect) {
    updateFaction(choice.factionEffect.faction, choice.factionEffect.change)
  }
  showChoices.value = false
  goToScene(choice.nextSceneId)
}

// Handle reset with confirmation
const handleReset = () => {
  if (window.confirm('🔄 Start a new adventure? Your current progress will be saved!')) {
    saveGame()
    handleNewGame()
  }
}
</script>

<style>
/* 🎮 Main App Styles for Echoes of Ellidra ✨ */

.game-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.game-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 60px; /* Account for status bar */
}
</style>
