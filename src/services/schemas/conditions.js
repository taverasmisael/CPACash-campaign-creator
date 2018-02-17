import { schema } from 'normalizr'

const os = new schema.Entity('os')
const carriers = new schema.Entity('carriers')
const connections = new schema.Array(new schema.Entity('connections'))
const devicesTypes = new schema.Array(new schema.Entity('deviceTypes', { os: [os] }))
const countries = new schema.Array(new schema.Entity('countries', { carriers: [carriers] }))

export default new schema.Object({
  devicesTypes,
  countries,
  connections
})
