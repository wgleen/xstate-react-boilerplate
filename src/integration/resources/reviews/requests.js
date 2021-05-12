import client from '../../client'
import * as adapters from '../../../adapters'

export const fetchReviews = async () => {
  try {
    const response = await client.get('/reviews')

    return adapters.resources.reviews.receiveReviews(response.data)
  } catch (err) {
    return Promise.reject(err.response.data)
  }
}

export const submitReview = async (data = {}) => {
  const {
    review,
    movie,
    universe
  } = data

  const body = adapters.resources.reviews.createReview({
    review,
    movie,
    universe
  })

  try {
    const response = await client.post('/reviews', body)

    return adapters.resources.reviews.receiveReview(response.data)
  } catch (err) {
    return Promise.reject(err.response.data)
  }
}
