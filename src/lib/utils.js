const debounce = (func, delay = 300) => {
  let timeoutId = 0
  return (...rest) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.call(this, rest)
    }, delay)
  }
}

export default {
  debounce,
}