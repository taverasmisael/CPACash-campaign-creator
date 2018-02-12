import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'
import Grid from 'material-ui/Grid'

const Offer = ({ offersList = [], selectedOffer = '', offerWeight = 100, offerId, onChange }) => (
  <Grid container spacing={16}>
    <Grid item xs={12} sm={6}>
      <TextField
        select
        fullWidth
        required
        margin="normal"
        label="Offer Name"
        name="selectedOffer"
        id={`Offer-${offerId}`}
        InputLabelProps={{ shrink: true }}
        value={selectedOffer}
        onChange={onChange}
        >
        {offersList.map(offer => (
          <MenuItem key={offer.id} value={offer.id}>
            {offer.value}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        margin="normal"
        required
        type="number"
        name="offerWeight"
        label="Offer Weight"
        id={`OfferWeight-${offerId}`}
        value={offerWeight}
        InputLabelProps={{ shrink: true }}
        onChange={onChange}
      />
    </Grid>
  </Grid>
)

Offer.propTypes = {
  offersList: PropTypes.array,
  selectedOffer: PropTypes.string.isRequired,
  offerWeight: PropTypes.string.isRequired,
  offerId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Offer
