import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

// 加入购物车
export const addCart = (data: { skuId: string; count: number }) => {
  return http({ url: '/member/cart', method: 'POST', data })
}

// 获取购物车数据
export const getCartList = () => {
  return http<CartItem[]>({ url: '/member/cart', method: 'GET' })
}

// 删除购物车商品
export const delCart = (ids: string[]) => {
  return http({ url: '/member/cart', method: 'DELETE', data: { ids } })
}

// 修改购物车单品数量
export const setCartNum = (skuId: string, data: { selected?: boolean; count?: number }) => {
  return http({ url: `/member/cart/${skuId}`, method: 'PUT', data })
}

// 修改购物车全选状态
export const setCartSelect = (selected: boolean) => {
  return http({ url: '/member/cart/selected', method: 'PUT', data: { selected } })
}
