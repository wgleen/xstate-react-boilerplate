import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

function Row ({
  children,
  ...rest
}) {
  return (
    <Grid {...rest} container spacing={3}>
      {children}
    </Grid>
  )
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ])
}

export default Row
