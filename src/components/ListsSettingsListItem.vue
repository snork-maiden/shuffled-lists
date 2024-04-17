<script setup>
 defineProps({
  itemData: {
    type: Object,
    required: true
  },
  listId: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <input
    type="checkbox"
    name="display-item-list"
    :id="`display-item-${itemData.id}-list-${listId}`"
    class="display"
  />
  <label :for="`display-item-${itemData.id}-list-${listId}`" class="title">{{itemData.name}}</label>
  <input type="number" class="quantity" min="0" :value="itemData.quantity" step="1" />
  <input type="color" class="color-picker" :value="itemData.color" />
</template>

<style scoped></style>
