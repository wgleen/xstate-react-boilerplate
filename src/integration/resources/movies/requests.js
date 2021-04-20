import * as fixtures from './fixtures'

export const fetchMovies = ({ responseAdapter }) => {
  const data = fixtures.moviesListSuccess

  let response = data

  if (responseAdapter) response = responseAdapter(data)

  return Promise.resolve(response)
}
