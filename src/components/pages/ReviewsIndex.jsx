import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

function ReviewsIndex ({
  onReviewCreate,
  reviews
}) {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.id}>{review.content}</div>
      ))}

      <Button onClick={onReviewCreate}>New</Button>
    </>
  )
}

ReviewsIndex.defaultProps = {
  reviews: []
}

ReviewsIndex.propTypes = {
  onReviewCreate: PropTypes.func,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string
    })
  )
}

export default ReviewsIndex
