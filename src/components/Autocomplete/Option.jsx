import React from 'react'
import PropTypes from 'prop-types'

import MenuItem from 'material-ui/Menu/MenuItem'

const Option = ({ key, style, focusedOption, focusOption, selectValue, option }) => {
  const isFocused = focusedOption.label === option.label
  const handleClick = () => selectValue(option)
  const styles = {
    ...style,
    height: 24,
    fontWeight: isFocused ? 500 : 400
  }
  return (
    <MenuItem key={key} onFocus={focusOption} selected={isFocused} onClick={handleClick} style={styles}>
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
