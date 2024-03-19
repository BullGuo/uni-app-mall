import type { BaseProfile } from '@/types/global'

export type Gender = '男' | '女'

export type ProfileDetail = BaseProfile & {
  gender?: Gender
  birthday?: string
  fullLocation?: string
  profession?: string
}

export type ProfileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  provinceCode?: string
  cityCode?: string
  countyCode?: string
}
