import { InitData } from './api'

import { mapConditions } from './mappers'

export const GetInitialState = async id => {
  try {
    const initData = await InitData(id)
    const { verticals, connections, countries, devicesTypes: deviceTypes } = initData
    const initialState = {
      verticals,
      conditions: mapConditions({ connections, countries, deviceTypes })
    }
    return initialState
  } catch (error) {
    console.error(error)
  }
}
