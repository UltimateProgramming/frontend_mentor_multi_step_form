<script setup lang="ts">
import FormDescription from '@/components/Form-Description.vue'
import FormHeader from '@/components/Form-Header.vue'
import AddonSelection from '@/components/Addon-Selection.vue'
</script>

<template>
  <div class="pick-addon-view">
    <FormHeader text="Pick add-ons"></FormHeader>
    <FormDescription text="Add-ons help enhance your gaming experience."></FormDescription>
    <AddonSelection></AddonSelection>
  </div>
</template>

<style scoped>
.pick-addon-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
