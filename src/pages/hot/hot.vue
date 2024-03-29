<script setup lang="ts">
import { getHotCommon } from '@/services/hot'
import type { SubTypeItem } from '@/types/hot'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

const props = defineProps<{ type: string }>()
const currentHot = hotMap.find((item) => item.type === props.type)
uni.setNavigationBarTitle({ title: currentHot!.title })

const subTypes = ref<(SubTypeItem & { finish?: boolean })[]>([])
const bannerPicture = ref('')
const activeIndex = ref(0)

onLoad(async () => {
  const res = await getHotCommon(currentHot!.url)
  bannerPicture.value = res.result.bannerPicture
  subTypes.value = res.result.subTypes
})

async function handleScroll() {
  const currSubTypes = subTypes.value[activeIndex.value]
  if (currSubTypes.goodsItems.page < currSubTypes.goodsItems.pages) {
    currSubTypes.goodsItems.page++
  } else {
    currSubTypes.finish = true
    return uni.showToast({ icon: 'none', title: '已经到底了~' })
  }
  const res = await getHotCommon(currentHot!.url, {
    subType: currSubTypes.id,
    page: currSubTypes.goodsItems.page,
    pageSize: currSubTypes.goodsItems.pageSize,
  })
  const newsubTypes = res.result.subTypes[activeIndex.value]
  currSubTypes.goodsItems.items.push(...newsubTypes.goodsItems.items)
}
</script>

<template>
  <view class="viewport">
    <view class="cover">
      <image :src="bannerPicture" />
    </view>
    <view class="tabs">
      <text
        v-for="(item, index) of subTypes"
        :key="item.id"
        :class="['text', { active: activeIndex === index }]"
        @tap="activeIndex = index"
      >
        {{ item.title }}
      </text>
    </view>
    <scroll-view
      scroll-y
      class="scroll-view"
      v-for="(item, index) of subTypes"
      :key="item.id"
      v-show="activeIndex === index"
      @scrolltolower="handleScroll"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods of item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture" />
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.finish ? '已经到底了~' : '正在加载中...' }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}

.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}

.scroll-view {
  flex: 1;
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;

  .text {
    margin: 0 20rpx;
    position: relative;
  }

  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;

  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  .thumb {
    width: 305rpx;
    height: 305rpx;
  }

  .name {
    height: 88rpx;
    font-size: 26rpx;
  }

  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }

  .symbol {
    font-size: 70%;
  }

  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
