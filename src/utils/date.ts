// 格式化个位数时间
function fomart(params: any) {
  if (params.toString().length < 2) {
    return '0' + params
  } else {
    return params
  }
}

// 得到时间并写入div
export function getDate() {
  // 获取当前时间
  let date = new Date()
  // 格式化为本地时间格式
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let h = fomart(date.getHours())
  let m = fomart(date.getMinutes())
  let s = fomart(date.getSeconds())

  return year + '年' + month + '月' + day + '日' + ' ' + h + ':' + m + ':' + s
}

export function getMonthStr() {
  const month = new Date().getMonth() || 12
  return month < 10 ? `0${month}` : `${month}`
}
