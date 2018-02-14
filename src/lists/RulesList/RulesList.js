import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import compare from 'just-compare'

import EmptyContainer from '../../HOCs/EmptyContainer'
import Rule from '../../components/Rule'

class RulesList extends PureComponent {
  state = {
    rulesKeys: []
  }
  static propTypes = {
    ...EmptyContainer.propTypes,
    conditions: PropTypes.any.isRequired,
    offersList: PropTypes.any.isRequired,
    rules: PropTypes.object.isRequired
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

  componentWillReceiveProps(nextProps) {
    if (!compare(nextProps.rules, this.props.rules)) {
      const rulesKeys = Object.keys(nextProps.rules)
      this.setState({ rulesKeys })
    }
  }

  componentDidMount() {
    const rulesKeys = Object.keys(this.props.rules)
    this.setState({ rulesKeys })
  }
  render() {
    const { rulesKeys } = this.state
    return rulesKeys.map(k => this.props.rules[k]).map(this.renderRule)
  }
}

export default EmptyContainer(RulesList)
