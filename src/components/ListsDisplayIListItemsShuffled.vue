<script setup>
import { computed } from 'vue'
import ItemCopy from './ItemCopy.vue'
import { useListsStore } from '@/stores/lists';
const store = useListsStore()

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  listId: {
    type: Number,
    required: true
  }
})

const itemsCopies = computed(() => {
  let itemsCopies = []
  props.items.forEach((item) => {
    let arr = []
    arr.length = item.quantity
    arr.fill({ color: item.color, id: item.id })
    itemsCopies = [...itemsCopies, ...arr]
  })
  return itemsCopies
})

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5)
}
</script>

<template>
    <div class="item">
      <ItemCopy
        v-for="(copy, index) of shuffle(itemsCopies)"
        :color="copy.color"
        :key="index"
        @click="store.decreaseQuantity(listId, copy.id)"
      />
    </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-wrap: wrap;
  gap: var( --item-copy-gap);
}
</style>
