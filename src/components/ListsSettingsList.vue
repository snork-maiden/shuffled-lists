<script setup>
import { computed, ref } from 'vue'
import ListsSettingsListItem from './ListsSettingsListItem.vue'
import IconExpand from './icons/IconExpand.vue'
import ButtonWithIcon from './ButtonWithIcon.vue'
import CheckboxWithDot from './CheckboxWithDot.vue'

const props = defineProps({
  listData: {
    type: Object,
    required: true
  }
})

let isExpand = ref(false)

const id = computed(() => props.listData.id)
</script>

<template>
  <div class="wrapper">
    <ButtonWithIcon @click="isExpand = !isExpand">
      <IconExpand :role="isExpand ? 'hide' : 'expand'" />
    </ButtonWithIcon>
  
    <CheckboxWithDot :list-data="listData" />
  
    <h3 class="title">{{ listData.name }}</h3>
  </div>
  <ul class="items" v-if="isExpand">
    <li class="item" v-for="item of listData.items" :key="item.id">
      <ListsSettingsListItem :item-id="item.id" :list-id="id" />
    </li>
  </ul>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.expand {
  display: flex;
  background: none;
  border: none;
}

.items {
  list-style: none;
  display: grid;
  gap: .5em;
  padding-top: 1em;
}

.item {
  display: flex;
  align-items: center;
  gap: 0.7em;
}
</style>
