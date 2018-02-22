import { InitData, GetOffers } from './api'
import Conditions from '../models/conditions'
import Campaign from '../models/campaign'
import Rule from '../models/rule'
import { mapOffers } from '../utilities/normalizers'
import FetchError from './FetchError'
export const GetInitialState = async id => {
  try {
    const initData = await InitData(id)
    const { verticals, connections, countries, devicesTypes, campaign: campaignData } = initData
    const conditions = new Conditions({ connections, countries, devicesTypes })
    const campaign = new Campaign(campaignData)
    const campaignRules = campaignData.rules || []
    const campaignDefaultOfferes = campaignData.default_offers || []
    const rules = campaignRules.map(r => new Rule(r))
    const defaultOffers = mapOffers(campaignDefaultOfferes)
    return { campaign, defaultOffers, rules, verticals, conditions }
  } catch (error) {
    throw new FetchError('ID001', '[CAMPAIGN]: Error Loading IntialState', error)
  }
}

export const GetDefaultOffersList = async () => {
  try {
    const offers = await GetOffers([])
    return mapOffers(offers)
  } catch (error) {
    throw new FetchError('DO001', '[DEFAULTOFFERS]: Error Loading DefaultOffers', error)
  }
}
