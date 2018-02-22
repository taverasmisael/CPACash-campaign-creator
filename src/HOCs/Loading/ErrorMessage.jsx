import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import RefreshIcon from 'material-ui-icons/Refresh'

import LoadingPaper from './LoadingPaper'

const ErrorMessage = ({ message, classes = {}, onRetry }) => (
  <LoadingPaper>
    <Typography variant="headline" compnent="h2" align="center">
      {message}
    </Typography>
    <Button className={classes.retryButton} color="primary" onClick={onRetry}>
      Retry <RefreshIcon />
    </Button>
  </LoadingPaper>
)

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  classes: PropTypes.object,
  onRetry: PropTypes.func.isRequired
}

export default ErrorMessage
