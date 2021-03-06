import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Input from 'material-ui/Input'
import InputLabel from 'material-ui/Input/InputLabel'
import FormControl from 'material-ui/Form/FormControl'

import SelectWrapper from './SelectWrapper'
class Autocomplete extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    multi: PropTypes.bool,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  onChange = v => {
    const name = this.props.name
    const val = Array.isArray(v) && v.includes('0') ? '0' : v
    const value = val || ''
    this.props.onChange({ target: { name, value } })
  }

  render() {
    const { label, value, options, placeholder, multi, ...props } = this.props
    const onChange = this.onChange
    
    return (
      <FormControl {...props}>
        <InputLabel shrink htmlFor="select-multiple-chip">
          {label}
        </InputLabel>
        <Input
          fullWidth
          inputComponent={SelectWrapper}
          inputProps={{
            ...props,
            multi,
            value,
            onChange,
            placeholder,
            options,
            instaceId: 'instanceID',
            id: 'instanceID',
            name: 'name',
            simpleValue: true
          }}
        />
      </FormControl>
    )
  }
}

export default Autocomplete
