import Cookie from 'js-cookie'

export function getNews(page) {
  return fetch(`/api/news/getNews?page=${page}`)
          .then(res => res.json())
}

export function getSwiperNews() {
  return fetch(`/api/news/getSwiperNews`)
          .then(res => res.json())
}

export function getActs(page) {
  return fetch(`/api/acts/getActs?page=${page}`)
          .then(res => res.json())
}

export function getActDetail(id) {
  return fetch(`/api/acts/getActDetail?id=${id}`)
          .then(res => res.json())
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