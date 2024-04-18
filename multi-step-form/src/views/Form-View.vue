<script setup lang="ts">
import StepperComponent from '@/components/Stepper-Component.vue'
import FormNavigation from '@/components/Form-Navigation.vue'
import { useFormStore } from '../stores/form-store'
import { watch } from 'vue';
import { useInfoStore } from '@/stores/info-store';
import { useValidationStore } from '@/stores/validation-store';

const formStore = useFormStore();
const validationStore = useValidationStore();
const infoStore = useInfoStore();
formStore.maxSteps = 4;

watch([infoStore, validationStore.errors, validationStore.touched, () => formStore.getCurrentStep], () => {
  validationStore.updateCurrentStepValidity();
})
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
      <RouterView></RouterView>
    </div>
  </div>
  <FormNavigation
    v-if="$router.currentRoute.value.path !== '/success'"
    class="navigation-mobile"
  ></FormNavigation>
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
.stepper-desktop {
  display: none;
}
.stepper-mobile {
  display: flex;
  justify-content: center;
  margin: 1rem;
}
.navigation-mobile {
  display: grid;
  position: fixed;
  bottom: 0;
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
    grid-template-rows: auto max-content;
    min-width: 10rem;
    max-width: 60rem;
    min-height: 40rem;
    max-height: 50rem;
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
  .padding-desktop {
    padding: 3rem;
  }
}
</style>
