import type { GoodsItem, PageResult } from './global'

export interface SubTypeItem {
  id: string
  title: string
  goodsItems: PageResult<GoodsItem>
}

export interface HotResult {
  title: string
  id: string
  bannerPicture: string
  subTypes: SubTypeItem[]
}
