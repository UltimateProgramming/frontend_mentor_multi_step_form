<script setup lang="ts">
import StepperComponent from '@/components/Stepper-Component.vue';
import FormNavigation from '@/components/Form-Navigation.vue';
import PersonalInfoView from './Personal-Info-View.vue';
import SelectPlanView from './Select-Plan-View.vue';
import {useFormStore } from '../stores/form-store';

const formStore = useFormStore();
formStore.maxSteps = 4;
</script>

<template>
  <div class="content">
    <div class="stepper-wrapper">
      <StepperComponent :maxSteps="formStore.maxSteps" :direction="'row'"></StepperComponent>
    </div>
    <div class="card">
      <PersonalInfoView v-if="formStore.currentStep === 1"></PersonalInfoView>
      <SelectPlanView v-if="formStore.currentStep === 2"></SelectPlanView>
    </div>
  </div>
  <FormNavigation></FormNavigation>
</template>

<style scoped>
.card {
  background-color: var(--white);
  min-width: 10rem;
  max-width: 60rem;
  min-height: 20rem;
  max-height: 50rem;
  border-radius: 1rem;
  padding: 1rem;
}
.content {
  min-width: 100%;
  min-height: 100%;
  background-image: url(../assets/images/bg-sidebar-mobile.svg);
  background-repeat: no-repeat;
  background-size: contain;
  padding: 1rem;
}
.stepper-wrapper {
  display: flex;
  justify-content: center;
  margin: 1rem;
}</style>
