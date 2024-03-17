<script setup lang="ts">
import type { Addon } from '@/models/addon'
import { PlanEnum } from '@/enums/plan-enum'
import { useInfoStore } from '@/stores/info-store'

const addons: Addon[] = [
  {
    title: 'Online Service',
    description: 'Access to multiplayer games',
    pricePerMonth: 1,
    pricePerYear: 10
  },
  {
    title: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    pricePerMonth: 2,
    pricePerYear: 20
  },
  {
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    pricePerMonth: 2,
    pricePerYear: 20
  }
]

const infoStore = useInfoStore()

function onChange(event: Event, selectedAddon: Addon) {
  const input = event.target as HTMLInputElement
  if (input.checked) {
    infoStore.addAddon(selectedAddon)
    return
  }
  infoStore.removeAddon(selectedAddon)
}

function isAddonSelected(addon: Addon): boolean {
  return infoStore.selectedAddons.find((selectedAddon) => selectedAddon.title === addon.title)
    ? true
    : false
}
</script>

<template>
  <label
    class="addon-card"
    v-for="addon of addons"
    :key="addon.title"
    :class="{ 'blue-border': isAddonSelected(addon) }"
  >
    <input type="checkbox" :checked="isAddonSelected(addon)" @change="onChange($event, addon)" />
    <div class="addon-text">
      <p class="title">{{ addon.title }}</p>
      <p class="description">{{ addon.description }}</p>
    </div>
    <p class="pricetag">+${{
        infoStore.selectedPlanTime === PlanEnum.Month
          ? addon.pricePerMonth
          : addon.pricePerYear
      }}/{{ infoStore.selectedPlanTime === PlanEnum.Month ? 'mo' : 'yr' }}
    </p>
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
.addon-card input[type='checkbox'] {
  width: 1.5rem;
}
.addon-card input[type='checkbox']:checked {
  accent-color: var(--purplish-blue);
}
.addon-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pricetag {
  align-self: center;
  color: var(--purplish-blue);
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
