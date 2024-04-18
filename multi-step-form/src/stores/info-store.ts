import { defineStore } from 'pinia'
import { PlanEnum } from '@/enums/plan-enum'
import type { Plan } from '@/models/plan'
import type { Addon } from '@/models/addon'

export const useInfoStore = defineStore('infoStore', {
  state: () => ({
    name: '',
    email: '',
    phone: '',
    selectedPlan: {} as Plan,
    selectedPlanTime: PlanEnum.Month as PlanEnum,
    selectedAddons: [] as Addon[]
  }),

  getters: {
    getName(): string {
      return this.name
    },
    getEmail(): string {
      return this.email
    },
    getPhone(): string {
      return this.phone
    }
  },
  actions: {
    addName(name: string): void {
      this.name = name
    },
    addEmail(email: string): void {
      this.email = email
    },
    addPhone(phone: string): void {
      this.phone = phone
    },
    selectPlan(plan: Plan): void {
      this.selectedPlan = plan
    },
    selectPlanTime(planEnum: PlanEnum): void {
      this.selectedPlanTime = planEnum
    },
    addAddon(addon: Addon): void {
      if (this.selectedAddons.find((selectedAddon) => selectedAddon.title === addon.title)) {
        return
      }
      this.selectedAddons.push(addon)
    },
    removeAddon(addon: Addon): void {
      this.selectedAddons = this.selectedAddons.filter(
        (selectedAddon) => selectedAddon.title !== addon.title
      )
    }
  }
})
