<script setup>
import { useListsStore } from '@/stores/lists'
import ItemCopy from './ItemCopy.vue'
const store = useListsStore()

defineProps({
  items: {
    type: Array,
    required: true
  },
  listId: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="item" v-for="item of items" :key="item.id">
    <ItemCopy
      :color="item.color"
      v-for="copy of item.quantity"
      :key="copy"
      @click="store.decreaseQuantity(listId, item.id)"
    />
  </div>
</template>

<style scoped>
.item {
  display: flex;
  gap: 0.3em;
}
</style>
