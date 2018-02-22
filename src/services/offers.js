import { map, find, propEq, prop, split, compose } from 'ramda'

import { GetOffers } from './api'
import FetchError from './FetchError'
import { conditionsLabels } from '../models/conditions'
import { mapOffers } from '../utilities/normalizers'

export const GetOffersList = async conditions => {
  try {
    const offers = await GetOffers(conditions)
    return mapOffers(offers)
  } catch (error) {
    throw new FetchError('OL001', `[OFFERS]: Error Loading Offers with ${conditions.length} conditions`, error)
  }
}
const getConditionId = key => prop('id', find(propEq('value', key), conditionsLabels))
const transformValues = compose(map(v => +v), split(','))
export const prepareConditions = map(c => ({ id: getConditionId(c.conditionKey), values: transformValues(c.value) }))
