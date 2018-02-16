import React, { PureComponent } from 'react'
import Campaign from '../containers/Campaign/Campaign'

import {GetInitialState} from '../services/initdata'

class App extends PureComponent {
  state = {
    conditions: {},
    verticals: [],
    offers: [],
    loading: true
  }

  saveCampaign = campaignInfo => console.log(campaignInfo)
  componentDidMount() {
    GetInitialState()
      .then(res => this.setState({...res, loading: false}))
      .catch(console.error.bind(console))
  }
  render() {
    const { offers, conditions, verticals, loading } = this.state
    return (
      <Campaign
        isLoading={loading}
        loadingMessage="Loading verticals and conditions"
        offers={offers}
        conditions={conditions}
        verticals={verticals}
        onSave={this.saveCampaign}
      />
    )
  }
}

export default App
