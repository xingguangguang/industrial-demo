export function formatDate(date, format = 'yyyy-MM-dd hh:mm:ss') {
  if (!date) return '';
  const convertToDate = date => {
    if (isNaN(new Date(date).getTime())) {
      throw new Error(`${date} 不是一个有效的时间`);
    }
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date;
  };
  date = convertToDate(date);
  const o = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `0${o[k]}`.substr(-RegExp.$1.length)
      );
    }
  }
  return format;
}