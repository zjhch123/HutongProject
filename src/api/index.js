import Cookie from 'js-cookie'

const mem = (() => {
  const map = {}
  return {
    push(k, v) {
      if (map[k]) {
        return
      }
      map[k] = v
      setTimeout(() => {
        delete map[k]
      }, 10000)
    },
    get(k) {
      return map[k]
    }
  }
})()

const memFetch = (url) => {
  const memValue = mem.get(url)
  if (typeof memValue !== 'undefined' && memValue !== null) {
    return new Promise((resolve) => {
      resolve(memValue)
    })
  } else {
    return fetch(url).then((res) => {
      const json = res.json()
      mem.push(url, json)
      return json
    })
  }
}

export function getNews(page) {
  return memFetch(`/api/news/getNews?page=${page}`)
}

export function getSwiperNews() {
  return memFetch(`/api/news/getSwiperNews`)
}

export function getActs(page) {
  return memFetch(`/api/acts/getActs?page=${page}`)
}

export function getActDetail(id) {
  return memFetch(`/api/acts/getActDetail?id=${id}`)
}

export function submitAct(data) {
  return fetch('/api/acts/submit', {
    method: 'POST',
    headers: {
      'x-csrf-token': Cookie.get('csrfToken'),
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data),
    credentials: 'include',
  }).then(res => res.json())
}

export function comment(data) {
  return fetch('/api/acts/comment', {
    method: 'POST',
    headers: {
      'x-csrf-token': Cookie.get('csrfToken'),
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data),
    credentials: 'include',
  }).then(res => res.json())
}

export function getComments(id) {
  return memFetch(`/api/acts/getComments?id=${id}`)
}