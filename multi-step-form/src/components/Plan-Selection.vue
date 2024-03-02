<script setup lang="ts">
import { useFormStore } from '@/stores/form-store';
import type { Plan } from '../models/plan'
import { PlanEnum } from '@/enums/plan-enum';

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

const formStore = useFormStore();
</script>

<template>
  <div v-for="plan of plans" :key="plan.title" class="plan-card">
    <img :src="plan.iconUrl" :alt="plan.title" />
    <div class="text-wrapper">
        <p class="title">{{ plan.title }}</p>
      <p class="price">{{ formStore.plan === PlanEnum.Month ? plan.priceTagPerMonth : plan.priceTagPerYear}}</p>
    </div>
  </div>
</template>

<style scoped>
.plan-card {
  width: 100%;
  min-height: 5rem;
  border: solid 1px var(--light-gray);
  border-radius: 10px;
  padding: 1rem;
  display: grid;
  grid-template-columns: max-content auto;
  gap: 1rem;
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
</style>
