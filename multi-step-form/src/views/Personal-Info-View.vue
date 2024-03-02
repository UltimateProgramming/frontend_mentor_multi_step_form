<script setup lang="ts">
import FormDescription from '@/components/Form-Description.vue';
import FormHeader from '@/components/Form-Header.vue';
</script>

<template>
  <div class="personal-info-wrapper">
    <FormHeader text="Personal info"></FormHeader>
    <FormDescription
      text="Please provide your name, email address, and phone number."
    ></FormDescription>
    <div class="input-fields">
      <label for="name">Name</label>
      <input id="name" type="text" placeholder="e.g. Stephen King" />
      <label for="email">Email Address</label>
      <input id="email" type="email" placeholder="e.g. stephenking@lorem.com" />
      <label for="phone">Phone Number</label>
      <input id="phone" type="tel" placeholder="e.g. +1 234 567 890" />
    </div>
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
