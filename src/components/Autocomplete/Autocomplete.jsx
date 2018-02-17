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
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
  }

  render() {
    const { label, value, options, onChange, placeholder, multi, ...props } = this.props
    return (
      <FormControl {...props}>
        <InputLabel shrink htmlFor="select-multiple-chip">
          {label}
        </InputLabel>
        <Input
          fullWidth
          inputComponent={SelectWrapper}
          inputProps={{
            multi,
            value,
            onChange,
            placeholder,
            instaceId: 'instanceID',
            id: 'instanceID',
            name: 'name',
            simpleValue: true,
            options
          }}
        />
      </FormControl>
    )
  }
}

export default Autocomplete
