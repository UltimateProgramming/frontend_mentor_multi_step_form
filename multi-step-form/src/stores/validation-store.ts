import { useFormStore } from '@/stores/form-store'
import { useInfoStore } from '@/stores/info-store'
import { defineStore } from 'pinia'

export const useValidationStore = defineStore('validationStore', {
  state: () => ({ errors: new Map(), isCurrentStepValid: false, touched: new Map() }),
  actions: {
    updateCurrentStepValidity(): void {
      const infoStore = useInfoStore()
      const formStore = useFormStore()

      switch (formStore.currentStep) {
        case 1:
          if (this.errors.size > 0 && this.touched.size <= 3) {
            this.isCurrentStepValid = false
            return
          }
          break

        case 2:
          if (Object.keys(infoStore.selectedPlan).length === 0) {
            this.isCurrentStepValid = false
            return
          }
          break

        case 3:
          if (infoStore.selectedAddons.length === 0) {
            this.isCurrentStepValid = false
            return
          }
      }
      this.isCurrentStepValid = true
      return
    },

    getError(key: string): string {
      if (this.errors.get(key) && this.touched.get(key)) {
        return this.errors.get(key)
      }

      return ''
    },

    setError(key: string, value: unknown) {
      this.errors.set(key, value)
    },

    removeError(key: string) {
      this.errors.delete(key)
    },

    resetTouched() {
      this.touched.clear()
    },

    setTouched(key: string, value: unknown) {
      this.touched.set(key, value)
    }
  }
})
