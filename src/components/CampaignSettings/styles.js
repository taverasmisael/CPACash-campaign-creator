export default theme => ({
  container: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit
  }),
  submitButton: {
    marginTop: theme.spacing.unit * 2.5
  }
})
