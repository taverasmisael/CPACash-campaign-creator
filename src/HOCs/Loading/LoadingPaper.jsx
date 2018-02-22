import React from 'react'
import Paper from 'material-ui/Paper'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

const LoadingPaper = ({ children, classes }) => <Paper className={classes.loadingWrapper}>{children}</Paper>

export default withStyles(styles)(LoadingPaper)
