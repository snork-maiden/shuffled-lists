<script setup>
import ItemCopy from './ItemCopy.vue';

 defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="item" v-for="item of items" :key="item.id">
    <ItemCopy :color="item.color" v-for="copy of item.quantity" :key="copy"/>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  gap: 0.3em;
}
</style>
