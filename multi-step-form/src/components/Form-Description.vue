<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <p class="text-gray">{{ props.text }}</p>
</template>

<style scoped>
.text-gray {
  color: var(--cool-gray);
}
</style>
