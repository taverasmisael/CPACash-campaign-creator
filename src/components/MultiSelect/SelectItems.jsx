import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/Menu/MenuItem'
import ListItemText from 'material-ui/List/ListItemText'

const SelectItems = ({ items = {}, value, ...props }) =>
  Object.keys(items).map((k, i)=> {
    const item = items[k]
    return (
      <MenuItem key={i} value={item.id} {...props}>
        <Checkbox checked={value.includes(item.id)} />
        <ListItemText primary={item.text} />
      </MenuItem>
    )
  })

SelectItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  value: PropTypes.arrayOf(PropTypes.string)
}
export default SelectItems
