<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import Skeleton from './components/Skeleton.vue'
import { getHomeBanner, getHomeCategory, getHomeHot } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { ComGuessInstance } from '@/types/component'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const guessRef = ref<ComGuessInstance | null>(null)
let isRefresher = ref(false)

async function getBannerData() {
  const res = await getHomeBanner()
  bannerList.value = res.result
}

async function getCategoryData() {
  const res = await getHomeCategory()
  categoryList.value = res.result
}

async function getHtoData() {
  const res = await getHomeHot()
  hotList.value = res.result
}

function handleScroll() {
  guessRef.value?.getGuessData()
}

async function handleRefresh() {
  isRefresher.value = true
  guessRef.value?.resetGuessData()
  await Promise.all([
    getBannerData(),
    getCategoryData(),
    getHtoData(),
    guessRef.value?.getGuessData(),
  ])
  isRefresher.value = false
}

onLoad(() => {
  getBannerData()
  getCategoryData()
  getHtoData()
})
</script>

<template>
  <nav-bar />
  <scroll-view
    scroll-y
    refresher-enabled
    :refresher-triggered="isRefresher"
    class="scroll-view"
    @scrolltolower="handleScroll"
    @refresherrefresh="handleRefresh"
  >
    <com-swiper :list="bannerList" />
    <category-panel :list="categoryList" />
    <hot-panel :list="hotList" />
    <com-guess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;

  .scroll-view {
    flex: 1;
  }
}
</style>
