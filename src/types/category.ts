import type { GoodsItem } from './global'

export type CategoryChildItem = {
  goods: GoodsItem[]
  id: string
  name: string
  picture: string
}

export type CategoryTopItem = {
  children: CategoryChildItem[]
  id: string
  imageBanners: string[]
  name: string
  picture: string
}
