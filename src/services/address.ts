import type { AddressParams, AddressItem } from '@/types/address'
import { http } from '@/utils/http'

// 添加收货地址
export const addAddress = (data: AddressParams) => {
  return http({ url: '/member/address', method: 'POST', data })
}

// 修改收货地址
export const setAddress = (id: string, data: AddressParams) => {
  return http({ url: `/member/address/${id}`, method: 'PUT', data })
}

// 获取收货地址列表
export const getAddressList = () => {
  return http<AddressItem[]>({ url: '/member/address', method: 'GET' })
}

// 获取收货地址详情
export const getAddressDetail = (id: string) => {
  return http<AddressItem>({ url: `/member/address/${id}`, method: 'GET' })
}

// 删除收货地址
export const delAddress = (id: string) => {
  return http({ url: `/member/address/${id}`, method: 'DELETE' })
}
