export interface IConfig {
  credentials: 'same-origin'
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
    'Content-Type': 'application/json'
  }
  method?: 'post' | 'get'
  body?: any
}

const fetchUrl = async (url: string, data?: object) => {
  const config: IConfig = {
    credentials: 'same-origin',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    }
  }

  if (data) {
    config.method = 'post'
    config.body = JSON.stringify(data)
  }

  const payload = await fetch(url, config)
  const response = await payload.json()

  return response
}

export default fetchUrl
