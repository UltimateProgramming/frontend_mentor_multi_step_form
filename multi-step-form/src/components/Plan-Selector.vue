<script setup lang="ts">
import { useFormStore } from '@/stores/form-store'
import { PlanEnum } from '@/enums/plan-enum'

const formStore = useFormStore();

function onChange(event: Event) {
  const input = event.target as HTMLInputElement
  input.checked ? formStore.changePlan(PlanEnum.Year) : formStore.changePlan(PlanEnum.Month);
}
</script>

<template>
  <div class="plan-selector">
    <p :class="{'text-gray': formStore.plan !== PlanEnum.Month}">Monthly</p>
    <label class="checkbox">
      <input type="checkbox" @change="onChange($event)" />
      <span class="slider"></span>
    </label>
    <p :class="{'text-gray': formStore.plan !== PlanEnum.Year}">Yearly</p>
  </div>
</template>

<style scoped>
.plan-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--magnolia);
  min-width: 100%;
  min-height: 3rem;
  border-radius: 0.5rem;
}
.checkbox {
  position: relative;
  width: 2.5rem;
  height: 1.25rem;
  background-color: var(--marine-blue);
  border-radius: 1rem;
}
.slider {
  position: absolute;
  left: 0.125rem;
  top: 0.25rem;
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
  transform: translateX(1.5rem);
}
input {
  width: 0;
  height: 0;
  opacity: 0;
}
p {
  font-weight: 500;
  color: var(--marine-blue);
}
.text-gray {
  color: var(--cool-gray)
}
</style>
