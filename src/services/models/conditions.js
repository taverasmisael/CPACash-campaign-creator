import { map, reduce } from 'ramda'
import { NormalizeConditions } from '../normalizers'

const conditions = Symbol('conditions')
const normalized = Symbol('normalized')

const listToSelectOptions = map(v => ({ value: v.id, label: v.text, ...v }))
const countriesToSelectOptions = map(v => ({
  value: v.id,
  label: v.text,
  carriers: listToSelectOptions(v.carriers)
}))
const devicesToSelectOptions = map(v => ({ value: v.id, label: v.text, os: listToSelectOptions(v.os) }))
const unique = reduce((acc, curr) => [...acc, ...(acc.includes(curr) ? [] : [curr])], [])
const getRealtionKeys = (key, primary, foregin) =>
  unique(reduce((acc, curr) => [...acc, ...foregin[curr][key]], [], primary))

const mapKeysToValues = (keys, values) => map(k => values[k], keys)
export default class Conditions {
  conditionsLabels = [
    {
      value: 'os',
      label: 'Os'
    },
    {
      value: 'devicesTypes',
      label: 'Device Types'
    },
    {
      value: 'connections',
      label: 'Connections'
    },
    {
      value: 'countries',
      label: 'Countries'
    },
    {
      value: 'carriers',
      label: 'Carriers'
    }
  ]
  constructor({ connections, countries, devicesTypes }) {
    this[conditions] = {
      countries: countriesToSelectOptions(countries),
      devicesTypes: devicesToSelectOptions(devicesTypes),
      connections: listToSelectOptions(connections)
    }
    this[normalized] = NormalizeConditions(this[conditions])
    this.countries = this[conditions].countries
    this.devicesTypes = this[conditions].devicesTypes
    this.connections = this[conditions].connections
    const { result, entities } = this[normalized]
    this.os = mapKeysToValues(getRealtionKeys('os', result.devicesTypes, entities.deviceTypes), entities.os)
    this.carriers = mapKeysToValues(
      getRealtionKeys('carriers', result.countries, entities.countries),
      entities.carriers
    )
  }
}
