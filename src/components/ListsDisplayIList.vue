<script setup>
import { ref } from 'vue'
import ListsDisplayIListItemsSorted from './ListsDisplayIListItemsSorted.vue'
import ListsDisplayIListItemsShuffled from './ListsDisplayIListItemsShuffled.vue'
import IconSort from './icons/IconSort.vue'
import IconShuffle from './icons/IconShuffle.vue'
import ButtonWithIcon from './ButtonWithIcon.vue'
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
    <ButtonWithIcon @click="isSorted = !isSorted">
      <IconShuffle v-if="isSorted" />
      <IconSort v-else />
    </ButtonWithIcon>

    <ListsDisplayIListItemsSorted v-if="isSorted" :items="listData.items" :list-id="listData.id" />
    <ListsDisplayIListItemsShuffled v-else :items="listData.items" :list-id="listData.id" />
  </section>
</template>

<style scoped></style>
