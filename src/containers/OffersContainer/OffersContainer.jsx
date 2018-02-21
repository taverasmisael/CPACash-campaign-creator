import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import OffersList from '../../lists/OffersList'

const OffersContainer = ({ offers, activeOffers, onDelete, classes, onCreate, onChange }) => (
  <Container
    title="Offers"
    createText="Add Offer"
    canCreate={Boolean(offers.length)}
    ListComponent={OffersList}
    listProps={{
      offers,
      activeOffers,
      onDelete,
      onChange,
      emptyMessage: 'There are no offers in this rule. Please add a offer using the button down below',
      isEmpty: !activeOffers.length
    }}
    onCreate={onCreate}
  />
)

const OfferShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired
})

OffersContainer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, value: PropTypes.string.isRequired }))
    .isRequired,
  activeOffers: PropTypes.arrayOf(OfferShape),
  onChange: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default OffersContainer
