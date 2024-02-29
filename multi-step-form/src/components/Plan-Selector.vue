<script setup lang="ts"></script>

<template>
  <div class="plan-selector">
    <p>Monthly</p>
    <div class="checkbox">
        <input type="checkbox">
        <span class="slider"></span>
    </div>
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
}
.slider::before {
    position: absolute;
    content: "";
    border-radius: 50%;
    width: 0.75rem;
    height: 0.75rem;
    background-color: var(--white);
}
input:checked .slider::before {
  transform: translateX(1.9em);
}
input {
    width: 0;
    height: 0;
    opacity: 0;
}
</style>
