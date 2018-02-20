import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import LinearProgress from 'material-ui/Progress/LinearProgress'
import RefreshIcon from 'material-ui-icons/Refresh'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

const LoadingMessage = ({ message, classes = {} }) => (
  <Paper className={classes.loadingWrapper}>
    <LinearProgress className={classes.progress} color="secondary" />
    <Typography variant="headline" component="h2" align="center">
      {message}
    </Typography>
  </Paper>
)

const ErrorMessage = ({ message, classes = {}, onRetry }) => (
  <Paper className={classes.loadingWrapper}>
    <Typography variant="headline" compnent="h2" align="center">
      {message}
    </Typography>
    <Button className={classes.retryButton} color="primary" onClick={onRetry}>
      Retry <RefreshIcon />
    </Button>
  </Paper>
)
const Loading = WrappedComponent => {
  const LoadingComponent = ({
    classes,
    hasError,
    isLoading = true,
    loadingMessage,
    errorMessage,
    onRetry,
    ...props
  }) => {
    const state = isLoading ? 0 : hasError ? 1 : 2
    switch (state) {
      case 0:
        return <LoadingMessage message={loadingMessage} classes={classes} />

      case 1:
        return <ErrorMessage message={errorMessage} classes={classes} onRetry={onRetry} />
      case 2:
        return <WrappedComponent {...props} />
      default:
        return <LoadingMessage message={loadingMessage} classes={classes} />
    }
  }
  LoadingComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    hasError: PropTypes.bool,
    isLoading: PropTypes.bool,
    onRetry: PropTypes.func,
    loadingMessage: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired
  }
  const LoadingEnhaced = withStyles(styles)(LoadingComponent)
  return LoadingEnhaced
}

export default Loading
