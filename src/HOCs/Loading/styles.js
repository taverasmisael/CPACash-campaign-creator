export default theme => ({
  wrapper: {
    position: 'relative'
  },
  loadingWrapper: {
    alignItems: 'center',
    background: 'rgba(255,255,255,.9)',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    margin: theme.spacing.unit,
    zIndex: 1000
  },
  componentWrapper: {
    filter: 'blur(1px)',
    opacity: .8
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
