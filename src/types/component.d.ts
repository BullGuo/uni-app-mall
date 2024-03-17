import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    ComSwiper: typeof import('@/components/com-swiper.vue')['default']
  }
}
