import fetch from 'unfetch'

const EDITURL =
  'https://gist.githubusercontent.com/anonymous/a84ddc3edb4e6baf7c0ad0d72c9b2a4e/raw/f268371916e48dccc7ed645164ac559695399d98/json'
const CREATEURL =
  'https://gist.githubusercontent.com/anonymous/b9dbf5e6956afe6302c55ebf5c9a3446/raw/a9cd567109ec82edc5ad4be2404fe6c54df53e9f/json'
export const InitData = async id => {
  const BaseUrl = id ? EDITURL : CREATEURL
  try {
    const res = await fetch(`${BaseUrl}${id ? `?id=${id}` : ''}`)
    if (res.ok) {
      const result = await res.json()
      return result
    } else {
      throw new Error(res.status)
    }
  } catch (error) {
    throw error
  }
}
