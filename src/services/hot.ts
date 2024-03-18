import { http } from '@/utils/http'

import type { pageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'

// 热门推荐
export const getHotCommon = (url: string, data?: pageParams & { subType: string }) => {
  return http<HotResult>({ url, method: 'GET', data })
}
