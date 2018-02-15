import React from 'react'

import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import LinearProgress from 'material-ui/Progress/LinearProgress'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

const LoadingMessage = ({ message, classes ={} }) => (
  <Paper className={classes.loadingWrapper}>
    <LinearProgress className={classes.progress} color="secondary" />
    <Typography variant="headline" component="h2" align="center">
      {message}
    </Typography>
  </Paper>
)

const Loading = WrappedComponent => {
  const LoadingComponent = ({ classes, isLoading = true, loadingMessage = '', ...props }) =>
    isLoading ? (
      <div className={classes.wrapper}>
        <LoadingMessage message={loadingMessage} classes={classes} />
      </div>
    ) : (
      <WrappedComponent {...props} />
    )
  const LoadingEnhaced = withStyles(styles)(LoadingComponent)
  return LoadingEnhaced
}

export default Loading
