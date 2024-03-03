<script setup lang="ts">
import type { Addon } from '@/models/addon'
import { PlanEnum } from '@/enums/plan-enum';
import { useFormStore } from '@/stores/form-store';
import { reactive } from 'vue';

const addons: Addon[] = reactive([
  {
    title: 'Online Service',
    description: 'Access to multiplayer games',
    priceTagPerMonth: '+1$/mo',
    priceTagPerYear: '+10$/yr',
    selected: false
  },
  {
    title: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    priceTagPerMonth: '+2$/mo',
    priceTagPerYear: '+20$/yr',
    selected: false
  },
  {
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    priceTagPerMonth: '+2$/mo',
    priceTagPerYear: '+20$/yr',
    selected: false
  }
])

const formStore = useFormStore();
</script>

<template>
  <label class="addon-card" v-for="addon of addons" :key="addon.title" :class="{'blue-border': addon.selected}">
    <input type="checkbox" @change="addon.selected = !addon.selected">
    <div class="addon-text">
      <p class="title">{{ addon.title }}</p>
      <p class="description">{{ addon.description}}</p>
    </div>
    <p class="pricetag">{{ formStore.plan === PlanEnum.Month ? addon.priceTagPerMonth : addon.priceTagPerYear }}</p>
  </label>
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
.addon-card input[type="checkbox"]:checked {
    accent-color: var(--purplish-blue);
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
.blue-border {
  border: solid 1px var(--purplish-blue);
}
label:hover {
  cursor: pointer;
}
</style>
