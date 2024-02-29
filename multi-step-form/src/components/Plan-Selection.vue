<script setup lang="ts">
import type { Plan } from '../models/plan'

const iconBaseUrl = 'src/assets/images'

const plans: Plan[] = [
  {
    iconUrl: `${iconBaseUrl}/icon-arcade.svg`,
    title: 'Arcade',
    priceTag: '$9/mo'
  },
  {
    iconUrl: `${iconBaseUrl}/icon-advanced.svg`,
    title: 'Advanced',
    priceTag: '$12/mo'
  },
  {
    iconUrl: `${iconBaseUrl}/icon-pro.svg`,
    title: 'Pro',
    priceTag: '$15/mo'
  }
]
</script>

<template>
  <div v-for="plan of plans" :key="plan.title" class="plan-card">
    <img :src="plan.iconUrl" :alt="plan.title" />
    <div class="text-wrapper">
      <p class="title">{{ plan.title }}</p>
      <p class="price">{{ plan.priceTag }}</p>
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
