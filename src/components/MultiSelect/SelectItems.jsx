import React from 'react'
import PropTypes from 'prop-types'

import { map } from 'ramda'

import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/Menu/MenuItem'
import ListItemText from 'material-ui/List/ListItemText'

const SelectItems = ({ list = {}, keys, value, ...props }) =>
  map(k => {
    const item = list[k]
    return (
      <MenuItem key={item.id} value={item.id}>
        <Checkbox checked={value.includes(item.id)} />
        <ListItemText primary={item.text} />
      </MenuItem>
    )
  }, keys)

SelectItems.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.arrayOf(PropTypes.string)
}
export default SelectItems
