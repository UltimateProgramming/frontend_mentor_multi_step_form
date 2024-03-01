import { defineStore } from 'pinia'
import { PlanEnum } from '@/enums/PlanEnum'

export const useFormStore = defineStore('formStore', {
  state: () => ({ currentStep: 1, maxSteps: 1, plan: PlanEnum.Month }),
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

    changePlan(newPlan: PlanEnum) {
      this.plan = newPlan
    }
  }
})
