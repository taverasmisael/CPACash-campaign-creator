import React, { PureComponent } from 'react'

import { v4 as uuid } from 'uuid'
import RulesList from '../../lists/RulesList'

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
    rules: {
      0: {
        id: '0',
        activeConditions: [
          { id: uuid(), conditionName: 'Device', conditionKey: 'devices', mode: true, value: ['20', '30'] }
        ],
        activeOffers: [{ value: '0', weight: '15', id: uuid() }]
      },
      1: {
        id: '1',
        activeConditions: [
          { id: uuid(), conditionName: 'Country', conditionKey: 'countries', mode: true, value: ['1', '3'] }
        ],
        activeOffers: [{ value: '0', weight: '15', id: uuid() }]
      }
    }
  }

  deleteRule = id => {
    const stateRules = this.state.rules
    const rules = Object.keys(stateRules)
      .filter(k => k !== id)
      .reduce((p, c) => ({ ...p, [c]: { ...stateRules[c] } }), {})
    this.setState({ rules })
  }
  changeRule = ({ id, changes }) => {
    const rules = { ...this.state.rules, [id]: { ...changes, id } }
    this.setState({ rules })
  }
  render() {
    const { rules, conditions, offersList } = this.state
    return (
      <RulesList
        isEmpty={!Object.keys(rules).length}
        emptyMessage="Add some rules"
        rules={rules}
        conditions={conditions}
        offersList={offersList}
        onChange={this.changeRule}
        onDelete={this.deleteRule}
      />
    )
  }
}

export default App
