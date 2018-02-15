import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

import { v4 as uuid } from 'uuid'

import Loading from '../../HOCs/Loading'
import CampaignSettings from '../../components/CampaignSettings'
import RulesContainer from '../RulesContainer'
import DefaultRule from '../../components/DefaultRule'

class Campaign extends PureComponent {
  static propTypes = {
    ...Loading.propTypes,
    campaign: PropTypes.shape({
      name: PropTypes.string.isRequired,
      vertical: PropTypes.string.isRequired,
      subvertical: PropTypes.string.isRequired
    }),
    defaultOffers: PropTypes.array,
    rues: PropTypes.array,
    offers: PropTypes.array,
    verticals: PropTypes.array,
    conditions: PropTypes.object,
    onSave: PropTypes.func.isRequired
  }

  static defaultProps = {
    offers: [],
    verticals: [],
    conditions: {}
  }
  state = {
    canSave: false,
    campaign: {
      name: '',
      vertical: '',
      subvertical: ''
    },
    defaultOffers: [],
    rules: []
  }
  deleteRule = id => {
    const rules = this.state.rules.filter(r => r.id !== id)
    this.setState({ rules })
  }
  onChangeRule = ({ id, changes }) => {
    const rules = this.state.rules.map(r => (r.id === id ? { ...r, ...changes } : r))
    this.setState({ rules })
  }

  canSaveCampaign = () =>
    this.setState(state => {
      const { campaign, defaultOffers } = state
      const canSave = Boolean(campaign.name && campaign.vertical && campaign.subvertical && defaultOffers.length)
      return { canSave }
    })

  onChangeCampaignSettings = ({ target: { name, value } }) =>
    this.setState(state => ({ campaign: { ...state.campaign, [name]: value } }), this.canSaveCampaign)
  onCreateRule = () =>
    this.setState(state => ({ rules: [...state.rules, { id: uuid(), activeConditions: [], activeOffers: [] }] }))

  onSaveCampaign = () => this.props.onSave(this.state)

  onCreateDefaultOffer = () => true

  onChangeDefaultOffers = defaultOffers => this.setState({ defaultOffers })
  render() {
    const { campaign: { name, vertical, subvertical }, canSave, defaultOffers, rules } = this.state
    const { offers, conditions, verticals } = this.props
    return (
      <Fragment>
        <CampaignSettings
          name={name}
          vertical={vertical}
          subvertical={subvertical}
          canSave={canSave}
          verticalsList={verticals}
          onChange={this.onChangeCampaignSettings}
          onSave={this.onSaveCampaign}
        />
        <DefaultRule offers={offers} activeOffers={defaultOffers} onChange={this.onChangeDefaultOffers} />
        <RulesContainer
          rules={rules}
          offersList={offers}
          conditions={conditions}
          onDelete={this.deleteRule}
          onChange={this.onChangeRule}
          onCreate={this.onCreateRule}
        />
      </Fragment>
    )
  }
}

export default Loading(Campaign)
