import 'vue'
import ComGuess from '@/components/com-guess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    ComSwiper: typeof import('@/components/com-swiper.vue')['default']
    ComGuess: typeof ComGuess
  }
}

export type ComGuessInstance = InstanceType<typeof ComGuess>
