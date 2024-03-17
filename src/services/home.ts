import { http } from '@/utils/http'

/**
 * @description 获取轮播图广告数据
 * @param distributionSite 1 为首页 2 为商品分类页
 */
export const getHomeBanner = <T>(distributionSite: 1 | 2 = 1) => {
  return http<T>({ url: '/home/banner', method: 'GET', data: { distributionSite } })
}
