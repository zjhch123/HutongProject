const debounce = (func, delay = 300) => {
  let timeoutId = 0
  return (...rest) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.call(this, rest)
    }, delay)
  }
}

const formatNumber = (s) => {
  return ('00' + s).slice(-2);
}

const formatDate = (s) => {
  let d = null
  try {
    d = new Date(s)
  } catch (e) {
    d = new Date()
  }
  return `${d.getFullYear()}-${formatNumber(d.getMonth() + 1)}-${formatNumber(d.getDate())} ${formatNumber(d.getHours())}:${formatNumber(d.getMinutes())}`
}

export default {
  debounce,
  formatNumber,
  formatDate,
}