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
  type: string
}

export interface GuessItem {
  id: string
  name: string
  desc: string
  price: number
  picture: string
  discount: number
  orderNum: number
}

export interface PageResult<T> {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: T[]
}

export interface pageParams {
  page: number
  pageSize: number
}
