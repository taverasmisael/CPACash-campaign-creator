import React, { PureComponent } from 'react'
import Campaign from '../containers/Campaign/Campaign'

import { GetInitialState, GetDefaultOffers } from '../services/initdata'

class App extends PureComponent {
  state = {
    conditions: {},
    campaign: {},
    verticals: [],
    offers: [],
    loading: true,
    errorMessage: ''
  }

  saveCampaign = campaignInfo => console.log(campaignInfo)
  loadCampaign = () => {
    return GetInitialState()
  }
  loadDefaultOffers = () => {
    return GetDefaultOffers()
  }

  loadInitialState = async () => {
    this.setState({ loading: true, hasError: false, errorMessage: ''})
    try {
      const campaign = await this.loadCampaign()
      const offers = await this.loadDefaultOffers()
      return {
        offers,
        loading: false,
        ...campaign
      }
    } catch (error) {
      return {
        hasError: true,
        errorMessage: error.message,
        loading: false
      }
    }
  }

  setInitialState = () => {
    this.loadInitialState().then(state => this.setState(state))
  }
  componentDidMount() {
    this.setInitialState()
  }
  render() {
    const {
      offers,
      conditions,
      verticals,
      loading,
      campaign,
      defaultOffers,
      rules,
      hasError,
      errorMessage
    } = this.state
    return (
      <Campaign
        loadingMessage="Loading verticals and conditions"
        hasError={hasError}
        onRetry={this.setInitialState}
        errorMessage={errorMessage}
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
