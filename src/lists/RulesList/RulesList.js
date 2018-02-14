import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import EmptyContainer from '../../HOCs/EmptyContainer'
import Rule from '../../components/Rule'

const RuleShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  activeConditions: PropTypes.array.isRequired,
  activeOffers: PropTypes.array.isRequired
})

class RulesList extends PureComponent {
  state = {
    rulesKeys: []
  }
  static propTypes = {
    ...EmptyContainer.propTypes,
    conditions: PropTypes.any.isRequired,
    offersList: PropTypes.any.isRequired,
    rules: PropTypes.arrayOf(RuleShape).isRequired
  }
  static defaultProps = {
    rules: {}
  }

  handleDelete = id => () => this.props.onDelete(id)
  hanndleChange = id => changes => this.props.onChange({ id, changes })
  renderRule = ({ id, activeOffers, activeConditions }) => (
    <Rule
      id={id}
      key={id}
      conditions={this.props.conditions}
      offersList={this.props.offersList}
      activeOffers={activeOffers}
      activeConditions={activeConditions}
      onDelete={this.handleDelete(id)}
      onChange={this.hanndleChange(id)}
    />
  )

  render() {
    return this.props.rules.map(this.renderRule)
  }
}

export default EmptyContainer(RulesList)
