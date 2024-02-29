<script setup lang="ts">
import PlanSelection from '../components/Plan-Selection.vue'
import PlanSelector from '../components/Plan-Selector.vue'
</script>

<template>
  <div class="select-plan-view">
    <h2>Select your plan</h2>
    <p class="info">You have the option of monthly or yearly billing.</p>
    <PlanSelection></PlanSelection>
    <PlanSelector></PlanSelector>
  </div>
</template>

<style scoped>
.select-plan-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.info {
    color: var(--cool-gray);
}
</style>
