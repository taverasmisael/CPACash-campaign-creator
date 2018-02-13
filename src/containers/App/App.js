import React, { PureComponent, Fragment } from 'react'

import Rule from '../../components/Rule/Rule'
import { v4 as uuid } from 'uuid'

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
      }
    }
  }
  deleteRule = id => () => {
    const stateRules = this.state.rules
    const rules = Object.keys(stateRules)
      .filter(k => k !== id)
      .map(k => stateRules[k])
    this.setState({ rules })
  }
  onChangeRule = id => changes => {
    const stateRules = this.state.rules
    const rules = Object.keys(stateRules).map(k => (k === id ? { ...stateRules[k], ...changes } : stateRules[k]))
    this.setState({ rules }, () => localStorage.setItem('rules', JSON.stringify(this.state.rules)))
  }

  componentWillMount() {
    const rules = JSON.parse(localStorage.getItem('rules'))
    console.log(rules)
    if (rules) this.setState({ rules })
  }
  render() {
    const rule = this.state.rules[0]
    return (
      <Fragment>
        {rule ? (
          <Rule
            id={rule.id}
            conditions={this.state.conditions}
            offersList={this.state.offersList}
            activeOffers={rule.activeOffers}
            activeConditions={rule.activeConditions}
            onDelete={this.deleteRule('0')}
            onChange={this.onChangeRule('0')}
          />
        ) : (
          <div />
        )}
      </Fragment>
    )
  }
}

export default App
