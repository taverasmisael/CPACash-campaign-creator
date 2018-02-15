import React, { PureComponent } from 'react'
import Campaign from '../Campaign/Campaign'

class App extends PureComponent {
  state = {
    conditions: {},
    verticals: [],
    offers: [],
    loading: true
  }

  saveCampaign = campaignInfo => console.log(campaignInfo)
  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          conditions: {
            devices: {
              10: { id: '10', value: 'Android' },
              20: { id: '20', value: 'iPhone' },
              30: { id: '30', value: 'BB' },
              40: { id: '40', value: 'Nokia' }
            },
            countries: {
              1: { id: '1', value: 'Barbados' },
              2: { id: '2', value: 'Bermudas' },
              3: { id: '3', value: 'Know this' },
              4: { id: '4', value: 'Angel' },
              5: { id: '5', value: 'Emotion' }
            }
          },
          verticals: [
            { id: '0', value: 'Mainstrean', subverticals: [{ id: '0', value: 'Game' }] },
            { id: '1', value: 'Adults', subverticals: [{ id: '0', value: 'Dating' }, { id: '1', value: 'Videos' }] }
          ],
          offers: [
            { id: '0', value: 'Oferta Random' },
            { id: '1', value: 'Oferta Random 1' },
            { id: '2', value: 'Oferta Random 2' },
            { id: '3', value: 'Oferta Random 3' }
          ],
          loading: false
        }),
      5000
    )
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
