<!-- 📊 Faction Badge Sub-Component ✨ -->
<template>
  <span 
    class="faction-badge" 
    :style="{ borderColor: color }" 
    :title="`${faction}: ${value}`"
  >
    {{ icon }} {{ value > 0 ? '+' : '' }}{{ value }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  faction: string
  value: number
  icon: string
}

const props = defineProps<Props>()

const color = computed(() => {
  return props.value > 20 ? '#22c55e' : props.value < -20 ? '#ef4444' : '#94a3b8'
})
</script>
