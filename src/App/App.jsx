import React, { PureComponent } from 'react'
import Loadable from 'react-loadable'

// import { GetInitialState, GetDefaultOffersList } from '../services/initdata'

const Campaign = Loadable({
  loader: () => import(/* webpackChunkName: "campaign" */ '../containers/Campaign/Campaign'),
  loading: ({ pastDelay }) => pastDelay && 'Loading...',
  delay: 1500
})
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

  loadInitialState = async campaignId => {
    this.setState({ loading: true, hasError: false, errorMessage: '' })
    try {
      const campaignPromise = this.loadCampaign(campaignId)
      const defaultOffersListPromise = this.loadDefaultOffersList()
      const [campaign, defaultOffersList] = await Promise.all([campaignPromise, defaultOffersListPromise])
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
    import(/* webpackChunkName: "initdata" */ '../services/initdata').then(
      ({ GetDefaultOffersList, GetInitialState }) => {
        this.loadCampaign = GetInitialState
        this.loadDefaultOffersList = GetDefaultOffersList
        this.setInitialState()
      }
    )
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
