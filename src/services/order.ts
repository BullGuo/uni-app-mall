import type {
  OrderPreResult,
  OrderCreateParams,
  OrderResult,
  OrderListParams,
  OrderListResult,
} from '@/types/order'
import { http } from '@/utils/http'

// 获取预付订单
export const getOrderPre = () => {
  return http<OrderPreResult>({ url: '/member/order/pre', method: 'GET' })
}

// 获取立即购买订单
export const getOrderNow = (data: { skuId: string; count: string; addressId?: string }) => {
  return http<OrderPreResult>({ url: '/member/order/pre/now', method: 'GET', data })
}

// 提交订单
export const submitOrder = (data: OrderCreateParams) => {
  return http<{ id: string }>({ url: '/member/order', method: 'POST', data })
}

// 获取订单详情
export const getOrderDetail = (id: string) => {
  return http<OrderResult>({ url: `/member/order/${id}`, method: 'GET' })
}

// 获取订单列表
export const orderList = (data: OrderListParams) => {
  return http<OrderListResult>({ url: '/member/order', method: 'GET', data })
}
