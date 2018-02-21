import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { titleCase } from 'change-case'
import compare from 'just-compare'

import Divider from 'material-ui/Divider'

import { GetOffersList, prepareConditions } from '../../services/offers'

import ConditionsContainer from '../../containers/ConditionsContainer'
import OffersContainer from '../../containers/OffersContainer'
import Condition from '../../models/conditions'
class Rule extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    conditions: PropTypes.instanceOf(Condition).isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func
  }

  static defaultProps = {
    activeOffers: [],
    activeConditions: []
  }
  state = {
    offersList: [],
    prevConditions: []
  }
  conditionExist = type => Boolean(this.state.activeConditions.find(c => c.conditionKey === type))
  createCondition = type => {
    if (!this.conditionExist(type)) {
      const id = type
      this.setState(
        state => ({
          activeConditions: [
            ...state.activeConditions,
            { id, conditionName: titleCase(type), conditionKey: type, mode: true, value: '' }
          ]
        }),
        this.updateOffersList
      )
    }
  }
  createOffer = () =>
    this.setState(
      state => ({
        ...state,
        activeOffers: [...state.activeOffers, { value: '0', weight: '15', id: `${state.activeOffers.length + 1}` }]
      }),
      this.onChange
    )

  handleDeletion = slice => id => {
    this.setState(state => ({ [slice]: state[slice].filter(v => v.id !== id) }), this.onChange)
  }

  handleChange = slice => ({ id, name, value }) => {
    let callback = slice === 'activeConditions' ? this.updateOffersList : this.onChange
    this.setState(state => ({ [slice]: state[slice].map(v => (v.id === id ? { ...v, [name]: value } : v)) }), callback)
  }

  updateOffersList = () => {
    if (!compare(this.state.prevConditions, this.state.activeConditions)) {
      const conditions = prepareConditions(this.state.activeConditions)
      GetOffersList(conditions).then(offersList => {
        this.setState(state => ({ offersList, activeOffers: [], prevConditions: state.activeConditions }))
      })
    }
    this.onChange()
  }
  onChange = () => {
    const { activeOffers, activeConditions } = this.state
    this.props.onChange({ activeOffers, activeConditions })
  }

  componentDidMount() {
    const { activeOffers, activeConditions } = this.props
    this.setState({ activeOffers, activeConditions }, this.updateOffersList.bind(this, true))
  }
  render() {
    const { conditions, activeConditions, activeOffers } = this.props
    const { offersList } = this.state
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
