import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const baseURL = 'https://api.algobet-sports.com/api/'

const apiClient = axios.create({
  baseURL,
  withCredentials: true,
  responseType: 'json',
})
const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:3000'
}

const defaultHeaderCr = async (): Promise<AxiosRequestConfig> => {
  const defaultHeader: AxiosRequestConfig = {
    headers: { ...defaultHeaders },
  }
  return defaultHeader
}


const mergeConfig = async (config?: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const _defaultHeader = await defaultHeaderCr()
  let headers = _defaultHeader.headers
  if (config && config.headers) {
    headers = { ...headers, ...config.headers }
  }
  return { ..._defaultHeader, ...config, headers }
}

const requestErrorHandler = (error?: any, skipAlert: boolean = false): Promise<any> => {
  return Promise.reject(error)
}

export async function get(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
  const _config = await mergeConfig(config)
  return apiClient
    .get(`${url}?${getUriWithParam(data)}`, _config)
    .then((res) => res)
    .catch(requestErrorHandler)
}

const getUriWithParam = (params: any) => {
  // const Url = new URL(baseUrl);
  const urlParams = new URLSearchParams('')
  for (const key in params) {
    if (params[key] !== undefined && params[key] !== '') {
      urlParams.set(key, params[key])
    }
  }
  return urlParams.toString()
}

export async function post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
  const _config = await mergeConfig(config)
  return apiClient
    .post(`${url}`, data, _config)
    .then((res) => res.data)
    .catch(requestErrorHandler)
}
 