import React, { PureComponent, Fragment } from 'react'

import ConditionsList from '../../lists/ConditionsList'
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
    activeConditions: [
      { id: 0, conditionName: 'Device', conditionKey: 'devices', mode: true, value: ['20', '30'] },
      { id: 1, conditionName: 'Countries', conditionKey: 'countries', mode: false, value: [] }
    ]
  }

  onDeleteCondition = id => {
    const activeConditions = this.state.activeConditions.filter(c => c.id !== id)
    this.setState({ activeConditions })
  }
  render() {
    return (
      <Fragment>
        <ConditionsList
          onDelete={this.onDeleteCondition}
          conditions={this.state.conditions}
          activeConditions={this.state.activeConditions}
        />{' '}
      </Fragment>
    )
  }
}

export default App
