import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Checkbox from 'material-ui/Checkbox'
import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

import MultiSelect from '../MultiSelect'

class Condition extends PureComponent {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    mode: PropTypes.bool,
    conditionName: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string),
    conditionsList: PropTypes.object
  }

  static defaultProps = {
    mode: false,
    value: [],
    conditionsList: []
  }
  state = {
    switchText: 'Is'
  }
  onModeChange = (event, mode) => this.setState({ mode, switchText: mode ? 'Is' : 'Is not' })
  onChangeCondition = ({ target }) => this.setState({ value: target.value })

  componentWillMount() {
    const { mode, conditionName, conditionsList, value } = this.props
    this.setState({ mode, conditionName, conditionsList, value, switchText: mode ? 'Is' : 'Is not' })
  }

  render() {
    const { mode, conditionName, switchText, value, conditionsList } = this.state
    const { onDelete } = this.props
    return (
      <Grid container spacing={16} alignItems="flex-end">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="title">{conditionName}</Typography>
          <FormControlLabel control={<Checkbox checked={mode} onChange={this.onModeChange} />} label={switchText} />
        </Grid>
        <Grid item xs={10} sm={4} md={7}>
          <MultiSelect
            fullWidth
            label="Conditions"
            placeholder="Select the conditions"
            onChange={this.onChangeCondition}
            value={value}
            list={conditionsList}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton aria-label="Delete" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    )
  }
}

export default Condition
