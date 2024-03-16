import { useMemberStore } from '@/stores'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(option: UniApp.RequestOptions) {
    if (!option.url.startsWith('http://')) {
      option.url = baseUrl + option.url
    }
    option.timeout = 10000
    option.header = {
      ...option.header,
      'source-client': 'miniapp',
    }
    const userInfo = useMemberStore()
    const token = userInfo?.profile?.token
    if (token) {
      option.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface successResult<T> {
  code: string
  msg: string
  result: T
}

export const http = <T>(option: UniApp.RequestOptions) => {
  return new Promise<successResult<T>>((resolve, reject) => {
    uni.request({
      ...option,
      success(res) {
        const successData = <successResult<T>>res.data
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(successData)
        } else if (res.statusCode === 401) {
          const { clearProfile } = useMemberStore()
          clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(successData.msg)
        } else {
          uni.showToast({
            icon: 'none',
            title: successData.msg || '数据获取失败',
          })
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}
