import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import Chip from 'material-ui/Chip'
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown'
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp'
import ClearIcon from 'material-ui-icons/Clear'
import CancelIcon from 'material-ui-icons/Cancel'

import Option from './Option'

import VirtualizedSelect from 'react-virtualized-select'
import 'react-select/dist/react-select.css'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

const SelectWrapper = ({ classes, emptyText = 'Not results were found.', ...props }) => (
  <VirtualizedSelect
    optionRenderer={Option}
    noResultsText={<Typography variant="caption">{emptyText}</Typography>}
    arrowRenderer={arrowProps => (arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
    clearRenderer={() => <ClearIcon />}
    valueComponent={({ value, children, onRemove, ...props }) => {
      let onDelete
      if (onRemove) {
        onDelete = event => {
          event.stopPropagation()
          event.preventDefault()
          onRemove(value)
        }
      }
      return (
        <Chip
          tabIndex={-1}
          label={children}
          className={classes.chip}
          deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
          onDelete={onDelete}
        />
      )
    }}
    {...props}
  />
)

SelectWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  emptyText: PropTypes.string
}

export default withStyles(styles)(SelectWrapper)
