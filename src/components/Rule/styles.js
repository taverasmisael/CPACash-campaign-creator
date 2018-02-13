export default theme => ({
  deleteButtonContainer: {
    textAlign: 'right'
  },
  deleteButtonRoot: {
    padding: theme.spacing.unit,
    color: theme.palette.error.main
  },
  deleteButtonRaised: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: theme.palette.error.main
      }
    }
  },
  deleteButtonIcon: {
    marginRight: theme.spacing.unit
  }
})
