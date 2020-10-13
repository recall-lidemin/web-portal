import request from '@/utils/request'
import { DEM } from '@/constants'

interface FetchUserListParams {
  demCode: DEM
  orgId: string
  recursion?: 1
  fullname?: string
  pageNo?: number
  pageSize?: number
}

export function fetchUserList(params?: FetchUserListParams) {
  return request('/uc/api/user/v2/user/queryUserList', {
    method: 'post',
    data: params
  })
}
