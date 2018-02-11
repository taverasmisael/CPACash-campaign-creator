import React from 'react'
import PropTypes from 'prop-types'

import Chip from 'material-ui/Chip'

const ChipContainer = (selected = [], list, onDelete) => (
  <div style={{display: 'flex', flexFlow: 'row wrap'}}>
    {selected.map(value => <Chip key={value} label={list[value].value} onDelete={onDelete.bind(this, value)} />)}
  </div>
)

ChipContainer.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string),
  list: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ChipContainer
