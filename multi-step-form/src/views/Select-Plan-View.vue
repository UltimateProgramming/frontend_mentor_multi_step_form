<script setup lang="ts">
import PlanSelection from '../components/Plan-Selection.vue'
import PlanSelector from '../components/Plan-Selector.vue'
import FormDescription from '@/components/Form-Description.vue'
import FormHeader from '@/components/Form-Header.vue'
</script>

<template>
  <div class="select-plan-view">
    <FormHeader text="Select your plan"></FormHeader>
    <FormDescription text="You have the option of monthly or yearly billing."></FormDescription>
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
</style>
