import React, { PureComponent } from 'react'
import Campaign from '../containers/Campaign/Campaign'

import { GetInitialState, GetDefaultOffers } from '../services/initdata'

class App extends PureComponent {
  state = {
    conditions: {},
    campaign: {},
    verticals: [],
    offers: [],
    loading: true
  }

  saveCampaign = campaignInfo => console.log(campaignInfo)
  loadCampaign = () => {
    return GetInitialState()
  }
  loadDefaultOffers = () => {
    return GetDefaultOffers()
  }

  loadInitialState = async () => {
    try {
      const campaign = await this.loadCampaign()
      const offers = await this.loadDefaultOffers()
      return {
        offers,
        loading: false,
        ...campaign
      }
    } catch (error) {
      throw new Error(error)
    }
  }
  componentDidMount() {
    this.loadInitialState().then(state => this.setState(state))
  }
  render() {
    const { offers, conditions, verticals, loading, campaign, defaultOffers, rules } = this.state
    return (
      <Campaign
        loadingMessage="Loading verticals and conditions"
        isLoading={loading}
        defaultOffers={defaultOffers}
        rules={rules}
        campaign={campaign}
        offers={offers}
        conditions={conditions}
        verticals={verticals}
        onSave={this.saveCampaign}
      />
    )
  }
}

export default App
