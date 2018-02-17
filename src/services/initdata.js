import { InitData } from './api'

import { NormalizeConditions } from './normalizers'

export const GetInitialState = async id => {
  const EmptyCampaign = { campaign: { name: '', vertical: '', subVertical: '' }, defaultOffers: [], rules: [] }
  try {
    const initData = await InitData(id)
    const { verticals, connections, countries, devicesTypes, campaign: campaignData } = initData
    const conditions = NormalizeConditions({ connections, countries, devicesTypes }).entities
    const { campaign, defaultOffers, rules } = Array.isArray(campaignData)
      ? EmptyCampaign
      : {
          name: campaignData.name,
          vertical: campaignData.vertical_id,
          subVertical: campaignData.subvertical_id
        }
    return { campaign, defaultOffers, rules, verticals, conditions }
  } catch (error) {
    console.error(error)
  }
}
