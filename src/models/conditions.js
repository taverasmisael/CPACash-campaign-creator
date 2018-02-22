import {
  NormalizeConditions,
  countriesToSelectOptions,
  devicesToSelectOptions,
  mapKeysToValues,
  getRealtionKeys,
  listToSelectOptions
} from '../utilities/normalizers'

const conditions = Symbol('conditions')
const normalized = Symbol('normalized')
export const conditionsLabels = [
  {
    id: '0',
    value: 'connections',
    label: 'Connections'
  },
  {
    id: '1',
    value: 'countries',
    label: 'Countries'
  },
  {
    id: '3',
    value: 'carriers',
    label: 'Carriers'
  },
  {
    id: '4',
    value: 'devicesTypes',
    label: 'Device Types'
  },
  {
    id: '5',
    value: 'os',
    label: 'Os'
  }
]
export default class Conditions {
  conditionsLabels = conditionsLabels
  constructor({ connections, countries, devicesTypes }) {
    this[conditions] = {
      countries: countriesToSelectOptions(countries),
      devicesTypes: devicesToSelectOptions(devicesTypes),
      connections: listToSelectOptions(connections)
    }
  }
  normalize = () => NormalizeConditions(this[conditions])

  get normalized() {
    let response
    if (this[normalized]) {
      response = this[normalized]
    } else {
      this[normalized] = this.normalize()
      response = this[normalized]
    }
    return response
  }
  get countries() {
    return this[conditions].countries
  }
  get devicesTypes() {
    return this[conditions].devicesTypes
  }
  get connections() {
    return this[conditions].connections
  }
  get os() {
    const { result, entities } = this.normalized
    return mapKeysToValues(getRealtionKeys('os', result.devicesTypes, entities.deviceTypes), entities.os)
  }
  get carriers() {
    const { result, entities } = this.normalized
    return mapKeysToValues(getRealtionKeys('carriers', result.countries, entities.countries), entities.carriers)
  }
}
