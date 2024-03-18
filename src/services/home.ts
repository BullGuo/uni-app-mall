import type { PageResult, pageParams } from '@/types/global'
import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * @description 获取轮播图广告数据
 * @param distributionSite 1 为首页 2 为商品分类页
 */
export const getHomeBanner = (distributionSite: 1 | 2 = 1) => {
  return http<BannerItem[]>({ url: '/home/banner', method: 'GET', data: { distributionSite } })
}

// 获取前台分类数据
export const getHomeCategory = () => {
  return http<CategoryItem[]>({ url: '/home/category/mutli', method: 'GET' })
}

// 获取热门推荐数据
export const getHomeHot = () => {
  return http<HotItem[]>({ url: '/home/hot/mutli', method: 'GET' })
}

// 获取猜你喜欢数据
export const getHomeGuess = (params: pageParams) => {
  return http<PageResult<GuessItem>>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data: params,
  })
}
