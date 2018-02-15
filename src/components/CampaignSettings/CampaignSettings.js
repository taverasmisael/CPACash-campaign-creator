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
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    vertical: PropTypes.string.isRequired,
    verticalsList: PropTypes.array.isRequired,
    subvertical: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    verticalsList: []
  }

  state = {
    subverticals: []
  }

  handleVerticalChange = event => {
    const { target: { value } } = event
    const subverticals = this.props.verticalsList.find(v => v.id === value).subverticals
    this.setState({ subverticals })
    this.props.onChange(event)
  }
  render() {
    const { classes, name, vertical, subvertical, verticalsList, onChange } = this.props
    const { subverticals } = this.state
    return (
      <Paper elevation={4} className={classes.container}>
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
                  {vertical.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={9} md={3}>
            <TextField
              select
              fullWidth
              name="subvertical"
              label="Subvertical"
              placeholder="Campaign Subvertical"
              value={subvertical}
              onChange={onChange}
              InputLabelProps={{ shrink: true }}
            >
              {subverticals.map(vertical => (
                <MenuItem key={vertical.id} value={vertical.id}>
                  {vertical.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Button variant="raised" fullWidth color="primary" className={classes.submitButton}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(CampaignSettings)
