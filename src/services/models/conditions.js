import {
  NormalizeConditions,
  countriesToSelectOptions,
  devicesToSelectOptions,
  mapKeysToValues,
  getRealtionKeys,
  listToSelectOptions
} from '../normalizers'

const conditions = Symbol('conditions')
const normalized = Symbol('normalized')

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
