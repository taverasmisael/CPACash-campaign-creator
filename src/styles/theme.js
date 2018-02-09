import createMuiTheme from 'material-ui/styles/createMuiTheme'

import Palette from './palette'
const Theme = createMuiTheme({ palette: Palette })
console.log(Theme)
export default Theme
