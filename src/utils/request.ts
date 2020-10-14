/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import axios from 'axios'
import { message } from 'antd'
import { prefix } from '@/config'
import { getLocalToken, removeLocalToken } from '@/utils/local'
import { combineURL } from '@/utils/url'

const ERR_OK = 0
const ERR_TOKEN = 401 // token失效或者丢失 需要重新登录
const ERR_LOGIN = 1010 // token失效或者丢失 需要重新登录

const service = axios.create({
  baseURL: '',
  timeout: 20000
})
const codeMessage: any = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户信息失效，请重新登录',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

service.interceptors.request.use((config: any) => {
  const token = getLocalToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  config.url = combineURL(prefix, config.url)
  return config
})

service.interceptors.response.use(
  async (response: any): Promise<any> => {
    const {
      request,
      status,
      data: { code, data, msg }
    }: any = response
    const { responseType } = request
    // 权限问题  token 401
    if (status === 200) {
      // 导出文件时 responseType 为 blob
      if (responseType === 'blob') {
        return Promise.resolve(response.data)
      }
      // 登录页面需要res
      if (code === ERR_LOGIN) {
        message.error(msg || '请求失败')
        return response.data
      }
      // token失效
      if (code === ERR_TOKEN) {
        removeLocalToken()
        window.location.href = combineURL(__webpack_public_path__, '/login')
      }
      if (!code && code !== ERR_OK) {
        return response.data
      }
      if (code === ERR_OK) {
        return data
      }
      message.error(msg || '请求失败')
      return Promise.reject(response.data)
    }
    message.error(codeMessage[status])
    return Promise.reject(response.data)
  },
  (e) => {
    const { status } = e?.response
    // token失效
    if (status === ERR_TOKEN) {
      removeLocalToken()
      window.location.href = combineURL(__webpack_public_path__, '/user/login')
      message.error(codeMessage[ERR_TOKEN])
      return Promise.reject(e)
    }
    message.error(codeMessage[status])
    return Promise.reject(e)
  }
)

export default service as any
