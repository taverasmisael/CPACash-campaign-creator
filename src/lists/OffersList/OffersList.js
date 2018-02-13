import React, { Component } from 'react'
import PropTypes from 'prop-types'

import EmptyContainer from '../../HOCs/EmptyContainer'
import Offer from '../../components/Offer'

const OfferShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired
})
class OffersList extends Component {
  static propTypes = {
    ...EmptyContainer.propTypes,
    offers: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, value: PropTypes.string.isRequired})).isRequired,
    activeOffers: PropTypes.arrayOf(OfferShape),
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleDelete = id => () => this.props.onDelete(id)
  handleChange = id => ({ target: { name, value } }) => this.props.onChange({ id, name, value })

  renderOffer = ({ id, value, weight }) => (
    <Offer
      id={id}
      key={id}
      offersList={this.props.offers}
      value={value}
      weight={weight}
      onChange={this.handleChange(id)}
      onDelete={this.handleDelete(id)}
    />
  )

  render() {
    const { activeOffers } = this.props
    return activeOffers.map(this.renderOffer)
  }
}

export default EmptyContainer(OffersList)
