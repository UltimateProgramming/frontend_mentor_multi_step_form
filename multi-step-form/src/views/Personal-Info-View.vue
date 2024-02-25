<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <h2>Personal info</h2>
    <p class="info">Please provide your name, email address, and phone number.</p>
    <div>
      <label for="name">Name</label>
      <input id="name" type="text" placeholder="e.g. Stephen King" />
      <label for="email">Email Address</label>
      <input id="email" type="email" placeholder="e.g. stephenking@lorem.com" />
      <label for="phone">Phone Number</label>
      <input id="phone" type="tel" placeholder="e.g. +1 234 567 890" />
    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.wrapper * {
  color: var(--marine-blue);
}
.info {
  color: var(--cool-gray);
}
label {
  font-size: small;
}
input {
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem 0 1rem;
  font-size: medium;
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>
