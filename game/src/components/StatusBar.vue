<!-- 📊 Status Bar Component ✨ -->
<template>
  <div class="status-bar">
    <div class="status-left">
      <span class="location-badge">
        📍 {{ formatLocation(sceneName) }}
      </span>
      <span 
        class="stability-badge" 
        :style="{ 
          color: gameState.driftStability > 70 ? '#22c55e' : gameState.driftStability > 30 ? '#f59e0b' : '#ef4444' 
        }"
      >
        🌀 Drift: {{ gameState.driftStability }}%
      </span>
    </div>
    
    <div class="status-center">
      <div class="factions-display">
        <FactionBadge faction="institute" :value="gameState.factionReputation.institute" icon="🏛️" />
        <FactionBadge faction="clans" :value="gameState.factionReputation.clans" icon="🌲" />
        <FactionBadge faction="echoborn" :value="gameState.factionReputation.echoborn" icon="👻" />
      </div>
    </div>

    <div class="status-right">
      <div class="languages-display">
        <span v-for="lang in gameState.languagesKnown" :key="lang" class="lang-badge">
          🗣️ {{ lang }}
        </span>
        <span v-for="dialect in gameState.dialectsKnown" :key="dialect" class="dialect-badge">
          🔮 {{ dialect }}
        </span>
      </div>
      <div class="status-buttons">
        <button class="status-btn save-btn" title="Save Game" @click="emit('save')">
          💾
        </button>
        <button class="status-btn reset-btn" title="New Game" @click="emit('reset')">
          🔄
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameState } from '../types'
import FactionBadge from './FactionBadge.vue'

interface Props {
  gameState: GameState
  sceneName: string
}

defineProps<Props>()
const emit = defineEmits<{
  save: []
  reset: []
}>()

const formatLocation = (location: string): string => {
  return location
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>

<style src="./StatusBar.css"></style>
