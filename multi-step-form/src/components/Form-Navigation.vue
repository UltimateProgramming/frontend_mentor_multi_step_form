<script setup lang="ts">
import { useFormStore } from '@/stores/form-store'

const formStore = useFormStore()
</script>

<template>
  <div class="container">
    <div class="back-btn-wrapper">
      <button v-if="formStore.currentStep !== 1" class="back-btn" @click="formStore.previousStep()">
        Go Back
      </button>
    </div>
    <div class="rightside-btn-wrapper">
      <button
        v-if="formStore.currentStep !== formStore.maxSteps"
        class="next-btn"
        @click="formStore.nextStep()"
      >
        Next Step
      </button>
      <button
        v-if="formStore.currentStep === formStore.maxSteps"
        class="confirm-btn"
        @click="$router.push('/success')"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--white);
  width: 100%;
  height: 5rem;
  display: grid;
  grid-template-columns: auto auto;
  padding: 0 1rem 0 1rem;
}
.container button {
  width: 6rem;
  height: 2.5rem;
  border-radius: 5px;
  align-self: center;
}
.back-btn-wrapper {
  display: flex;
  align-items: center;
}
.back-btn {
  background-color: var(--white);
  border: none;
  color: var(--cool-gray)
}
.back-btn:hover {
  cursor: pointer;
  background-color: var(--light-gray);
}
.rightside-btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: end;
}
.next-btn {
  background-color: var(--marine-blue);
  color: var(--white);
  border: none;
  justify-self: end;
}
.next-btn:hover {
  cursor: pointer;
  opacity: 0.75;
}
.confirm-btn {
  background-color: var(--purplish-blue);
  color: var(--white);
  border: none;
  justify-self: end;
}
.confirm-btn:hover {
  cursor: pointer;
  opacity: 0.75;
}
</style>
