export default theme => ({
  container: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit
  }),
  wrapper: {
    display: 'inline-block',
    margin: theme.spacing.unit,
    position: 'relative',
    '@media (min-width: 600px)': {
      marginTop: theme.spacing.unit * 4
    }
  },
  buttonProgress: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
})
