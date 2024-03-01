<script setup lang="ts"></script>

<template>
  <div class="plan-selector">
    <p>Monthly</p>
    <label class="checkbox">
        <input type="checkbox">
        <span class="slider"></span>
    </label>
    <p>Yearly</p>
  </div>
</template>

<style scoped>
.plan-selector {
  display: flex;
  flex-direction: row;
}
.checkbox {
    position: relative;
    width: 2rem;
    height: 1rem;
    background-color: var(--marine-blue);
    border-radius: 1rem;
}
.slider {
    position: absolute;
    left: 0.125rem;
    top: 0.125rem;
    transition: .4s;
}
.slider::before {
    position: absolute;
    content: "";
    border-radius: 50%;
    width: 0.75rem;
    height: 0.75rem;
    background-color: var(--white);
    transition: .4s;
}
input:checked + .slider::before {
  transform: translateX(1rem);
}
input {
    width: 0;
    height: 0;
    opacity: 0;
}
</style>
