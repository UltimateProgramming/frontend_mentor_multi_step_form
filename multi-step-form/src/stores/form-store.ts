import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => ({ currentStep: 1, maxSteps: 1 }),
  actions: {
    nextStep() {
      if (this.currentStep < this.maxSteps) {
        this.currentStep += 1
      }
    },

    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1
      }
    },

    setStep(step: number) {
      if (step > this.maxSteps || step < 1) {
        return
      }
      this.currentStep = step
    }
  }
})
