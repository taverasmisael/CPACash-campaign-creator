import { map, reduce } from 'ramda'

export const defaultProp = [{ id: '0', text: 'All' }]
export const something = (prop, defProp) => (acc, c) => ({ ...acc, [c.id]: c[prop].length ? c[prop] : defProp })
export const reduceCarriers = reduce(something('carriers', defaultProp), {})
export const reduceOSs = reduce(something('os', defaultProp), {})
export const arrayToObject = reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
export const deepArrayToObject = map(a => arrayToObject(a))

export const mapConditions = ({ connections, countries, deviceTypes }) => ({
  connections: arrayToObject(connections),
  countries: arrayToObject(countries),
  deviceTypes: arrayToObject(deviceTypes),
  carriers: deepArrayToObject(reduceCarriers(countries)),
  os: deepArrayToObject(reduceOSs(deviceTypes))
})

export const mapCampaign = campaign => campaign
