import React, { PureComponent } from 'react'
import Campaign from '../containers/Campaign/Campaign'

import { GetInitialState, GetDefaultOffersList } from '../services/initdata'

class App extends PureComponent {
  state = {
    conditions: {},
    campaign: {},
    verticals: [],
    defaultOffersList: [],
    loading: true,
    errorMessage: ''
  }

  saveCampaign = campaignInfo => console.log(campaignInfo)
  loadCampaign = id => {
    return GetInitialState(id)
  }
  loadDefaultOffersList = () => {
    return GetDefaultOffersList()
  }

  loadInitialState = async campaignId => {
    this.setState({ loading: true, hasError: false, errorMessage: '' })
    try {
      const campaign = await this.loadCampaign(campaignId)
      const defaultOffersList = await this.loadDefaultOffersList()
      return {
        defaultOffersList,
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
      defaultOffersList,
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
        defaultOffersList={defaultOffersList}
        conditions={conditions}
        verticals={verticals}
        onSave={this.saveCampaign}
      />
    )
  }
}

export default App
