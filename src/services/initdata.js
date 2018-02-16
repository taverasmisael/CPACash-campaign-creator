import { InitData } from './api'

import { mapConditions, mapCampaign } from './mappers'

export const GetInitialState = async id => {
  const EmptyCampaign = { name: '', vertical: '', subVertical: '' }
  try {
    const initData = await InitData(id)
    const { verticals, connections, countries, devicesTypes: deviceTypes, campaign: campaignData } = initData
    const campaign = Array.isArray(campaignData) ? EmptyCampaign : mapCampaign(campaignData)
    const initialState = {
      verticals,
      campaign,
      conditions: mapConditions({ connections, countries, deviceTypes })
    }
    return initialState
  } catch (error) {
    console.error(error)
  }
}
