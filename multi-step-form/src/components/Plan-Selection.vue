<script setup lang="ts">
import { useInfoStore } from '@/stores/info-store'
import type { Plan } from '../models/plan'
import { PlanEnum } from '@/enums/plan-enum'

const iconBaseUrl = 'src/assets/images'

const plans: Plan[] = [
  {
    iconUrl: `${iconBaseUrl}/icon-arcade.svg`,
    title: 'Arcade',
    priceTagPerMonth: '$9/mo',
    priceTagPerYear: '$90/yr'
  },
  {
    iconUrl: `${iconBaseUrl}/icon-advanced.svg`,
    title: 'Advanced',
    priceTagPerMonth: '$12/mo',
    priceTagPerYear: '$120/yr'
  },
  {
    iconUrl: `${iconBaseUrl}/icon-pro.svg`,
    title: 'Pro',
    priceTagPerMonth: '$15/mo',
    priceTagPerYear: '$150/yr'
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
      :class="{ 'blue-border': plan.title === infoStore.selectedPlan.title }"
    >
      <input type="radio" name="plan" :value="plan" v-model="infoStore.selectedPlan" />
      <img :src="plan.iconUrl" :alt="plan.title" />
      <div class="text-wrapper">
        <p class="title">{{ plan.title }}</p>
        <p class="price">
          {{
            infoStore.selectedPlanTime === PlanEnum.Month
              ? plan.priceTagPerMonth
              : plan.priceTagPerYear
          }}
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
