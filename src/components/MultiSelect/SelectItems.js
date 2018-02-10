import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/Menu/MenuItem'
import ListItemText from 'material-ui/List/ListItemText'

const SelectItems = ({ items = [], value, ...props }) =>
  items.map(item => (
    <MenuItem key={item} value={item} {...props}>
      <Checkbox checked={value.includes(item)} />
      <ListItemText primary={item} />
    </MenuItem>
  ))

SelectItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.arrayOf(PropTypes.string)
}
export default SelectItems
