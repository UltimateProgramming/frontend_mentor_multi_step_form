<script setup lang="ts">
import FormDescription from '@/components/Form-Description.vue';
import FormHeader from '@/components/Form-Header.vue';
</script>

<template>
  <div class="success-view">
    <img class="checkmark-img" src="../assets/images/icon-thank-you.svg" alt="checkmark" />
    <FormHeader text="Thank you!"></FormHeader>
    <FormDescription class="description" text="Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com."></FormDescription>
  </div>
</template>

<style scoped>
.success-view {
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem
}

.checkmark-img {
  width: 4rem;
  height: 4rem;
}
.description {
    text-align: center;
}
@media (min-width: 750px) {
    .success-view {
        padding: 0 5rem 0 5rem;
    }
}
</style>
