import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import { titleCase } from 'change-case'
import compare from 'just-compare'

import Button from 'material-ui/Button'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/Menu/MenuItem'

import Container from '../Container'
import ConditionsList from '../../lists/ConditionsList'

const ConditionShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  conditionName: PropTypes.string.isRequired,
  conditionKey: PropTypes.string.isRequired,
  mode: PropTypes.bool.isRequired,
  value: PropTypes.arrayOf(PropTypes.string)
})
class ConditionsContainer extends PureComponent {
  static propTypes = {
    conditions: PropTypes.object.isRequired,
    activeConditions: PropTypes.arrayOf(ConditionShape),
    onCreateCondition: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  state = { anchorEl: null, activeConditionsKeys: [] }
  openAddMenu = event => this.setState({ anchorEl: event.currentTarget })
  closeAddMenu = () => this.setState({ anchorEl: null })

  onCreateCondition = k => () => {
    this.props.onCreateCondition(k)
    this.setState({ anchorEl: null })
  }

  componentWillReceiveProps(nextProps) {
    if (!compare(nextProps.activeConditions, this.props.activeConditions)) {
      this.setState({
        activeConditionsKeys: nextProps.activeConditions.map(c => c.conditionKey)
      })
    }
  }

  componentDidMount() {
    this.setState({
      activeConditionsKeys: this.props.activeConditions.map(c => c.conditionKey)
    })
  }

  creator = () => {
    const { anchorEl, activeConditionsKeys } = this.state
    const { conditions } = this.props
    return (
      <Fragment>
        <Button
          color="secondary"
          size="small"
          aria-haspopup="true"
          onClick={this.openAddMenu}
          aria-owns={anchorEl ? 'simple-menu' : null}
        >
          Add Condition
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.closeAddMenu}>
          {Object.keys(conditions).map(k => (
            <MenuItem key={k} onClick={this.onCreateCondition(k)} disabled={activeConditionsKeys.includes(k)}>
              {titleCase(k)}
            </MenuItem>
          ))}
        </Menu>
      </Fragment>
    )
  }

  render() {
    const { conditions, activeConditions, onDelete, onChange } = this.props
    return (
      <Container
        ListComponent={ConditionsList}
        listProps={{
          onChange,
          onDelete,
          conditions,
          emptyMessage: 'There are no conditions in this rule. Please add a condition using the button down below',
          isEmpty: !activeConditions.length,
          activeConditions: activeConditions,
        }}
        CustomCreator={this.creator}
        title="Conditions"
      />
    )
  }
}

export default ConditionsContainer
