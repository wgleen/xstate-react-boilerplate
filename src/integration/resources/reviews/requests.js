import * as fixtures from './fixtures'

export const fetchReviews = ({ responseAdapter }) => {
  const data = fixtures.reviewsListSuccess

  let response = data

  if (responseAdapter) response = responseAdapter(data)

  return Promise.resolve(response)
}

export const submitReview = () => Promise.resolve(fixtures.reviewsCreateSuccess)
