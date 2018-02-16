import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker from './utilities/registerServiceWorker'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Theme } from './styles'
import './styles/index.css'

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
