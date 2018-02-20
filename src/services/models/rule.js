import { map } from 'ramda'
import { conditionsLabels } from './conditions'

const mapOffer = offer => ({ value: offer.id, ...offer })

const mapCondition = ({ id, condition_id, values, comparation_expression }) => {
  const { label: conditionName, value: conditionKey } = conditionsLabels[condition_id]
  const mode = comparation_expression === '>'
  const value = values.join(',')
  return {
    id,
    mode,
    value,
    conditionName,
    conditionKey
  }
}
export default class Rule {
  constructor({ id = '', campaign_link_id: campaign = '', conditions = [], offers = [] }) {
    this.id = id
    this.campaign = campaign
    this.activeConditions = map(mapCondition, conditions)
    this.activeOffers = map(mapOffer, offers)
  }
}
