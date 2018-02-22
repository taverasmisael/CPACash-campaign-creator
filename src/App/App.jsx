import React, { PureComponent } from 'react'
import Loadable from 'react-loadable'

// import { GetInitialState, GetDefaultOffersList } from '../services/initdata'

const Campaign = Loadable({
  loader: () => import(/* webpackChunkName: "campaign" */ '../containers/Campaign'),
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

  saveCampaign = async campaignInfo => {
    const { SaveCampaign } = await import(/* webpackChunkName: "savecampaign" */ '../services/saveCampaign')
    this.setState({ saving: true })
    try {
      const response = await SaveCampaign(campaignInfo)
      this.setState({ saving: response && false })
    } catch (error) {
      this.setState({ campaignError: true, campaignErrorMessage: error.message })
    }
  }

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

  setInitialState = id => {
    this.loadInitialState(id).then(state => this.setState(state))
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
      errorMessage,
      saving,
      campaignError,
      campaignErrorMessage
    } = this.state
    return (
      <Campaign
        loadingMessage="Loading verticals and conditions"
        campaign={campaign}
        conditions={conditions}
        defaultOffers={defaultOffers}
        defaultOffersList={defaultOffersList}
        errorMessage={errorMessage}
        hasError={hasError}
        campaignError={campaignError}
        campaignErrorMessage={campaignErrorMessage}
        isLoading={loading}
        isSaving={saving}
        onRetry={this.setInitialState}
        onSave={this.saveCampaign}
        rules={rules}
        verticals={verticals}
      />
    )
  }
}

export default App
