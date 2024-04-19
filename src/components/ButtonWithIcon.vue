<template>
  <button type="button" class="button"><slot></slot></button>
</template>

<style scoped>
.button {
  display: grid;
  place-items: center;
  background: none;
  background-color: #fff;
  border: none;
}
</style>
