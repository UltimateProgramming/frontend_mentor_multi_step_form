<script setup lang="ts">
import FormNavigation from '@/components/Form-Navigation.vue'
import PersonalInfoView from './Personal-Info-View.vue'
import SelectPlanView from './Select-Plan-View.vue'
import PickAddonsView from './Pick-Addons-View.vue'
import FinishUpView from './Finish-Up-View.vue'
import { useFormStore } from '@/stores/form-store'

const formStore = useFormStore()
</script>

<template>
  <PersonalInfoView v-if="formStore.currentStep === 1" class="padding-desktop"></PersonalInfoView>
  <SelectPlanView v-if="formStore.currentStep === 2" class="padding-desktop"></SelectPlanView>
  <PickAddonsView v-if="formStore.currentStep === 3" class="padding-desktop"></PickAddonsView>
  <FinishUpView v-if="formStore.currentStep === 4" class="padding-desktop"></FinishUpView>
  <FormNavigation class="navigation-desktop"></FormNavigation>
</template>

<style scoped>
.navigation-desktop {
  display: none;
}
@media (min-width: 750px) {
  .navigation-desktop {
    display: grid;
    grid-column: 2;
    grid-row: 2;
  }
  .padding-desktop {
    padding: 3rem;
  }
}
</style>
