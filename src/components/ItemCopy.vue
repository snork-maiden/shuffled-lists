<script setup>
defineProps({
  hexColor: {
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
  width: 10px;
  height: 10px;
  background-color: v-bind('hexColor');
}
</style>
