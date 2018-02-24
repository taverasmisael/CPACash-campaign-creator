import { map } from 'ramda'

import { GetOffers } from './api'
import FetchError from './FetchError'
import { mapOffers, getConditionId, transformValues } from '../utilities/normalizers'

export const GetOffersList = async conditions => {
  try {
    const offers = await GetOffers(conditions)
    return mapOffers(offers)
  } catch (error) {
    throw new FetchError('OL001', `[OFFERS]: Error Loading Offers with ${conditions.length} conditions`, error)
  }
}
export const prepareConditions = map(c => ({ id: getConditionId(c.conditionKey), values: transformValues(c.value) }))
