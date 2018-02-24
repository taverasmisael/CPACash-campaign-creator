import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Loadable from 'react-loadable'

import IconButton from 'material-ui/IconButton'
import MUISnackbar from 'material-ui/Snackbar'
import CloseIcon from 'material-ui-icons/Close'

import withStyles from 'material-ui/styles/withStyles'
const ErrorIcon = Loadable({
  loader: () => import('material-ui-icons/Error'),
  loading: () => <svg width="8" height="8" />
})

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  },
  errorIcon: {
    color: theme.palette.error[400],
    marginRight: theme.spacing.unit
  }
})
const snackPosition = { vertical: 'bottom', horizontal: 'right' }
const Snackbar = ({ classes, show, onClose, message, isError, duration = 3000 }) => (
  <MUISnackbar
    anchorOrigin={snackPosition}
    open={show}
    autoHideDuration={isError ? null : duration}
    onClose={onClose}
    SnackbarContentProps={{ 'aria-describedby': 'message-id' }}
    message={
      <Fragment>
        {isError && <ErrorIcon className={classes.errorIcon} />}
        <span id="message-id">{message}</span>
      </Fragment>
    }
    action={
      <Fragment>
        <IconButton key="close" aria-label="Close" color="inherit" className={classes.close} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Fragment>
    }
  />
)

Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  show: PropTypes.bool,
  isError: PropTypes.bool,
  duration: PropTypes.number
}

export default withStyles(styles)(Snackbar)
