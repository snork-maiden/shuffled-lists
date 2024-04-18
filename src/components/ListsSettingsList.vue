<script setup>
import { computed, ref } from 'vue'
import ListsSettingsListItem from './ListsSettingsListItem.vue';

const props = defineProps({
  listData: {
    type: Object,
    required: true
  }
})

const id = computed(() => props.listData.id)
let isExpand = ref(false)
</script>

<template>
  <button type="button" class="expand" @click="isExpand = !isExpand">{{isExpand ? 'hide' : 'expand'}}</button>
  <input type="checkbox" name="display-list-btn" :id="`display-list-${id}-btn`" class="display" />
  <label :for="`display-list-${id}-btn`" class="title">{{listData.name}}</label>
  <ul class="items" v-if="isExpand">
  <li class="item" v-for="item of listData.items" :key="item.id">
    <ListsSettingsListItem :item-data="item" :list-id="id"/>
  </li>
</ul>
</template>

<style scoped></style>
