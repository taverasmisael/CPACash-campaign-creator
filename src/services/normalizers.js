import { normalize as normalizr } from 'normalizr'
import { flip, curry, map, reduce } from 'ramda'

import ConditionsSchema from '../models/schemas/conditions'
import { conditionsLabels } from '../models/conditions'

const normalize = curry(flip(normalizr))

const unique = reduce((acc, curr) => [...acc, ...(acc.includes(curr) ? [] : [curr])], [])
export const listToSelectOptions = map(v => ({ value: v.id, label: v.text, ...v }))
export const countriesToSelectOptions = map(v => ({
  value: v.id,
  label: v.text,
  carriers: listToSelectOptions(v.carriers)
}))
export const devicesToSelectOptions = map(v => ({ value: v.id, label: v.text, os: listToSelectOptions(v.os) }))
export const getRealtionKeys = (key, primary, foregin) =>
  unique(reduce((acc, curr) => [...acc, ...foregin[curr][key]], [], primary))

export const mapKeysToValues = (keys, values) => map(k => values[k], keys)
export const mapOffers = map(offer => ({ value: offer.id || offer.offer_id, id: offer.id || offer.offer_id, ...offer }))
export const mapConditions = map(({ id, condition_id, values, comparation_expression }) => {
  const { label: conditionName, value: conditionKey } = conditionsLabels[condition_id]
  const mode = comparation_expression === '>'
  const value = values.join(',')
  return {
    id,
    mode,
    value,
    conditionName,
    conditionKey
  }
})
export const NormalizeConditions = normalize(ConditionsSchema)
