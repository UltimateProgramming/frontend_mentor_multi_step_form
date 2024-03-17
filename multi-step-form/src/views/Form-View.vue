<script setup lang="ts">
import StepperComponent from '@/components/Stepper-Component.vue'
import FormNavigation from '@/components/Form-Navigation.vue'
import PersonalInfoView from './Personal-Info-View.vue'
import SelectPlanView from './Select-Plan-View.vue'
import PickAddonsView from './Pick-Addons-View.vue'
import FinishUpView from './Finish-Up-View.vue'
import { useFormStore } from '../stores/form-store'

const formStore = useFormStore()
formStore.maxSteps = 4
</script>

<template>
  <div class="content">
    <div class="stepper-mobile">
      <StepperComponent :maxSteps="formStore.maxSteps" :direction="'row'"></StepperComponent>
    </div>
    <div class="card">
      <StepperComponent
        class="stepper-desktop"
        :maxSteps="formStore.maxSteps"
        :direction="'column'"
      ></StepperComponent>
      <PersonalInfoView
        v-if="formStore.currentStep === 1"
        class="padding-desktop"
      ></PersonalInfoView>
      <SelectPlanView v-if="formStore.currentStep === 2" class="padding-desktop"></SelectPlanView>
      <PickAddonsView v-if="formStore.currentStep === 3" class="padding-desktop"></PickAddonsView>
      <FinishUpView v-if="formStore.currentStep === 4" class="padding-desktop"></FinishUpView>
      <FormNavigation class="navigation-desktop"></FormNavigation>
    </div>
  </div>
  <FormNavigation class="navigation-mobile"></FormNavigation>
</template>

<style scoped>
.card {
  background-color: var(--white);
  min-width: 10rem;
  max-width: 60rem;
  min-height: 20rem;
  max-height: 50rem;
  border-radius: 1rem;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
}
.content {
  min-width: 100%;
  min-height: 100%;
  background-image: url(../assets/images/bg-sidebar-mobile.svg);
  background-repeat: no-repeat;
  background-size: contain;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.stepper-mobile {
  display: flex;
  justify-content: center;
  margin: 1rem;
}
.stepper-desktop {
  display: none;
}
.navigation-mobile {
  display: grid;
  position: fixed;
  bottom: 0;
}
.navigation-desktop {
  display: none;
}
@media (min-width: 750px) {
  .content {
    background-image: none;
    min-width: 60rem;
    min-height: 50rem;
    max-width: 70rem;
    max-height: 60rem;
    justify-content: center;
  }
  .card {
    display: grid;
    grid-template-columns: 15rem auto;
    grid-template-rows: auto auto;
  }
  .stepper-desktop {
    display: flex;
    background-image: url(../assets/images/bg-sidebar-desktop.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    grid-row: span 2;
    border-radius: 0.5rem;
    padding: 2rem;
  }
  .stepper-mobile {
    display: none;
  }
  .navigation-mobile {
    display: none;
  }
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
