import React from 'react'
import PropTypes from 'prop-types'

import DeleteIcon from 'material-ui-icons/Delete'
import Button from 'material-ui/Button'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

const DeleteButton = ({ classes, children, hasIcon, onClick, ...props }) => (
  <Button onClick={onClick} classes={{ root: classes.deleteButtonRoot, raised: classes.deleteButtonRaised }} {...props}>
    {hasIcon && <DeleteIcon className={classes.deleteButtonIcon} />} {children}
  </Button>
)

DeleteButton.propTypes = {
  ...Button.propTypes,
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  hasIcon: PropTypes.bool,
}

export default withStyles(styles)(DeleteButton)
