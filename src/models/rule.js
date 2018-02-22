import { mapConditions, mapOffers } from '../utilities/normalizers'
export default class Rule {
  constructor({ id = '', campaign_link_id: campaign = '', conditions = [], offers = [] }) {
    this.id = id
    this.campaign = campaign
    this.activeConditions = mapConditions(conditions)
    this.activeOffers = mapOffers(offers)
  }
}
