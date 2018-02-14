import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Checkbox from 'material-ui/Checkbox'
import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

import MultiSelect from '../MultiSelect'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

class Condition extends PureComponent {
  static propTypes = {
    mode: PropTypes.bool,
    conditionsList: PropTypes.object,
    classes: PropTypes.object,
    onDelete: PropTypes.func.isRequired,
    conditionName: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string)
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
    const { onDelete, classes } = this.props
    return (
      <Grid container spacing={16}>
        <Grid item xs={8} sm={5} md={2} className={`${classes.item} ${classes.itemWithMargin}`}>
          <Typography variant="body2" gutterBottom>
            {conditionName}
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} className={`${classes.item} ${classes.itemWithMargin}`}>
          <FormControlLabel control={<Checkbox checked={mode} onChange={this.onModeChange} />} label={switchText} />
        </Grid>
        <Grid item xs={10} sm={11} md={7} className={classes.item}>
          <MultiSelect
            fullWidth
            label="Conditions"
            placeholder="Select the conditions"
            onChange={this.onChangeCondition}
            value={value}
            list={conditionsList}
          />
        </Grid>
        <Grid item xs={2} sm={1} className={`${classes.item} ${classes.itemWithMargin}`}>
          <IconButton aria-label="Delete" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Condition)
