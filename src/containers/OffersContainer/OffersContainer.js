import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import OffersList from '../../lists/OffersList'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'

const OfferShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired
})
const OffersContainer = ({ offers, activeOffers, onDelete, classes, onCreate, onChange }) => (
  <Fragment>
    <div className={classes.containerList}>
      <OffersList
        emptyMessage="There are no offers in this rule. Please add a offer using the button down below"
        isEmpty={!activeOffers.length}
        onChange={onChange}
        onDelete={onDelete}
        offers={offers}
        activeOffers={activeOffers}
      />
    </div>
    <Button aria-haspopup="true" onClick={onCreate} className={classes.addButton}>
      Add Offer
    </Button>
  </Fragment>
)

OffersContainer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, value: PropTypes.string.isRequired }))
    .isRequired,
  activeOffers: PropTypes.arrayOf(OfferShape),
  onChange: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default withStyles(styles)(OffersContainer)
