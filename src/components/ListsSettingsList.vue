<script setup>
import { computed, ref } from 'vue'
import ListsSettingsListItem from './ListsSettingsListItem.vue'
import IconExpand from './icons/IconExpand.vue'
import ButtonWithIcon from './ButtonWithIcon.vue'
import ListsSettingsListCheckbox from './ListsSettingsListCheckbox.vue'

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
  <ButtonWithIcon @click="isExpand = !isExpand">
    <IconExpand :role="isExpand ? 'hide' : 'expand'" />
  </ButtonWithIcon>
  
  <ListsSettingsListCheckbox :list-data="listData" />

  <h3 class="title">{{ listData.name }}</h3>
  <ul class="items" v-if="isExpand">
    <li class="item" v-for="item of listData.items" :key="item.id">
      <ListsSettingsListItem :item-id="item.id" :list-id="id" />
    </li>
  </ul>
</template>

<style scoped>
.expand {
  display: flex;
  background: none;
  border: none;
}
</style>
