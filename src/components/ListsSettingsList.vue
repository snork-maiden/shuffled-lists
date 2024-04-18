<script setup>
import { computed, ref } from 'vue'
import ListsSettingsListItem from './ListsSettingsListItem.vue'
import { useListsStore } from '@/stores/lists'
const store = useListsStore()

const props = defineProps({
  listData: {
    type: Object,
    required: true
  }
})

let isExpand = ref(false)
let isChecked = ref(false)
// let showDot = ref(false)

const id = computed(() => props.listData.id)
const items = computed(() => props.listData.items)
const selectedLength = computed(() => items.value.filter((item) => item.selected).length)

function handleClick() {
  if (selectedLength.value === props.listData.items.length) {
    store.unselectList(id.value)
    return
  }
  store.selectList(id.value)
  if (selectedLength.value === 0) {
    return
  }

}
</script>

<template>
  <button type="button" class="expand" @click="isExpand = !isExpand">
    {{ isExpand ? 'hide' : 'expand' }}
  </button>
  <input
    type="checkbox"
    name="display-list-btn"
    :id="`display-list-${id}-btn`"
    class="display"
    @click="handleClick"
    v-model="isChecked"
  />
  <label :for="`display-list-${id}-btn`" class="title">{{ listData.name }}</label>
  <ul class="items" v-if="isExpand">
    <li class="item" v-for="item of listData.items" :key="item.id">
      <ListsSettingsListItem :item-id="item.id" :list-id="id" />
    </li>
  </ul>
</template>

<style scoped></style>
