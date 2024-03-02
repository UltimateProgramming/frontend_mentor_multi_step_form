<script setup lang="ts">
import type { Addon } from '@/models/addon'

const addons: Addon[] = [
  {
    title: 'Online Service',
    description: 'Access to multiplayer games',
    priceTagPerMonth: '+1$/mo',
    priceTagPerYear: '+10$/yr'
  },
  {
    title: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    priceTagPerMonth: '+2$/mo',
    priceTagPerYear: '+20$/yr'
  },
  {
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    priceTagPerMonth: '+2$/mo',
    priceTagPerYear: '+20$/yr'
  }
]
</script>

<template>
  <div class="addon-card" v-for="addon of addons" :key="addon.title">
    <input type="checkbox">
    <div class="addon-text">
      <p class="title">{{ addon.title }}</p>
      <p class="description">{{ addon.description}}</p>
    </div>
    <p class="pricetag">{{ addon.priceTagPerMonth }}</p>
  </div>
</template>

<style scoped>
.addon-card {
  width: 100%;
  min-height: 5rem;
  border: solid 1px var(--light-gray);
  border-radius: 10px;
  padding: 1rem;
  display: grid;
  grid-template-columns: max-content auto max-content;
  gap: 1rem;
}
.addon-card input[type="checkbox"] {
    width: 1.5rem;
}
.addon-card input[type="checkbox"]:checked::before {
    background-color: var(--purplish-blue);
}
.addon-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pricetag {
    align-self: center;
    color: var(--purplish-blue)
}
.title {
    font-weight: bold;
    color: var(--marine-blue);
}
.description {
    color: var(--cool-gray);
    font-size: small;
}
</style>
