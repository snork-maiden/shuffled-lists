import { ref } from 'vue'
import { defineStore } from 'pinia'
import defaultState from '@/defaultState'

export const useListsStore = defineStore('lists', () => {
  const listsData = ref([...defaultState])

  function getItem(listId, itemId) {
    const list = listsData.value.find(list => list.id === listId);
    const item = list.items.find(item => item.id === itemId);
    return item
  }
  function setColor({ listId, itemId, hexCode }) {
    const item = getItem(listId, itemId);
    item.color = hexCode;
  }
  function setQuantity({ listId, itemId, quantity }) {
    const item = getItem(listId, itemId);
    item.quantity = quantity;
  }
  return { listsData, setColor, setQuantity }
})
