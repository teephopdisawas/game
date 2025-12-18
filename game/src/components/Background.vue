<!-- 🌅 Background Scene Component ✨ -->
<template>
  <div :class="`background background-${location}`">
    <div class="background-overlay" />
    <div class="glyph-particles">
      <span 
        v-for="(particle, i) in particles"
        :key="i" 
        class="glyph-particle"
        :style="{
          left: particle.left,
          animationDelay: particle.delay,
          animationDuration: particle.duration,
        }"
      >
        {{ particle.glyph }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LocationType } from '../types'

interface Props {
  location: LocationType
}

defineProps<Props>()

// Pre-generate particle data
const glyphs = ['✧', '⬡', '◇', '⟡', '✦', '⚝', '☆', '◈', '⬢', '❋']

interface ParticleData {
  left: string
  delay: string
  duration: string
  glyph: string
}

const generateParticles = (count: number): ParticleData[] => {
  return Array.from({ length: count }, (_, i) => ({
    left: `${(i * 5) % 100}%`,
    delay: `${(i * 0.7) % 10}s`,
    duration: `${10 + (i * 0.5) % 10}s`,
    glyph: glyphs[i % glyphs.length],
  }))
}

const particles = generateParticles(20)
</script>

<style src="./Background.css"></style>
