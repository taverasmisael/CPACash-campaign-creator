import { schema } from 'normalizr'

const os = new schema.Entity('os', {}, { idAttribute: 'value' })
const carriers = new schema.Entity('carriers', {}, { idAttribute: 'value' })
const connections = new schema.Array(new schema.Entity('connections', {}, { idAttribute: 'value' }))
const devicesTypes = new schema.Array(new schema.Entity('deviceTypes', { os: [os] }, { idAttribute: 'value' }))
const countries = new schema.Array(new schema.Entity('countries', { carriers: [carriers] }, { idAttribute: 'value' }))

export default new schema.Object({
  devicesTypes,
  countries,
  connections
})
