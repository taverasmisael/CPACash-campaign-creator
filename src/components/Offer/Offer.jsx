import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

import Autocomplete from '../Autocomplete'

const Offer = ({ offersList = [], value = '', weight = 100, id, onChange, onDelete }) => (
  <Grid container spacing={16}>
    <Grid item xs={12} sm={6}>
      <Autocomplete
        fullWidth
        required
        margin="normal"
        label="Offer Name"
        name="value"
        id={`Offer-${id}`}
        value={value}
        onChange={onChange}
        options={offersList}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Grid container spacing={16} style={{ padding: 0 }} alignItems="flex-end">
        <Grid item xs={11}>
          <TextField
            fullWidth
            margin="normal"
            required
            type="number"
            name="weight"
            label="Offer Weight (%)"
            id={`OfferWeight-${id}`}
            value={weight}
            InputLabelProps={{ shrink: true }}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={1} style={{ marginBottom: '4px' }}>
          <IconButton aria-label="Delete" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

Offer.propTypes = {
  offersList: PropTypes.array,
  value: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Offer
