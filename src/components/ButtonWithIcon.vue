<template>
  <button type="button" class="button"><slot></slot></button>
</template>

<style scoped>
.button {
  cursor: pointer;
  display: grid;
  place-items: center;
  background: none;
  border: none;
}

.button:hover {
  transform: scale(1.1);
}

.button:active {
  filter: drop-shadow(0 1px 0.75rem rgba(253, 249, 249, 0.6));
}
</style>
