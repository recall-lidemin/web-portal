import { getKeyValue } from '@/utils/data'

// 组织类型、维度
export enum DEM {
  xzwd = 'xzwd',
  dzzwd = 'dzzwd'
}
export const demOptions = [
  { value: DEM.xzwd, label: '行政部门' },
  { value: DEM.dzzwd, label: '党组织' }
]
export const demKeyValue = getKeyValue(demOptions)
