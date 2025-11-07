import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYRequestInterceptors<
  T = AxiosRequestConfig,
  R = AxiosResponse
> {
  requestInterceptor?: (config: T) => T
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: R) => R
  responseInterceptorCatch?: (err: any) => any
}

export interface HYRequestConfig<T = AxiosRequestConfig, R = AxiosResponse>
  extends AxiosRequestConfig {
  interceptor?: HYRequestInterceptors<T, R>
  showLoading?: boolean
}
