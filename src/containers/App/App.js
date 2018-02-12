import React, { PureComponent, Fragment } from 'react'
import { titleCase } from 'change-case'

import ConditionsContainer from '../ConditionsContainer'
import Offer from '../../components/Offer'
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
    activeConditions: [{ id: 0, conditionName: 'Device', conditionKey: 'devices', mode: true, value: ['20', '30'] }],
    offersList: [
      { id: '0', value: 'Oferta Random' },
      { id: '1', value: 'Oferta Random 1' },
      { id: '2', value: 'Oferta Random 2' },
      { id: '3', value: 'Oferta Random 3' }
    ],
    selectedOffer: '0',
    offerWeight: '15'
  }

  conditionExist = type => Boolean(this.state.activeConditions.find(c => c.conditionKey === type))
  createCondition = type => {
    if (!this.conditionExist(type)) {
      const id = Math.random() * 10 + 1 // FIX: Change this implmentation
      this.setState(state => ({
        activeConditions: [
          ...state.activeConditions,
          { id, conditionName: titleCase(type), conditionKey: type, mode: true, value: [] }
        ]
      }))
    }
  }
  onDeleteCondition = id => {
    const activeConditions = this.state.activeConditions.filter(c => c.id !== id)
    this.setState({ activeConditions })
  }

  handleOfferChange = ({ target }) => this.setState({ [target.name]: target.value })
  render() {
    return (
      <Fragment>
        {/* <ConditionsContainer
          conditionExist={this.conditionExist}
          onDelete={this.onDeleteCondition}
          onCreateCondition={this.createCondition}
          conditions={this.state.conditions}
          activeConditions={this.state.activeConditions}
        /> */}
        <Offer
          onChange={this.handleOfferChange}
          offersList={this.state.offersList}
          selectedOffer={this.state.selectedOffer}
          offerWeight={this.state.offerWeight}
          offerId={'s'}
        />
      </Fragment>
    )
  }
}

export default App
