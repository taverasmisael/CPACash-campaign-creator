import React, { PureComponent, Fragment } from 'react'

import { v4 as uuid } from 'uuid'
import CampaignSettings from '../../components/CampaignSettings'
import RulesContainer from '../RulesContainer'

class App extends PureComponent {
  state = {
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
    verticalsList: [
      { id: '0', value: 'Mainstrean', subverticals: [{ id: '0', value: 'Game' }] },
      { id: '1', value: 'Adults', subverticals: [{ id: '0', value: 'Dating' }, { id: '1', value: 'Videos' }] }
    ],
    offersList: [
      { id: '0', value: 'Oferta Random' },
      { id: '1', value: 'Oferta Random 1' },
      { id: '2', value: 'Oferta Random 2' },
      { id: '3', value: 'Oferta Random 3' }
    ],
    campaign: {
      name: '',
      vertical: '',
      subvertical: ''
    },
    rules: [
      {
        id: uuid(),
        activeConditions: [
          { id: uuid(), conditionName: 'Device', conditionKey: 'devices', mode: true, value: ['20', '30'] }
        ],
        activeOffers: [{ value: '0', weight: '15', id: uuid() }]
      },
      {
        id: uuid(),
        activeConditions: [
          { id: uuid(), conditionName: 'Country', conditionKey: 'countries', mode: true, value: ['1', '3'] }
        ],
        activeOffers: [{ value: '0', weight: '15', id: uuid() }]
      }
    ]
  }

  deleteRule = id => {
    const rules = this.state.rules.filter(r => r.id !== id)
    this.setState({ rules })
  }
  onChangeRule = ({ id, changes }) => {
    const rules = this.state.rules.map(r => (r.id === id ? { ...r, ...changes } : r))
    this.setState({ rules })
  }

  onChangeCampaignSettings = ({ target: { name, value } }) =>
    this.setState(state => ({ campaign: { ...state.campaign, [name]: value } }))
  onCreateRule = () =>
    this.setState(state => ({ rules: [...state.rules, { id: uuid(), activeConditions: [], activeOffers: [] }] }))

  onSaveCampaign = event => {
    console.log('onSave')
  }
  render() {
    const { name, vertical, subvertical } = this.state.campaign
    const { rules, offersList, conditions } = this.state
    return (
      <Fragment>
        <CampaignSettings
          {...{ name, vertical, subvertical }}
          verticalsList={this.state.verticalsList}
          onChange={this.onChangeCampaignSettings}
          onSave={this.onSaveCampaign}
        />
        <RulesContainer
          rules={rules}
          offersList={offersList}
          conditions={conditions}
          onDelete={this.deleteRule}
          onChange={this.onChangeRule}
          onCreate={this.onCreateRule}
        />
      </Fragment>
    )
  }
}

export default App
