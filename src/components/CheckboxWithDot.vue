<script setup>
import { computed, ref, watch } from 'vue'
import { useListsStore } from '@/stores/lists'
import IconCheckmark from './icons/IconCheckmark.vue'
const store = useListsStore()

const props = defineProps({
  listData: {
    type: Object,
    required: true
  }
})

let isChecked = ref(false)
let showDot = ref(false)
let showCheckmark = ref(false)

const id = computed(() => props.listData.id)
const items = computed(() => props.listData.items)
const selectedLength = computed(() => items.value.filter((item) => item.selected).length)

watch(selectedLength, (selectedLength) => {
  if (selectedLength === props.listData.items.length) {
    showCheckmark.value = true
    showDot.value = false
    return
  }
  showCheckmark.value = false

  if (!selectedLength) {
    showDot.value = false
    return
  }
  showDot.value = true
})

function handleClick() {
  if (selectedLength.value === props.listData.items.length) {
    store.unselectList(id.value)
    return
  }
  store.selectList(id.value)
}
</script>

<template>
  <label class="checkbox">
    <input
      type="checkbox"
      name="display-list-btn"
      class="input"
      @click="handleClick"
      v-model="isChecked"
    />
    <span v-if="showDot" class="dot"></span>
    <span v-if="showCheckmark" class="checkmark"><IconCheckmark /></span>
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

.dot {
  width: 8px;
  height: 8px;
  background-color: #194485;
  border-radius: 50%;
}

.input {
  display: none;
}

.checkmark {
  display: grid;
  place-items: center;
}
</style>
