import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

const AsyncLoading = ({ name = 'Component' }) => () => (
  <Typography variant="caption" component="p" align="center" paragraph style={{ width: '100%', padding: 8 }}>
    Loading {name}...
  </Typography>
)

AsyncLoading.propTypes = {
  name: PropTypes.string
}

export default AsyncLoading
