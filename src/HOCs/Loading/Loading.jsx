import React from 'react'
import PropTypes from 'prop-types'

import Loadable from 'react-loadable'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'
import LoadingMessage from './LoadingMessage'

const ErrorMessage = Loadable({
  loader: () => import(/* webpackChunkName: "errorMessage" */ './ErrorMessage'),
  loading: () => <div />
})

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
