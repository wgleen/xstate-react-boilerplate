export const receiveReview = (data = {}) => ({
  id: data.id,
  review: data.reviewContent,
  movie: data.reviewMovie.title,
  universe: data.reviewMovie.universe
})

export const receiveReviews = (data = []) => (
  data.map(receiveReview)
)

export const createReview = (data = {}) => ({
  id: data.id,
  reviewContent: data.review,
  reviewMovie: {
    id: data.movie.id,
    title: data.movie.title,
    universe: data.movie.universe
  }
})
