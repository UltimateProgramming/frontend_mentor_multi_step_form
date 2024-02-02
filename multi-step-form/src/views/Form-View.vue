<script setup lang="ts">
import StepperComponent from '@/components/Stepper-Component.vue';
import FormNavigation from '@/components/Form-Navigation.vue';
</script>

<template>
  <div class="content">
    <div class="stepper-wrapper">
      <StepperComponent :maxSteps="4" :direction="'row'"></StepperComponent>
    </div>
    <div class="card">
      <p>TEST</p>
    </div>
  </div>
  <FormNavigation></FormNavigation>
</template>

<style>
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
