<script setup lang="ts">
import { useFormStore } from '@/stores/form-store';

const formStore = useFormStore();

const props = withDefaults(
  defineProps<{
    direction: 'row' | 'column'
  }>(),
  { direction: 'row' }
)


</script>

<template>
  <div class="stepper" :class="direction === 'row' ? 'row' : 'column'">
    <div
      v-for="steps of formStore.maxSteps"
      :key="steps"
      class="badge"
      :class="formStore.currentStep === steps ? 'selected' : ''"
    >
      <span>{{ steps }}</span>
    </div>
  </div>
</template>

<style scoped>
.stepper {
  display: flex;
}
.row {
  flex-direction: row;
}
.column {
  flex-direction: column;
}
.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--light-blue);
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  color: var(--white);
}
.selected {
  background-color: var(--light-blue);
  color: black;
}
</style>
