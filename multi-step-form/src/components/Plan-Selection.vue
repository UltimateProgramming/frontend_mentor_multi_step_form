<script setup lang="ts">
import { useInfoStore } from '@/stores/info-store'
import type { Plan } from '../models/plan'
import { PlanEnum } from '@/enums/plan-enum'

const iconBaseUrl = 'src/assets/images'

const plans: Plan[] = [
  {
    iconUrl: `${iconBaseUrl}/icon-arcade.svg`,
    title: 'Arcade',
    pricePerMonth: 9,
    pricePerYear: 90
  },
  {
    iconUrl: `${iconBaseUrl}/icon-advanced.svg`,
    title: 'Advanced',
    pricePerMonth: 12,
    pricePerYear: 120
  },
  {
    iconUrl: `${iconBaseUrl}/icon-pro.svg`,
    title: 'Pro',
    pricePerMonth: 15,
    pricePerYear: 150
  }
]

const infoStore = useInfoStore()
</script>

<template>
  <form class="plan-form">
    <label
      v-for="plan of plans"
      :key="plan.title"
      class="plan-card"
      :class="{ 'blue-border darker-background': plan.title === infoStore.selectedPlan.title }"
    >
      <input type="radio" name="plan" :value="plan" v-model="infoStore.selectedPlan" />
      <img :src="plan.iconUrl" :alt="plan.title" />
      <div class="text-wrapper">
        <p class="title">{{ plan.title }}</p>
        <p class="price">
          ${{
            infoStore.selectedPlanTime === PlanEnum.Month ? plan.pricePerMonth : plan.pricePerYear
          }}/{{ infoStore.selectedPlanTime === PlanEnum.Month ? 'mo' : 'yr' }}
        </p>
      </div>
    </label>
  </form>
</template>

<style scoped>
.plan-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.plan-card {
  width: 100%;
  min-height: 5rem;
  border: solid 1px var(--light-gray);
  border-radius: 10px;
  padding: 1rem;
  display: grid;
  grid-template-columns: max-content auto;
  gap: 1rem;
  cursor: pointer;
}
.plan-card:hover {
  border: solid 1px var(--purplish-blue);
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.title {
  font-weight: 700;
}
.price {
  font-size: small;
  color: var(--cool-gray);
}
.blue-border {
  border: solid 1px var(--purplish-blue);
}
.darker-background {
  background-color: var(--alabaster);
}
@media (min-width: 750px) {
  .plan-form {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .plan-card {
    grid-template-rows: max-content auto;
    grid-template-columns: none;
    row-gap: 2.5rem;
  }
}
input[type='radio'] {
  display: none;
}
</style>
