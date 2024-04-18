<script setup lang="ts">
import FormDescription from '@/components/Form-Description.vue'
import FormHeader from '@/components/Form-Header.vue'
import { useInfoStore } from '@/stores/info-store'
import { useValidationStore } from '@/stores/validation-store'
import { onMounted } from 'vue';

const infoStore = useInfoStore();
const validationStore = useValidationStore();

function onNameChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.value) {
    validationStore.setError('name', 'This field is required')
  } else {
    validationStore.removeError('name')
  }
}

function onEmailChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.value) {
    validationStore.setError('email', 'This field is required')
  } else {
    validationStore.removeError('email')
  }
}

function onPhoneChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.value) {
    validationStore.setError('phone', 'This field is required');
  } else {
    validationStore.removeError('phone')
  }
}

function onBlur(source: string) {
  validationStore.setTouched(source, true)
  console.log('test')
}

onMounted(() => {
  validationStore.setError('name', 'This field is required');
  validationStore.setError('email', 'This field is required');
  validationStore.setError('phone', 'This field is required');
})
</script>

<template>
  <div class="personal-info-wrapper">
    <FormHeader text="Personal info"></FormHeader>
    <FormDescription
      text="Please provide your name, email address, and phone number."
    ></FormDescription>
    <form class="input-fields">
      <div class="label-wrapper">
        <label for="name">Name</label>
        <label class="error-label" for="name">{{ validationStore.getError('name') }}</label>
      </div>
      <input id="name" :class="{'red-outline' : validationStore.getError('name')}" type="text" placeholder="e.g. Stephen King" v-model="infoStore.name" @change="onNameChange($event)" @blur="onBlur('name')"/>
      <div class="label-wrapper">
        <label for="email">Email Address</label>
        <label class="error-label" for="email">{{ validationStore.getError('email') }}</label>
      </div>
      <input
        id="email"
        :class="{'red-outline' : validationStore.getError('email')}"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        v-model="infoStore.email"
        @change="onEmailChange($event)"
        @blur="onBlur('email')"
      />
      <div class="label-wrapper">
        <label for="phone">Phone Number</label>
        <label class="error-label" for="phone">{{ validationStore.getError('phone') }}</label>
      </div>
      <input id="phone" :class="{'red-outline' : validationStore.getError('phone')}" type="tel" placeholder="e.g. +1 234 567 890" v-model="infoStore.phone" @change="onPhoneChange($event)" @blur="onBlur('phone')"/>
    </form>
  </div>
</template>

<style scoped>
.personal-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--marine-blue);
}
.input-fields {
  display: flex;
  flex-direction: column;
}
.personal-info-wrapper label {
  font-size: small;
}
.personal-info-wrapper input {
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem 0 1rem;
  font-size: medium;
  font-weight: 700;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}
.label-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0 0.5rem 0
}
.error-label {
  color: var(--strawberry-red);
  font-weight: bold;
}
.red-outline {
  border-color: var(--strawberry-red);
}
</style>
