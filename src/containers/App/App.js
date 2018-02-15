import React, { PureComponent } from 'react'

import { v4 as uuid } from 'uuid'
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
    offersList: [
      { id: '0', value: 'Oferta Random' },
      { id: '1', value: 'Oferta Random 1' },
      { id: '2', value: 'Oferta Random 2' },
      { id: '3', value: 'Oferta Random 3' }
    ],
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
  changeRule = ({ id, changes }) => {
    const rules = this.state.rules.map(r => (r.id === id ? { ...r, ...changes } : r))
    this.setState({ rules })
  }
  onCreateRule = () =>
    this.setState(state => ({ rules: [...state.rules, { id: uuid(), activeConditions: [], activeOffers: [] }] }))
  render() {
    const { rules, conditions, offersList } = this.state
    return (
      <RulesContainer
        rules={rules}
        offersList={offersList}
        conditions={conditions}
        onCreate={this.onCreateRule}
        onChange={this.changeRule}
        onDelete={this.deleteRule}
      />
    )
  }
}

export default App
