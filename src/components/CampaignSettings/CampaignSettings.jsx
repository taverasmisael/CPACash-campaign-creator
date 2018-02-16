import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import MenuItem from 'material-ui/Menu/MenuItem'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

class CampaignSettings extends PureComponent {
  static propTypes = {
    canSave: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    vertical: PropTypes.string.isRequired,
    verticalsList: PropTypes.array.isRequired,
    subVertical: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  }

  static defaultProps = {
    verticalsList: [],
    canSave: false
  }

  state = {
    subVerticals: []
  }

  handleVerticalChange = event => {
    const { target: { value } } = event
    const subVerticals = this.props.verticalsList.find(v => v.id === value).subVerticals
    this.setState({ subVerticals })
    this.props.onChange(event)
  }
  render() {
    const { classes, name, vertical, subVertical, verticalsList, onChange, onSave, canSave } = this.props
    const { subVerticals } = this.state
    return (
      <Paper elevation={1} className={classes.container}>
        <Typography variant="headline" align="center" component="h1" gutterBottom>
          Campaign Link Creator
        </Typography>
        <Grid container spacing={16} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              placeholder="Campaign Name"
              value={name}
              onChange={onChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              select
              name="vertical"
              label="Vertical"
              placeholder="Campaign Vertical"
              value={vertical}
              onChange={this.handleVerticalChange}
              InputLabelProps={{ shrink: true }}
            >
              {verticalsList.map(vertical => (
                <MenuItem key={vertical.id} value={vertical.id}>
                  {vertical.text}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={9} md={3}>
            <TextField
              select
              fullWidth
              name="subVertical"
              label="Sub-vertical"
              placeholder="Campaign subVertical"
              value={subVertical}
              onChange={onChange}
              InputLabelProps={{ shrink: true }}
            >
              {subVerticals.map(vertical => (
                <MenuItem key={vertical.id} value={vertical.id}>
                  {vertical.text}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Button
              variant="raised"
              disabled={!canSave}
              fullWidth
              color="primary"
              className={classes.submitButton}
              onClick={onSave}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(CampaignSettings)
