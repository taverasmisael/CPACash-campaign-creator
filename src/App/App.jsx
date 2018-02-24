import React, { PureComponent, Fragment } from 'react'
import Loadable from 'react-loadable'

const Campaign = Loadable({
  loader: () => import(/* webpackChunkName: "campaign" */ '../containers/Campaign'),
  loading: ({ pastDelay }) => pastDelay && 'Loading...',
  delay: 1500
})

const CampaignMessage = Loadable({
  loader: () => import(/* webpackChunkName: "campaignMessage" */ '../components/Snackbar'),
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
    errorMessage: '',
    savingMessage: '',
    isSaving: false,
    savingError: false
  }

  saveCampaign = async campaignInfo => {
    this.setState({ isSaving: true, savingMessage: '', savingError: false })
    const { SaveCampaign } = await import(/* webpackChunkName: "savecampaign" */ '../services/saveCampaign')
    try {
      await SaveCampaign(campaignInfo)
      this.setState({ isSaving: false, savingMessage: 'Campaign has been saved!' })
    } catch (error) {
      console.error(error.details)
      this.setState({ savingError: true, isSaving: false, savingMessage: error.message })
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
      console.error(error.details)
      return {
        hasError: true,
        errorMessage: error.message,
        loading: false
      }
    }
  }

  closeSavingMessage = (e, reason) => reason !== 'clickaway' && this.setState({ savingMessage: '' })

  setInitialState = () => {
    import(/* webpackChunkName: "normalizers" */ '../utilities/normalizers').then(({ GetIdFromURL }) =>
      this.loadInitialState(GetIdFromURL(window.location.search)).then(state => this.setState(state))
    )
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
      isSaving,
      campaignError,
      campaignErrorMessage,
      savingMessage,
      savingError
    } = this.state
    return (
      <Fragment>
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
          isSaving={isSaving}
          onRetry={this.setInitialState}
          onSave={this.saveCampaign}
          rules={rules}
          verticals={verticals}
        />
        <CampaignMessage
          isError={savingError}
          show={!!savingMessage}
          message={savingMessage}
          onClose={this.closeSavingMessage}
        />
      </Fragment>
    )
  }
}

export default App
