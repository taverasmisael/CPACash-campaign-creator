import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { titleCase } from 'change-case'
import { v4 as uuid } from 'uuid'

import Divider from 'material-ui/Divider'

import ConditionsContainer from '../../containers/ConditionsContainer'
import OffersContainer from '../../containers/OffersContainer'
import Condition from '../../models/conditions'
class Rule extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    conditions: PropTypes.instanceOf(Condition).isRequired,
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
            { id, conditionName: titleCase(type), conditionKey: type, mode: true, value: '' }
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

  handleDeletion = slice => id => {
    this.setState(state => ({ [slice]: state[slice].filter(v => v.id !== id) }), this.onChange)
  }

  handleChange = slice => ({ id, name, value }) => {
    this.setState(
      state => ({ [slice]: state[slice].map(v => (v.id === id ? { ...v, [name]: value } : v)) }),
      this.onChange
    )
  }
  onChange = () => {
    const { activeOffers, activeConditions } = this.state
    this.props.onChange({ activeOffers, activeConditions })
  }

  componentDidMount() {
    const { activeOffers, activeConditions } = this.props
    this.setState({ activeOffers, activeConditions })
  }
  render() {
    const { conditions, offersList, activeConditions, activeOffers } = this.props
    return (
      <div style={{ width: '100%' }}>
        <ConditionsContainer
          conditionExist={this.conditionExist}
          onDelete={this.handleDeletion('activeConditions')}
          onCreateCondition={this.createCondition}
          conditions={conditions}
          activeConditions={activeConditions}
          onChange={this.handleChange('activeConditions')}
        />
        <Divider light />
        <OffersContainer
          offers={offersList}
          activeOffers={activeOffers}
          onCreate={this.createOffer}
          onChange={this.handleChange('activeOffers')}
          onDelete={this.handleDeletion('activeOffers')}
        />
      </div>
    )
  }
}

export default Rule
