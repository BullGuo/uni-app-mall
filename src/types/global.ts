export interface PageParams {
  page: number
  pageSize: number
}

export interface PageResult<T> {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: T[]
}

export interface GoodsItem {
  id: string
  name: string
  desc: string
  price: number
  picture: string
  discount: number
  orderNum: number
}

export interface BaseProfile {
  id: number
  avatar: string
  account: string
  nickname?: string
}
