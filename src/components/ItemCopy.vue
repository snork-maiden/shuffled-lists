<script setup>
defineProps({
  color: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="box"></div>
</template>

<style scoped>
.box {
  display: block;
  width: 0.9em;
  aspect-ratio: 1/1;
  background-color: v-bind('color');
}
</style>
