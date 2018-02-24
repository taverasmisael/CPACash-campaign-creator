import { normalize as normalizr } from 'normalizr'
import { flip, curry, map, reduce, find, propEq, prop, split, compose, fromPairs, tail } from 'ramda'

import ConditionsSchema from '../models/schemas/conditions'
import { conditionsLabels } from '../models/conditions'

const normalize = curry(flip(normalizr))

const unique = reduce((acc, curr) => [...acc, ...(acc.includes(curr) ? [] : [curr])], [])

export const getConditionId = key => prop('id', find(propEq('value', key), conditionsLabels))
export const transformValues = compose(map(v => +v), split(','))
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
export const mapOffers = map(({ id, offer_id, offer_name, ...rest }) => {
  const offerId = id || offer_id
  const value = offerId === '486' ? '98' : offerId
  const label = offer_name
  return {
    id: offerId,
    value,
    label,
    ...rest
  }
})
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

export const objectToFormData = (obj, fd = new FormData(), namespace) => {
  for (const k in obj) {
    const formKey = namespace ? `${namespace}[${k}]` : k

    if (typeof obj[k] === 'object') {
      objectToFormData(obj[k], fd, formKey)
    } else {
      fd.append(formKey, obj[k])
    }
  }

  return fd
}
const prepareOffersToApi = map(o => ({ id: o.value, weight: o.weight }))
const preapareConditionsToApi = map(({ conditionKey, mode, value }) => ({
  id: getConditionId(conditionKey),
  comparation_expression: mode,
  values: transformValues(value)
}))
const prepareRulesToApi = map(r => ({
  offers: prepareOffersToApi(r.activeOffers),
  conditions: preapareConditionsToApi(r.activeConditions)
}))
export const preapaeCampaignToApi = ({ campaign, defaultOffers, rules }) => ({
  id: campaign.id,
  name: campaign.name,
  vertical_id: campaign.vertical,
  subvertical_id: campaign.subVertical,
  defaultOffers: prepareOffersToApi(defaultOffers),
  rules: prepareRulesToApi(rules)
})

export const GetIdFromURL = compose(prop('id'), fromPairs, map(split('=')), compose(split('&'), tail))
