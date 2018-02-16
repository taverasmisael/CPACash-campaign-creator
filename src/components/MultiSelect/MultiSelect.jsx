import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Select from 'material-ui/Select'
import Input from 'material-ui/Input'
import InputLabel from 'material-ui/Input/InputLabel'
import FormControl from 'material-ui/Form/FormControl'

import SelectItems from './SelectItems'
import withStyles from 'material-ui/styles/withStyles'
class MultiSelect extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired
  }
  onDeleteItem = item => {
    const value = this.props.value.filter(v => v !== item)
    this.props.onChange({ target: { value } })
  }
  render() {
    const { label, value, list, onChange, placeholder, ...props } = this.props
    return (
      <FormControl {...props}>
        <InputLabel shrink htmlFor="select-multiple-chip">
          {label}
        </InputLabel>
        <Select
          multiple
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          input={<Input id="select-multiple-chip" placeholder={placeholder} />}
          renderValue={selected => selected.map(s => list[s].text).join(', ')}
          {...props}
        >
          {SelectItems({ value: value, items: list })}
        </Select>
      </FormControl>
    )
  }
}
export default withStyles({}, { withTheme: true })(MultiSelect)
