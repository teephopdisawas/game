<!-- 🎯 Choice Menu Component ✨ -->
<template>
  <div class="choice-menu">
    <div class="choice-title">
      🎯 What will you do?
    </div>
    <div class="choices-container">
      <button
        v-for="(choice, index) in choices"
        :key="choice.id"
        class="choice-button"
        :class="{ locked: isLocked(choice) }"
        :disabled="isLocked(choice)"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @click="!isLocked(choice) && emit('select', choice)"
      >
        <span class="choice-text">{{ choice.text }}</span>
        <span v-if="isLocked(choice)" class="locked-hint">
          🔒 Requires {{ choice.requiredLanguage }}
        </span>
        <span 
          v-if="choice.factionEffect && !isLocked(choice)" 
          class="faction-hint"
          :class="choice.factionEffect.change > 0 ? 'positive' : 'negative'"
        >
          {{ getFactionIcon(choice.factionEffect.faction) }} 
          {{ choice.factionEffect.change > 0 ? '+' : '' }}{{ choice.factionEffect.change }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DialogueChoice } from '../types'

interface Props {
  choices: DialogueChoice[]
  languagesKnown: string[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  select: [choice: DialogueChoice]
}>()

const isLocked = (choice: DialogueChoice): boolean => {
  return !!choice.requiredLanguage && !props.languagesKnown.includes(choice.requiredLanguage)
}

const getFactionIcon = (faction: string): string => {
  switch (faction) {
    case 'institute': return '🏛️'
    case 'clans': return '🌲'
    case 'echoborn': return '👻'
    default: return '⚖️'
  }
}
</script>

<style src="./ChoiceMenu.css"></style>
