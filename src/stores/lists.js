import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import defaultState from '@/defaultState'

export const useListsStore = defineStore('lists', () => {
  const listsData = ref([...defaultState])

  const listsWithSelectedItems = computed(() => {
    const listsWithoutUnselectedItems = listsData.value.map(list => {
      return {
        ...list,
        items: list.items.filter(item => item.selected)
      };
    })
    return listsWithoutUnselectedItems.filter(list => list.items.length > 0);
  });

  function getList(listId) {
    return listsData.value.find(list => list.id === listId);
  }

  function getItem(listId, itemId) {
    const list = getList(listId);
    const item = list.items.find(item => item.id === itemId);
    return item
  }
  function setColor({ listId, itemId, color }) {
    const item = getItem(listId, itemId);
    item.color = color;
  }
  function setQuantity({ listId, itemId, quantity }) {
    const item = getItem(listId, itemId);
    item.quantity = quantity;
  }

  function decreaseQuantity(listId, itemId) {
    const item = getItem(listId, itemId);
    item.quantity -= 1;
  }

  function selectList(listId) {
    getList(listId).items.forEach(item => item.selected = true)
  }
  function unselectList(listId) {
    getList(listId).items.forEach(item => item.selected = false)
  }

  function toggleItemSelect(listId, itemId) {
    const item = getItem(listId, itemId);
    item.selected = !item.selected
  }
  return { listsData, listsWithSelectedItems, getItem, setColor, setQuantity, selectList, unselectList, toggleItemSelect, decreaseQuantity }
})
