<script setup>
import { useListsStore } from '@/stores/lists'
import { computed, onMounted, ref, watch } from 'vue'
const store = useListsStore()

const props = defineProps({
  listId: {
    type: Number,
    required: true
  },
  itemId: {
    type: Number,
    required: true
  }
})

const itemData = computed(() => store.getItem(props.listId, props.itemId))

const quantity = ref()
const color = ref()
const storeQuantity = computed(() => itemData.value.quantity)

onMounted(() => {
  quantity.value = itemData.value.quantity
  color.value = itemData.value.color
})

watch(storeQuantity, (storeQuantity) => (quantity.value = storeQuantity))
</script>

<template>
  <input
    type="checkbox"
    name="display-item-list"
    :id="`display-item-${itemData.id}-list-${listId}`"
    class="display"
    :checked="itemData.selected"
    @click="store.toggleItemSelect(listId, itemId)"
  />
  <label :for="`display-item-${itemData.id}-list-${listId}`" class="title">{{
    itemData.name
  }}</label>
  <input
    type="number"
    class="quantity"
    min="0"
    step="1"
    v-model="quantity"
    @change="store.setQuantity({ listId, itemId, quantity })"
  />

  <input
    type="color"
    class="color-picker"
    v-model="color"
    @change="store.setColor({ listId, itemId, color })"
  />
  {{ color }}
</template>

<style scoped></style>
