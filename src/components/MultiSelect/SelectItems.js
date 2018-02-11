import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/Menu/MenuItem'
import ListItemText from 'material-ui/List/ListItemText'

const SelectItems = ({ items = {}, value, ...props }) =>
  Object.keys(items).map(k => {
    const item = items[k]
    return (
      <MenuItem key={item.id} value={item.id} {...props}>
        <Checkbox checked={value.includes(item.id)} />
        <ListItemText primary={item.value} />
      </MenuItem>
    )
  })

SelectItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  value: PropTypes.arrayOf(PropTypes.string)
}
export default SelectItems
