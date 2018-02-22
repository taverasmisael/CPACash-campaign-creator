export default theme => ({
  loadingWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
    margin: theme.spacing.unit
  },
  progress: {
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: 'calc(100% - 32px)'
  },
  retryButton: {
    marginTop: theme.spacing.unit * 2
  }
})
