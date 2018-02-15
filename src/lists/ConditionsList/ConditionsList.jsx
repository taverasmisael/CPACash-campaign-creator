import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import EmptyContainer from '../../HOCs/EmptyContainer'
import Condition from '../../components/Condition'

const ConditionShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  conditionName: PropTypes.string.isRequired,
  conditionKey: PropTypes.string.isRequired,
  mode: PropTypes.bool.isRequired,
  value: PropTypes.arrayOf(PropTypes.string)
})
class ConditionsList extends PureComponent {
  static propTypes = {
    ...EmptyContainer.propTypes,
    conditions: PropTypes.object.isRequired,
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