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
/*
map(c => groupBy(el => el.id, c[0].carriers.length ? c[0].carriers : [{ id: '0', text: 'All' }]), carriers)
const carriers = map(
  carrier => (carrier.length === 0 ? [{ id: '0', value: 'All' }] : carrier),
  reduce((acc, country) => ({ ...acc, [country.id]: country.carriers }), {}, data.countries)
)
const os = reduce((acc, device) => [...acc, { [device.id]: device.os }], [], data.devicesTypes)
const conditions = { carriers, os, ...data }
map(c => ({ [c.id]: c.carriers.length ? c.carriers : [{ id: '0', text: 'All' }] }), data.countries)
*/
