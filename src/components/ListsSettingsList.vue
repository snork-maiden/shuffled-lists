<script setup>
import { ref } from 'vue'
let isExpand = ref(false)
</script>

<template>
  <button type="button" class="expand" @click="isExpand = !isExpand">expand</button>
  <input type="checkbox" name="display-list-1-btn" id="display-list-1-btn" class="display" />
  <label for="display-list-1-btn" class="title"></label>
  <ul class="items" v-if="isExpand">
  <li class="item">

  </li>
</ul>
</template>

<style scoped></style>
