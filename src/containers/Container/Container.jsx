import React from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

const Container = ({ classes, title, ListComponent, listProps, onCreate, canCreate, createText, CustomCreator }) => (
  <div className={classes.wrapper}>
    <Typography variant="subheading" gutterBottom component="h4">
      {title}
    </Typography>
    <div className={classes.containerList}>
      <ListComponent {...listProps} />
    </div>
    {CustomCreator ? (
      <CustomCreator canCreate={canCreate} />
    ) : (
      <Button aria-haspopup="true" onClick={onCreate} size="small" disabled={!canCreate} color="secondary">
        {createText}
      </Button>
    )}
  </div>
)
Container.defaultProps = {
  canCreate: true
}
Container.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  ListComponent: PropTypes.func.isRequired,
  listProps: PropTypes.object.isRequired,
  onCreate: PropTypes.func,
  createText: PropTypes.string,
  canCreate: PropTypes.bool
}

export default withStyles(styles)(Container)
