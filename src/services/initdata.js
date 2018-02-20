import { InitData } from './api'
import Conditions from './models/conditions'
import Campaign from './models/campaign'
import Rule from './models/rule'

export const GetInitialState = async id => {
  try {
    const initData = await InitData(id)
    const { verticals, connections, countries, devicesTypes, campaign: campaignData } = initData
    const conditions = new Conditions({ connections, countries, devicesTypes })
    const campaign = new Campaign(campaignData)
    const campaignRules = campaignData.rules || []
    const campaignDefaultOfferes = campaignData.defaultOffers || []
    const rules = campaignRules.map(r => new Rule(r))
    const defaultOffers = campaignDefaultOfferes
    console.log(rules)
    return { campaign, defaultOffers, rules, verticals, conditions }
  } catch (error) {
    console.error(error)
  }
}
