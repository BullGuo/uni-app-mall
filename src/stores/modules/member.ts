import type { UserInfo } from '@/types/userInfo'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMemberStore = defineStore(
  'member',
  () => {
    const profile = ref<UserInfo>()

    const setProfile = (val: UserInfo) => {
      profile.value = val
    }

    const clearProfile = () => {
      profile.value = undefined
    }

    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
