import type { UserInfo } from '@/types/userInfo'
import { http } from '@/utils/http'

// 内测登录
export const testLogin = (phoneNumber: string) => {
  return http<UserInfo>({ url: '/login/wxMin/simple', method: 'POST', data: { phoneNumber } })
}
