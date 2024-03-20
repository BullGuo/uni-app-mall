import type { AddressItem } from './address'
import type { GoodsItem } from './global'

/** 商品信息 */
export type GoodsResult = {
  id: string
  name: string
  desc: string
  price: number
  oldPrice: number
  details: Details
  mainPictures: string[]
  similarProducts: GoodsItem[]
  skus: SkuItem[]
  specs: SpecItem[]
  userAddresses: AddressItem[]
}

/** 商品详情: 包含详情属性 + 详情图片 */
export type Details = {
  properties: DetailsPropertyItem[]
  pictures: string[]
}

/** 属性信息 */
export type DetailsPropertyItem = {
  name: string
  value: string
}

/** sku信息 */
export type SkuItem = {
  id: string
  inventory: number
  oldPrice: number
  picture: string
  price: number
  skuCode: string
  specs: SkuSpecItem[]
}

/** 规格信息 */
export type SkuSpecItem = {
  name: string
  valueName: string
}

/** 可选规格信息 */
export type SpecItem = {
  name: string
  values: SpecValueItem[]
}

/** 可选值信息 */
export type SpecValueItem = {
  available: boolean
  desc: string
  name: string
  picture: string
}
