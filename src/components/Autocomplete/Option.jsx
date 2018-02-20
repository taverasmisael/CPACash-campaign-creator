import React from 'react'
import PropTypes from 'prop-types'

import MenuItem from 'material-ui/Menu/MenuItem'

const Option = ({ key, isFocused, isSelected, focusOption, selectValue, option, ...props }) => {
  const handleClick = event => selectValue(option, event)
  return (
    <MenuItem
      key={key}
      onFocus={focusOption}
      selected={isFocused}
      onClick={handleClick}
      component="h1"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {option.label}
    </MenuItem>
  )
}
Option.propTypes = {
  key: PropTypes.string.isRequired,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
  focusOption: PropTypes.func.isRequired,
  selectValue: PropTypes.func.isRequired,
  option: PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
}
export default Option
