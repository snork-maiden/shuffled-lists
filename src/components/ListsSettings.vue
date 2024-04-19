<script setup>
import ListsSettingsList from './ListsSettingsList.vue';
import { useListsStore } from '../stores/lists'
const store = useListsStore()
</script>

<template>
  <section class="filters">
    <ul class="lists block">
      <li class="list" v-for="list of store.listsData" :key="list.id">
        <ListsSettingsList :list-data="list"/>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.filters {
  min-width: min(500px, 30vw);
}
.lists {
  background-color: var(--block-color-background);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

</style>
