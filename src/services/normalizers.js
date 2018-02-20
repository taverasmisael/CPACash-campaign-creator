import { normalize as normalizr } from 'normalizr'
import { flip, curry, map, reduce } from 'ramda'

import ConditionsSchema from './schemas/conditions'

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
export const NormalizeConditions = normalize(ConditionsSchema)
export const NormalizeCampaign = normalize()
