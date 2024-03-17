<script setup lang="ts">
import FormHeader from '@/components/Form-Header.vue'
import FormDescription from '@/components/Form-Description.vue'
import { useInfoStore } from '@/stores/info-store';
import { useFormStore } from '@/stores/form-store';
import { PlanEnum } from '@/enums/plan-enum'

const infoStore = useInfoStore();
const formStore = useFormStore();

function calcTotal(): number {
    let result: number = 0;
    switch(infoStore.selectedPlanTime) {
        case PlanEnum.Month: {
            result += infoStore.selectedPlan.pricePerMonth  ? infoStore.selectedPlan.pricePerMonth : 0;
            infoStore.selectedAddons.forEach((addon) => {
                result += addon.pricePerMonth
            })
            break;
        }
        case PlanEnum.Year: {
            result += infoStore.selectedPlan.pricePerYear ? infoStore.selectedPlan.pricePerYear : 0;
            infoStore.selectedAddons.forEach((addon) => {
                result += addon.pricePerYear
            })
            break;
        }
    }

    return result;
}
</script>

<template>
  <div class="finish-up-view">
    <FormHeader text="Finish Up"></FormHeader>
    <FormDescription
      text="Double-check everything looks OK before confirming."
    ></FormDescription>
    <div class="plan-addon-list">
        <div class="plan-addon-list-item">
            <div class="plan-description">
                <p class="marine-blue bold">{{ infoStore.selectedPlan.title }} {{ infoStore.selectedPlanTime === PlanEnum.Month ? '(Monthly)' : '(Yearly)'}}</p>
                <a class="cool-gray" href="#" @click="formStore.setStep(2)">change</a>
            </div>
            <p class="marine-blue bold">${{ infoStore.selectedPlanTime === PlanEnum.Month ? infoStore.selectedPlan.pricePerMonth : infoStore.selectedPlan.pricePerYear }}/{{infoStore.selectedPlanTime === PlanEnum.Month ? 'mo': 'yr'}}</p>
        </div>
        <div style="height: 1px; background-color: var(--light-gray); width: 100%;"></div>
        <div class="addon-description" v-for="addon in infoStore.selectedAddons" :key="addon.title">
            <p class="cool-gray small-font">{{ addon.title }}</p>
            <p class="marine-blue small-font">+${{ infoStore.selectedPlanTime === PlanEnum.Month ? addon.pricePerMonth : addon.pricePerYear }}/{{ infoStore.selectedPlanTime === PlanEnum.Month ? 'mo' : 'yr' }}</p>
        </div>
    </div>
    <div class="total">
        <p class="cool-gray">Total {{ infoStore.selectedPlanTime === PlanEnum.Month ? '(per month)' : '(per year)' }}</p>
        <p class="marine-blue">${{ calcTotal() }}/{{ infoStore.selectedPlanTime === PlanEnum.Month ? 'mo' : 'yr' }}</p>
    </div>
  </div>
</template>

<style scoped>
.finish-up-view {
  display: flex;
  flex-direction: column;
  gap: 1rem
}
.plan-addon-list {
    display: flex;
    flex-direction: column;
    background-color: var(--magnolia);
    width: 100%;
    height: fit-content;
    border-radius: 0.5rem;
    padding: 1rem;
    gap: 1rem;
}
.plan-addon-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.plan-description {
    display: flex;
    flex-direction: column;
}
.addon-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.total {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0 1rem
}
.cool-gray {
    color: var(--cool-gray);
}
.marine-blue {
    color: var(--marine-blue);
}
.bold {
    font-weight: 700;
}
.small-font {
    font-size: small;
}
</style>
