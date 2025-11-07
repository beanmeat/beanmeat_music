import HYRequest from './request/index'
import { BASE_URL, TIMEOUT } from './config/index'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptor: {
    requestInterceptor: (config: any) => {
      return config
    },
    responseInterceptor: (res: any) => {
      return res
    },
    requestInterceptorCatch: (err: any) => {
      return err
    },
    responseInterceptorCatch: (err: any) => {
      return err
    }
  }
})

export default hyRequest
