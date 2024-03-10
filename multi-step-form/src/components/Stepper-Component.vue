<script setup lang="ts">
import { useFormStore } from '@/stores/form-store'

const formStore = useFormStore()

const props = withDefaults(
  defineProps<{
    direction: 'row' | 'column'
  }>(),
  { direction: 'row' }
)

const stepTitles = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY']
</script>

<template>
  <div class="stepper" :class="direction === 'row' ? 'row' : 'column'">
    <div class="stepper-wrapper" v-for="steps of formStore.maxSteps" :key="steps">
      <div class="badge" :class="formStore.currentStep === steps ? 'selected' : ''">
        <span>{{ steps }}</span>
      </div>
      <div class="step-content-desktop">
        <p class="step-content-counter">STEP {{ steps }}</p>
        <p class="step-content-title">{{ stepTitles[steps - 1] }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stepper {
  display: flex;
}
.stepper-wrapper {
  display: flex;
  gap: 0.5rem;
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
.step-content-desktop {
  display: none;
}
.selected {
  background-color: var(--light-blue);
  color: black;
}

@media (min-width: 750px) {
  .step-content-desktop {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .step-content-counter {
    color: var(--cool-gray);
    font-size: x-small;
  }
  .step-content-title {
    color: var(--light-blue);
    font-size: small;
    font-weight: 700;
  }
}
</style>
