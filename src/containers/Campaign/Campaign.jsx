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
      subVertical: PropTypes.string.isRequired
    }).isRequired,
    defaultOffers: PropTypes.array.isRequired,
    rules: PropTypes.array.isRequired,
    defaultOffersList: PropTypes.array,
    verticals: PropTypes.array,
    conditions: PropTypes.object,
    onSave: PropTypes.func.isRequired
  }

  static defaultProps = {
    defaultOffersList: [],
    verticals: [],
    conditions: {}
  }
  state = {
    canSave: false,
    campaign: {
      name: '',
      vertical: '',
      subVertical: ''
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
      const canSave = Boolean(campaign.name && campaign.vertical && campaign.subVertical && defaultOffers.length)
      return { canSave }
    })

  onChangeCampaignSettings = ({ target: { name, value } }) =>
    this.setState(state => ({ campaign: { ...state.campaign, [name]: value } }), this.canSaveCampaign)
  onCreateRule = () =>
    this.setState(state => ({ rules: [...state.rules, { id: uuid(), activeConditions: [], activeOffers: [] }] }))

  onSaveCampaign = () => this.props.onSave(this.state)

  onChangeDefaultOffers = defaultOffers => this.setState({ defaultOffers })

  componentWillMount() {
    const { campaign, defaultOffers = [], rules = [] } = this.props
    this.setState({ campaign, defaultOffers, rules })
  }
  render() {
    const { campaign: { name, vertical, subVertical }, canSave, defaultOffers, rules } = this.state
    const { defaultOffersList, conditions, verticals } = this.props
    return (
      <Fragment>
        <CampaignSettings
          name={name}
          vertical={vertical}
          subVertical={subVertical}
          canSave={canSave}
          verticalsList={verticals}
          onChange={this.onChangeCampaignSettings}
          onSave={this.onSaveCampaign}
        />
        <DefaultRule offers={defaultOffersList} activeOffers={defaultOffers} onChange={this.onChangeDefaultOffers} />
        <RulesContainer
          rules={rules}
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
