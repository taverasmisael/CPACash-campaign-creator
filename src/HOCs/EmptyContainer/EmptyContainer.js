import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const EmptyMessage = ({ message }) => (
  <Typography variant="subheading" gutterBottom align="center">
    {message}
  </Typography>
)
const EmptyContainer = WrappedComponent =>
  class EmptyContainer extends PureComponent {
    static propTypes = {
      isEmpty: PropTypes.bool.isRequired,
      emptyMessage: PropTypes.string.isRequired
    }
    render() {
      const { isEmpty, emptyMessage, ...props } = this.props
      return isEmpty ? <EmptyMessage message={emptyMessage} /> : <WrappedComponent {...props} />
    }
  }

export default EmptyContainer
