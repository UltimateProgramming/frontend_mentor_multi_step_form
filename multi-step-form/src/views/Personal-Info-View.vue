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
      <label for="name">Name</label>
      <input id="name" type="text" placeholder="e.g. Stephen King" v-model="infoStore.name" @change="onNameChange($event)" @blur="onBlur('name')"/>
      <label for="email">Email Address</label>
      <input
        id="email"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        v-model="infoStore.email"
        @change="onEmailChange($event)"
        @blur="onBlur('email')"
      />
      <label for="phone">Phone Number</label>
      <input id="phone" type="tel" placeholder="e.g. +1 234 567 890" v-model="infoStore.phone" @change="onPhoneChange($event)" @blur="onBlur('phone')"/>
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
}
</style>
