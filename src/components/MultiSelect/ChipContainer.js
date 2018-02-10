import React from 'react'
import PropTypes from 'prop-types'

import Chip from 'material-ui/Chip'

const ChipContainer = (selected = [], onDelete) => <div>{selected.map(value => <Chip key={value} label={value} onDelete={onDelete.bind(this, value)}/>)}</div>

ChipContainer.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string),
  onDelete: PropTypes.func.isRequired
}

export default ChipContainer
