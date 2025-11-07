import { HYRequestConfig, HYRequestInterceptors } from './type'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class HYRequest {
  instance: AxiosInstance
  interceptor: HYRequestInterceptors | null

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    this.interceptor = config.interceptor ?? null

    this.instance.interceptors.request.use(
      config.interceptor?.requestInterceptor as AxiosInstance,
      config.interceptor?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      config.interceptor?.responseInterceptor,
      config.interceptor?.responseInterceptorCatch
    )
  }

  request<T>(config: HYRequestConfig<AxiosRequestConfig, T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: HYRequestConfig<AxiosRequestConfig, T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: HYRequestConfig<AxiosRequestConfig, T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: HYRequestConfig<AxiosRequestConfig, T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  put<T>(config: HYRequestConfig<AxiosRequestConfig, T>): Promise<T> {
    return this.request({ ...config, method: 'PUT' })
  }

  patch<T>(config: HYRequestConfig<AxiosRequestConfig, T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
