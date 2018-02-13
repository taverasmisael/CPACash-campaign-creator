import React, { PureComponent, Fragment } from 'react'
import { titleCase } from 'change-case'

import ConditionsContainer from '../ConditionsContainer'
import OffersList from '../../lists/OffersList'
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
    activeOffers: [{ value: '0', weight: '15', id: '0' }]
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
  onDeleteOffer = id => {
    const activeOffers = this.state.activeOffers.filter(o => o.id !== id)
    this.setState({ activeOffers })
  }
  handleOfferChange = ({ id, name, value }) => {
    const activeOffers = this.state.activeOffers.map(o => (o.id === id ? { ...o, [name]: value } : {}))
    this.setState({ activeOffers })
  }
  render() {
    return (
      <Fragment>
        <ConditionsContainer
          conditionExist={this.conditionExist}
          onDelete={this.onDeleteCondition}
          onCreateCondition={this.createCondition}
          conditions={this.state.conditions}
          activeConditions={this.state.activeConditions}
        />
        <OffersList
          isEmpty={!this.state.activeOffers.length}
          emptyMessage="Please add an offer and assign it some weight"
          offers={this.state.offersList}
          activeOffers={this.state.activeOffers}
          onChange={this.handleOfferChange}
          onDelete={this.onDeleteOffer}
        />
      </Fragment>
    )
  }
}

export default App
