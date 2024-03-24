import type { OrderLogisticResult, OrderResult } from '@/types/order'
import { http } from '@/utils/http'

// 模拟支付-内测版
export const payMock = (orderId: string) => {
  return http({ url: '/pay/mock', method: 'GET', data: { orderId } })
}

// 模拟发货-内测版
export const consignmentMock = (id: string) => {
  return http({ url: `/member/order/consignment/${id}`, method: 'GET' })
}

// 确认收货
export const confirmReceipt = (id: string) => {
  return http<OrderResult>({ url: `/member/order/${id}/receipt`, method: 'PUT' })
}

// 获取订单物流
export const getLogistics = (id: string) => {
  return http<OrderLogisticResult>({ url: `/member/order/${id}/logistics`, method: 'GET' })
}

// 删除订单
export const delOrder = (ids: string[]) => {
  return http({ url: '/member/order', method: 'DELETE', data: { ids } })
}

// 取消订单
export const cancelOrder = (id: string, cancelReason: string) => {
  return http({ url: `/member/order/${id}/cancel`, method: 'PUT', data: { cancelReason } })
}
