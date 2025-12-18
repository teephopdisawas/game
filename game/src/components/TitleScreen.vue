<!-- 🎬 Title Screen Component ✨ -->
<template>
  <div class="title-screen">
    <div class="title-content">
      <div class="title-glyph">🔮</div>
      <h1 class="game-title">
        <span class="title-echoes">Echoes of</span>
        <span class="title-ellidra">Ellidra</span>
      </h1>
      <p class="title-subtitle">
        A Visual Novel where Language Shapes Reality ✨
      </p>
      
      <div class="title-buttons">
        <button v-if="hasSave" class="title-btn continue-btn" @click="emit('continue')">
          📖 Continue Journey
        </button>
        <button class="title-btn start-btn" @click="emit('start')">
          ⚔️ New Adventure
        </button>
      </div>

      <div class="title-features">
        <div class="feature">🏛️ Choose Your Faction</div>
        <div class="feature">🔤 Master Ellidric Language</div>
        <div class="feature">🌀 Explore Memory Drifts</div>
        <div class="feature">💫 Shape Your Destiny</div>
      </div>
    </div>

    <div class="title-footer">
      <p>A game about memory, language, and the power of choice</p>
      <p class="credits">Built with Vue.js 3 + TypeScript + Vite 💜</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  hasSave: boolean
}

defineProps<Props>()
const emit = defineEmits<{
  start: []
  continue: []
}>()
</script>

<style src="./TitleScreen.css"></style>
