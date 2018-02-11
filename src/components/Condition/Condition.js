import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Switch from 'material-ui/Switch'
import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

import MultiSelect from '../MultiSelect'

class Condition extends PureComponent {
  static propTypes = {
    mode: PropTypes.bool,
    conditionName: PropTypes.string.isRequired,
    activeConditions: PropTypes.arrayOf(PropTypes.string),
    conditionsList: PropTypes.object
  }

  static defaultProps = {
    mode: false,
    activeConditions: [],
    conditionsList: []
  }
  state = {
    switchText: 'Is'
  }
  onModeChange = (event, mode) => this.setState({ mode, switchText: mode ? 'Is' : 'Is not' })
  onChangeCondition = ({ target }) => this.setState({ activeConditions: target.value })

  componentWillMount() {
    const { mode, conditionName, conditionsList, activeConditions } = this.props
    this.setState({ mode, conditionName, conditionsList, activeConditions, switchText: mode ? 'Is' : 'Is not' })
  }

  render() {
    const { mode, conditionName, switchText, activeConditions, conditionsList } = this.state
    const { onDelete, id } = this.props
    return (
      <Grid container spacing={16} alignItems="flex-end">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="title">{conditionName}</Typography>
          <FormControlLabel control={<Switch checked={mode} onChange={this.onModeChange} />} label={switchText} />
        </Grid>
        <Grid item xs={10} sm={4} md={7}>
          <MultiSelect
            fullWidth
            label="Conditions"
            placeholder="Select the conditions"
            onChange={this.onChangeCondition}
            value={activeConditions}
            list={conditionsList}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton aria-label="Delete" onClick={onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    )
  }
}

export default Condition
