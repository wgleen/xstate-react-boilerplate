import * as integration from '../../integration'

export const isGoodReview = (movieUniverse, universe) => movieUniverse === universe

export const fetchReviews = () => integration.resources.reviews.fetchReviews()

export const submitReview = (data = {}) => {
  const {
    review,
    movie
  } = data

  return integration.resources.reviews.submitReview({
    review,
    movie
  })
}
