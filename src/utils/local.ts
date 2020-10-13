export const storage = sessionStorage

export function getLocalToken(): string {
  return storage.token
}

export function setLocalToken(token: string) {
  storage.token = token
}

export function getLocalappId(): string {
  return storage.appid
}
export function setLocalappId(appid: string) {
  storage.appid = appid
}

export function removeLocalToken() {
  storage.removeItem('token')
}
