import React from 'react'
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

const Condition = ({ conditionsList = [], value, mode, classes, conditionName, onDelete, onChange }) => (
  <Grid container spacing={16}>
    <Grid item xs={8} sm={5} md={2} className={`${classes.item} ${classes.itemWithMargin}`}>
      <Typography variant="body2" gutterBottom component="p">
        {conditionName}
      </Typography>
    </Grid>
    <Grid item xs={4} sm={2} className={`${classes.item} ${classes.itemWithMargin}`}>
      <FormControlLabel
        name="mode"
        control={<Checkbox checked={mode} onChange={onChange} />}
        label={mode ? 'Is' : 'Is not'}
      />
    </Grid>
    <Grid item xs={10} sm={11} md={7} className={classes.item}>
      <MultiSelect
        fullWidth
        label="Conditions"
        placeholder="Select the conditions"
        name="value"
        onChange={onChange}
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

Condition.propTypes = {
  mode: PropTypes.bool,
  conditionsList: PropTypes.object,
  classes: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  conditionName: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string)
}

export default withStyles(styles)(Condition)
