import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import LinearProgress from 'material-ui/Progress/LinearProgress'

import LoadingPaper from './LoadingPaper'

const ErrorMessage = ({ message, classes = {} }) => (
  <LoadingPaper>
    <LinearProgress className={classes.progress} color="secondary" />
    <Typography variant="headline" compnent="h2" align="center">
      {message}
    </Typography>
  </LoadingPaper>
)

ErrorMessage.PropTypes = {
  message: PropTypes.string.isRequired,
  classes: PropTypes.object
}

export default ErrorMessage
