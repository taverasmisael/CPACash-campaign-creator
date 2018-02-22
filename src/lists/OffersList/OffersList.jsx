import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Loadable from 'react-loadable'

import EmptyContainer from '../../HOCs/EmptyContainer'
import AsyncLoading from '../../components/AsyncLoading'

const Offer = Loadable({
  loader: () => import('../../components/Offer'),
  loading: AsyncLoading({ name: 'Offers' })
})
const OfferShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired
})
class OffersList extends Component {
  static propTypes = {
    ...EmptyContainer.propTypes,
    offers: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, value: PropTypes.string.isRequired }))
      .isRequired,
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
    return this.props.activeOffers.map(this.renderOffer)
  }
}

export default EmptyContainer(OffersList)
