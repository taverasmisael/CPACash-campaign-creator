import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { v4 as uuid } from 'uuid'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import OffersContainer from '../../containers/OffersContainer'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

class DefaultCondition extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    activeOffers: PropTypes.array.isRequired,
    offers: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  state = {
    activeOffers: []
  }

  handleDeletion = id => {
    this.setState(state => ({ activeOffers: state.activeOffers.filter(v => v.id !== id) }), this.onChange)
  }

  handleCreate = () => {
    this.setState(
      state => ({ activeOffers: [...state.activeOffers, { value: '0', weight: '15', id: uuid() }] }),
      this.onChange
    )
  }

  handleChange = ({ id, name, value }) => {
    this.setState(
      state => ({ activeOffers: state.activeOffers.map(v => (v.id === id ? { ...v, [name]: value } : v)) }),
      this.onChange
    )
  }

  onChange = () => {
    const { activeOffers } = this.state
    this.props.onChange(activeOffers)
  }
  componentDidMount() {
    const activeOffers = this.props.activeOffers
    this.setState({ activeOffers })
  }
  render() {
    const { classes, offers } = this.props
    const { activeOffers } = this.state
    return (
      <Paper elevation={1} className={classes.container}>
        <Typography variant="title" component="h2" gutterBottom paragraph>
          Default Offers
        </Typography>
        <OffersContainer
          activeOffers={activeOffers}
          offers={offers}
          onCreate={this.handleCreate}
          onDelete={this.handleDeletion}
          onChange={this.handleChange}
        />
      </Paper>
    )
  }
}

export default withStyles(styles)(DefaultCondition)
