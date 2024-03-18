import type { GoodsItem } from './global'

export interface BannerItem {
  id: string
  imgUrl: string
  hrefUrl: string
  type: number
}

export interface CategoryItem {
  id: string
  name: string
  icon: string
}

export interface HotItem {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: number
}

export type GuessItem = GoodsItem
