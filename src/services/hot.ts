import { http } from '@/utils/http'

import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'

// 热门推荐
export const getHotCommon = (url: string, data?: PageParams & { subType: string }) => {
  return http<HotResult>({ url, method: 'GET', data })
}
