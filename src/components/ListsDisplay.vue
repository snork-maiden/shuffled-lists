<script setup>
import { useListsStore } from '../stores/lists'
import ListsDisplayIList from './ListsDisplayIList.vue'
const store = useListsStore()
</script>

<template>
  <div class="wrapper">
    <ListsDisplayIList
      class="list"
      v-for="list of store.listsData"
      :key="list.id"
      :list-data="list"
    />
  </div>
</template>

<style scoped></style>
