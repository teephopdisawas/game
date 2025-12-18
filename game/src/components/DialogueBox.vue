<!-- 🎮 Dialogue Box Component 💬✨ -->
<template>
  <div class="dialogue-container" @click="handleClick">
    <div class="dialogue-box" :class="getEmotionClass(currentLine?.emotion)">
      <div class="speaker-name">
        {{ currentLine?.speaker }}
      </div>
      <div class="dialogue-text">
        {{ displayedText }}
        <span v-if="isTyping" class="cursor">▌</span>
      </div>
      <div class="dialogue-hint">
        {{ isTyping ? '⏭️ Click to skip' : isLastLine ? '✨ Click to continue' : '➡️ Click for next' }}
      </div>
    </div>
    <div class="dialogue-progress">
      <span 
        v-for="(_, i) in dialogue" 
        :key="i" 
        class="progress-dot"
        :class="{ active: i <= currentIndex }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import type { DialogueLine } from '../types'

interface Props {
  dialogue: DialogueLine[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  complete: []
}>()

const currentIndex = ref(0)
const displayedText = ref('')
const isTyping = ref(true)
let timer: ReturnType<typeof setInterval> | null = null

const currentLine = computed(() => props.dialogue[currentIndex.value])
const isLastLine = computed(() => currentIndex.value === props.dialogue.length - 1)

// Typewriter effect ✍️
const startTypewriter = () => {
  displayedText.value = ''
  isTyping.value = true
  let charIndex = 0
  const text = currentLine.value?.text || ''
  
  if (timer) clearInterval(timer)
  
  timer = setInterval(() => {
    if (charIndex < text.length) {
      displayedText.value = text.slice(0, charIndex + 1)
      charIndex++
    } else {
      isTyping.value = false
      if (timer) clearInterval(timer)
    }
  }, 25)
}

// Watch for dialogue changes and restart typewriter
watch([currentIndex, () => props.dialogue], () => {
  startTypewriter()
}, { immediate: true })

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const handleClick = () => {
  if (isTyping.value) {
    // Skip to end of current text
    displayedText.value = currentLine.value?.text || ''
    isTyping.value = false
    if (timer) clearInterval(timer)
  } else if (isLastLine.value) {
    // Dialogue complete
    currentIndex.value = 0
    emit('complete')
  } else {
    // Next line
    currentIndex.value++
  }
}

const getEmotionClass = (emotion?: string): string => {
  switch (emotion) {
    case 'happy': return 'emotion-happy'
    case 'sad': return 'emotion-sad'
    case 'angry': return 'emotion-angry'
    case 'mysterious': return 'emotion-mysterious'
    default: return ''
  }
}
</script>

<style src="./DialogueBox.css"></style>
