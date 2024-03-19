import type { ProfileDetail, ProfileParams } from '@/types/profile'
import { http } from '@/utils/http'

// 获取个人信息
export const getUserInfo = () => {
  return http<ProfileDetail>({ url: '/member/profile', method: 'GET' })
}

// 修改个人信息
export const setUserInfo = (data: ProfileParams) => {
  return http<ProfileParams>({ url: '/member/profile', method: 'PUT', data })
}
