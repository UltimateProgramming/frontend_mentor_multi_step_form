<script setup lang="ts">
import { useFormStore } from '@/stores/form-store'
import { PlanEnum } from '@/enums/PlanEnum'

const formStore = useFormStore();

function onChange(event: Event) {
  const input = event.target as HTMLInputElement
  input.checked ? formStore.changePlan(PlanEnum.Year) : formStore.changePlan(PlanEnum.Month);
}
</script>

<template>
  <div class="plan-selector">
    <p>Monthly</p>
    <label class="checkbox">
      <input type="checkbox" @change="onChange($event)" />
      <span class="slider"></span>
    </label>
    <p>Yearly</p>
  </div>
</template>

<style scoped>
.plan-selector {
  display: flex;
  flex-direction: row;
}
.checkbox {
  position: relative;
  width: 2rem;
  height: 1rem;
  background-color: var(--marine-blue);
  border-radius: 1rem;
}
.slider {
  position: absolute;
  left: 0.125rem;
  top: 0.125rem;
  transition: 0.4s;
}
.slider::before {
  position: absolute;
  content: '';
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  background-color: var(--white);
  transition: 0.4s;
}
input:checked + .slider::before {
  transform: translateX(1rem);
}
input {
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
