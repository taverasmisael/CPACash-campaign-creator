import React, { PureComponent } from 'react'
import Campaign from '../containers/Campaign/Campaign'

import { GetInitialState } from '../services/initdata'

class App extends PureComponent {
  state = {
    conditions: {},
    campaign: {},
    verticals: [],
    offers: [],
    loading: true
  }

  saveCampaign = campaignInfo => console.log(campaignInfo)
  componentDidMount() {
    GetInitialState(1)
      .then(res => this.setState({ ...res, loading: false }))
      .catch(console.error.bind(console))
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
