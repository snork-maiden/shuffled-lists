<script setup>
import { computed } from 'vue'
import ItemCopy from './ItemCopy.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const itemsCopies = computed(() => {
  let itemsCopies = []
  props.items.forEach((item) => {
    let arr = []
    arr.length = item.quantity
    arr.fill(item.color)
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
    <ItemCopy v-for="(color, index) of shuffle(itemsCopies)" :color="color" :key="index" />
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
}
</style>
