<script setup>
import IconCheckmark from './icons/IconCheckmark.vue'
defineProps({
  checked: {
    type: Boolean,
    required: true
  }
})

defineEmits({
  click: null
})
</script>

<template>
  <label class="checkbox">
    <input
      type="checkbox"
      name="display-list-btn"
      class="input"
      :checked="checked"
      @click="$emit('click')"
    />
    <span class="checkmark"><IconCheckmark /></span>
  </label>
</template>

<style scoped>
.checkbox {
  cursor: pointer;
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  background-color: #fff;
}

.input {
  display: none;
}

.checkmark {
  display: none;
}

.input:checked + .checkmark {
  display: grid;
  place-items: center;
}
</style>
