import { http } from '@/utils/http'

// 加入购物车
export const addCart = (data: { skuId: string; count: number }) => {
  return http({ url: '/member/cart', method: 'POST', data })
}
