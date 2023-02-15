/**
 * @param {date} date - new Date
 * @param {string} format
 * @description Date to string
 * @returns format string
 */
/* eslint-disable */
export function dateFormat(date, format = 'YYYY-MM-DD') {
  const o = {
    'M+': date.getMonth() + 1, // month
    'D+': date.getDate(), // day
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds(), // millisecond
  }
  if (/(Y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (const k in o)
    if (new RegExp('(' + k + ')').test(format))
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
  return format
}
