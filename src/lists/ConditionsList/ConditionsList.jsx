import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Loadable from 'react-loadable'

import EmptyContainer from '../../HOCs/EmptyContainer'
import AsyncLoading from '../../components/AsyncLoading'

import ConditionClass from '../../models/conditions'

const Condition = Loadable({
  loader: () => import(/* webpackChunkName: "condition" */ '../../components/Condition'),
  loading: AsyncLoading({ name: 'Conditions' })
})

const ConditionShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  conditionName: PropTypes.string.isRequired,
  conditionKey: PropTypes.string.isRequired,
  mode: PropTypes.bool.isRequired,
  value: PropTypes.string
})
class ConditionsList extends PureComponent {
  static propTypes = {
    ...EmptyContainer.propTypes,
    conditions: PropTypes.instanceOf(ConditionClass).isRequired,
    activeConditions: PropTypes.arrayOf(ConditionShape),
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    conditions: {},
    activeConditions: {}
  }
  handleDelete = id => () => this.props.onDelete(id)

  handleChange = id => ({ target: { name, value } }, checked) =>
    this.props.onChange({ id, name, value: checked !== undefined ? checked : value })

  renderCondition = condition => (
    <Condition
      key={condition.id}
      id={condition.id}
      mode={condition.mode}
      value={condition.value}
      conditionName={condition.conditionName}
      conditionsList={this.props.conditions[condition.conditionKey]}
      onDelete={this.handleDelete(condition.id)}
      onChange={this.handleChange(condition.id)}
    />
  )
  render() {
    const { activeConditions } = this.props
    return activeConditions.map(this.renderCondition)
  }
}

export default EmptyContainer(ConditionsList)
