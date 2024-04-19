<script setup>
import { useListsStore } from '../stores/lists'
import ListsDisplayIList from './ListsDisplayIList.vue'
const store = useListsStore()
</script>

<template>
  <div class="wrapper">
    <ListsDisplayIList
      class="list"
      v-for="list of store.listsWithSelectedItems"
      :key="list.id"
      :list-data="list"
    />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1000px;
  display: grid;
  gap: 2em;
}
</style>
