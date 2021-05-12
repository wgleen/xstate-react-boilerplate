import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

function Col ({
  children,
  ...rest
}) {
  return (
    <Grid {...rest} item>
      {children}
    </Grid>
  )
}

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ])
}

export default Col
