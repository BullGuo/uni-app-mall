<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="nav-bar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="nav-bar-logo">
      <image class="logo-image" src="@/static/images/logo.png" />
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <view class="nav-bar-search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<style lang="scss">
.nav-bar {
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;

  &-logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding: 20rpx 0 0 30rpx;

    .logo-image {
      width: 166rpx;
      height: 39rpx;
    }

    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }

  &-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 64rpx;
    margin: 16rpx 20rpx;
    color: #fff;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: rgba(255, 255, 255, 0.5);

    .icon-search {
      &::before {
        margin-right: 10rpx;
      }
    }

    .icon-scan {
      font-size: 30rpx;
      padding: 15rpx;
    }
  }
}
</style>
