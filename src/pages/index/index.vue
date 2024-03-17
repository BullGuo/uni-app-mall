<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { getHomeBanner } from '@/services/home'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const homeBannerList = ref<BannerItem[]>([])

async function getBannerData() {
  const res = await getHomeBanner<BannerItem[]>()
  homeBannerList.value = res.result
}

onLoad(() => {
  getBannerData()
})
</script>

<template>
  <nav-bar />
  <com-swiper :list="homeBannerList" />
  <view class="index">index</view>
</template>
