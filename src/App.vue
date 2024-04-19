<script setup>
import TheLists from './components/TheLists.vue'
</script>

<template>
  <main class="main">
    <TheLists />
  </main>
</template>

<style scoped>
.main {
  display: grid;
  gap: max(2em, 5vh) max(8vw, 4em);
}

@media screen and (min-width: 1000px) {
  .main {
    grid-template-columns: auto 1fr;
    margin-top: 5vw;
    margin-left: 3vw;
  }
}
</style>
