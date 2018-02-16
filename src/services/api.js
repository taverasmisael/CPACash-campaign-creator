import fetch from 'unfetch'

export const InitData = async id => {
  const BaseUrl = 'https://gist.githubusercontent.com/anonymous/b9dbf5e6956afe6302c55ebf5c9a3446/raw/a9cd567109ec82edc5ad4be2404fe6c54df53e9f/json'
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
