import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

function ReviewsCreateSelectUniverse ({
  onSelectUniverse
}) {
  return (
    <Box>
      <h1>Select a Universe</h1>
      <Button onClick={() => onSelectUniverse('marvel')}>Marvel</Button>
      <Button onClick={() => onSelectUniverse('dc')}>DC</Button>
    </Box>
  )
}

ReviewsCreateSelectUniverse.propTypes = {
  onSelectUniverse: PropTypes.func
}

export default ReviewsCreateSelectUniverse
