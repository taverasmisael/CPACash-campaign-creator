import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import { titleCase } from 'change-case'
import { v4 as uuid } from 'uuid'

import Divider from 'material-ui/Divider'

import ConditionsContainer from '../../containers/ConditionsContainer'
import OffersContainer from '../../containers/OffersContainer'

class Rule extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    conditions: PropTypes.object.isRequired,
    offersList: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func
  }

  static defaultProps = {
    activeOffers: [],
    activeConditions: []
  }
  conditionExist = type => Boolean(this.state.activeConditions.find(c => c.conditionKey === type))
  createCondition = type => {
    if (!this.conditionExist(type)) {
      const id = uuid()
      this.setState(
        state => ({
          activeConditions: [
            ...state.activeConditions,
            { id, conditionName: titleCase(type), conditionKey: type, mode: true, value: [] }
          ]
        }),
        this.onChange
      )
    }
  }
  createOffer = () =>
    this.setState(
      state => ({
        ...state,
        activeOffers: [...state.activeOffers, { value: '0', weight: '15', id: uuid() }]
      }),
      this.onChange
    )
  onDeleteCondition = id => {
    const activeConditions = this.state.activeConditions.filter(c => c.id !== id)
    this.setState({ activeConditions }, this.onChange)
  }
  onDeleteOffer = id => {
    const activeOffers = this.state.activeOffers.filter(o => o.id !== id)
    this.setState({ activeOffers }, this.onChange)
  }
  handleOfferChange = ({ id, name, value }) => {
    const activeOffers = this.state.activeOffers.map(o => (o.id === id ? { ...o, [name]: value } : o))
    this.setState({ activeOffers }, this.onChange)
  }
  onChange = () => {
    const { activeOffers, activeConditions } = this.state
    this.props.onChange({ activeOffers, activeConditions })
  }

  componentWillMount() {
    const { activeOffers, activeConditions } = this.props
    this.setState({ activeOffers, activeConditions })
  }
  render() {
    const { conditions, offersList, activeConditions, activeOffers } = this.props
    return (
      <div style={{ width: '100%' }}>
        <ConditionsContainer
          conditionExist={this.conditionExist}
          onDelete={this.onDeleteCondition}
          onCreateCondition={this.createCondition}
          conditions={conditions}
          activeConditions={activeConditions}
        />
        <Divider light />
        <OffersContainer
          offers={offersList}
          activeOffers={activeOffers}
          onCreate={this.createOffer}
          onChange={this.handleOfferChange}
          onDelete={this.onDeleteOffer}
        />
      </div>
    )
  }
}

export default Rule
