import { defineStore } from 'pinia'

enum Plan {
  Month = 'monthly',
  Year = 'yearly'
}

export const useFormStore = defineStore('formStore', {
  state: () => ({ currentStep: 1, maxSteps: 1, plan: Plan.Month }),
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
    }
  }
})
