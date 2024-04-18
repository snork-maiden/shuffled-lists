<script setup>
import { ref } from 'vue'
import ListsDisplayIListItemsSorted from './ListsDisplayIListItemsSorted.vue';
import ListsDisplayIListItemsShuffled from './ListsDisplayIListItemsShuffled.vue';
 defineProps({
  listData: {
    type: Object,
    required: true
  }
})
let isSorted = ref(true)
</script>

<template>
  <section class="list">
    <h2 class="title">{{ listData.name }}</h2>
    <button type="button" class="shuffle" @click="isSorted = !isSorted">
      {{ isSorted ? 'Shuffle' : 'Sort' }}
    </button>
    <ListsDisplayIListItemsSorted v-if="isSorted" :items="listData.items" :list-id="listData.id"/>
    <ListsDisplayIListItemsShuffled v-else :items="listData.items" :list-id="listData.id"/>
  </section>
</template>

<style scoped></style>
