<script setup></script>

<template>
  <input type="checkbox" name="display-item-1-list-1" id="display-item-1-list-1" class="display" />
  <label for="display-item-1-list-1" class="title">Item 1</label>
  <input type="number" class="quantity" min="0" :value="42" step="1" />
  <input type="color" class="color-picker" value="#e66465" />
</template>

<style scoped></style>
