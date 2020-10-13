/* eslint-disable */
// import { getLocalToken } from './local';

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
/**
 * 拼接 url
 * @param {*} urls
 */
export function combineURL(...urls: any[]) {
  const ret = urls.map((url) => {
    if (!url) return url
    if (isExternal(url)) {
      return url.replace(/\/+$/, '')
    }
    return url.replace(/^\/+/, '').replace(/\/+$/, '')
  })
  const url = ret.filter((r) => r).join('/')
  return isExternal(url) ? url : `/${url}`
}
