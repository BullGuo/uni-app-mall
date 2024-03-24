import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectAddress = ref<AddressItem>()

  function changeAddress(data: AddressItem) {
    selectAddress.value = data
  }
  return { selectAddress, changeAddress }
})
