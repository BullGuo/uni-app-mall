import type { BaseProfile } from '@/types/global'

export type UserInfo = BaseProfile & {
  mobile: string
  token: string
}
