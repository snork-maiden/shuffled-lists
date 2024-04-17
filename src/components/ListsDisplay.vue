<script setup>
import { ref } from 'vue'
let isOrdered = ref(true)
</script>

<template>
  <section class="list">
    <h2 class="title">List 1</h2>
    <button type="button" class="shuffle" @click="isOrdered = !isOrdered">Shuffle</button>
    
  </section>
</template>

<style scoped></style>
