<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isFirstStep: boolean
    isFinalStep: boolean
  }>(),
  { isFirstStep: false, isFinalStep: false }
)
</script>

<template>
  <div class="container">
    <button v-if="!isFirstStep" class="back-btn">Go Back</button>
    <button v-if="!isFinalStep" class="next-btn">Next Step</button>
  </div>
</template>

<style>
.container {
  background-color: var(--white);
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: auto auto;
  padding: 0 1rem 0 1rem;
}
.container > button {
  width: 6rem;
  height: 2.5rem;
  border-radius: 5px;
  align-self: center;
}
.back-btn {
  background-color: var(--white);
  border: none;
}
.back-btn:hover {
  cursor: pointer;
  background-color: var(--light-gray);
}
.next-btn {
  background-color: var(--marine-blue);
  color: var(--white);
  border: none;
  justify-self: end;
}
</style>
