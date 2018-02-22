import fetch from 'unfetch'
import { objectToFormData } from '../utilities/normalizers'
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

export const GetOffers = async conditions => {
  const BaseUrl =
    'https://gist.githubusercontent.com/anonymous/7ed85b92ab98c2cb1a5d3ac8f6bab48b/raw/0d8ca18499ca304921ea234a98c3c920191e2143/json '
  const body = objectToFormData({ conditions })
  console.log('this would be body', body)
  try {
    const res = await fetch(BaseUrl)
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
