import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import MenuItem from 'material-ui/Menu/MenuItem'

class Option extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
    onFocus: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  }
  handleClick = event => this.props.onSelect(this.props.option, event)

  render() {
    const { children, isFocused, isSelected, onFocus } = this.props
    
    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {children}
      </MenuItem>
    )
  }
}

export default Option
