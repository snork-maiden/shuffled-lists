<script setup>
import ListsSettingsList from './ListsSettingsList.vue';
import { useListsStore } from '../stores/lists'
const store = useListsStore()
</script>

<template>
<ul class="lists">
  <li class="list" v-for="list of store.listsData" :key="list.id">
    <ListsSettingsList :list-data="list"/>
  </li>
</ul>
</template>

<style scoped>

</style>
