import * as integration from '../../integration'

export const isGoodReview = (movie, universe) => movie.universe === universe

export const fetchReviews = () => integration.resources.reviews.requests.fetchReviews()

export const submitReview = (data = {}) => {
  const {
    review,
    movie,
    universe
  } = data

  return integration.resources.reviews.requests.submitReview({
    review,
    movie,
    universe
  })
}
