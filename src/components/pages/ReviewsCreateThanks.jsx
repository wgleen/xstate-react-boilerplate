import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

function ReviewsCreateThanks ({
  onBack
}) {
  return (
    <Box>
      <h1>Thanks for rate</h1>

      <Button onClick={onBack}>Back to list</Button>
    </Box>
  )
}

ReviewsCreateThanks.propTypes = {
  onBack: PropTypes.func
}

export default ReviewsCreateThanks
