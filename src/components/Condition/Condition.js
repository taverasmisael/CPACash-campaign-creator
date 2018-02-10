import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Switch from 'material-ui/Switch'
import Grid from 'material-ui/Grid'

import MultiSelect from '../MultiSelect'

class Condition extends PureComponent {
  static propTypes = {
    mode: PropTypes.bool,
    conditionName: PropTypes.string.isRequired,
    activeConditions: PropTypes.arrayOf(PropTypes.string),
    conditionsList: PropTypes.arrayOf(PropTypes.string)
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

    return (
      <Grid container spacing={16} alignItems="flex-end">
        <Grid item xs={3}>
          <Typography variant="title">{conditionName}</Typography>
          <FormControlLabel control={<Switch checked={mode} onChange={this.onModeChange} />} label={switchText} />
        </Grid>
        <Grid item xs={9}>
          <MultiSelect
            fullWidth
            label="Conditions"
            placeholder="Select the conditions"
            onChange={this.onChangeCondition}
            value={activeConditions}
            list={conditionsList}
            disabled={!conditionsList.length}
          />
        </Grid>
      </Grid>
    )
  }
}

export default Condition
