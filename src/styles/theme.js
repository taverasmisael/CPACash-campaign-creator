import createMuiTheme from 'material-ui/styles/createMuiTheme'
import Palette from './palette'

const DEFAULT_SPACING = 8

const Theme = createMuiTheme({
  palette: Palette,
  overrides: {
    MuiFormControl: {
      root: {
        margin: DEFAULT_SPACING
      }
    },
    MuiInput: {
      root: {
        padding: 0
      },
      formControl: {
        'label + &': {
          marginTop: DEFAULT_SPACING * 3,
          '& > *:not(input)': {
            height: '100%!important'
          }
        }
      },
      inkbar: {
        '&:after': { display: 'none' },
        '&$focused:after': { display: 'none' }
      },
      underline: {
        '&:before': { display: 'none' },
        '&:hover:not($disabled):before': { display: 'none' },
        '&$disabled:before': { display: 'none' }
      },
      input: {
        padding: `${DEFAULT_SPACING}px ${DEFAULT_SPACING + DEFAULT_SPACING / 2}px`,
        border: `2px solid ${Palette.primary[200]}`,
        borderRadius: DEFAULT_SPACING / 2,
        '&:focus': {
          border: `2px solid ${Palette.primary[500]}`
        }
      }
    },
    MuiChip: {
      root: {
        margin: DEFAULT_SPACING / 4
      }
    },
    MuiFormControlLabel: {
      root: {
        margin: 0,
        marginLeft: DEFAULT_SPACING
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        background: '#fafafa'
      }
    },
    MuiExpansionPanelSummary: {
      expanded: {
        boxShadow: '0 2px #f5f5f5'
      }
    }
  }
})
export default Theme
