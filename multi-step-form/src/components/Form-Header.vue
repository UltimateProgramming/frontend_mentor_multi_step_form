<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <h2 class="text-marine-blue">{{ props.text }}</h2>
</template>

<style scoped>
.text-marine-blue {
  color: var(--marine-blue);
}
</style>
