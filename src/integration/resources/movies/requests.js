import client from '../../client'
import * as adapters from '../../../adapters'

export const fetchMovies = async () => {
  try {
    const response = await client.get('/movies')

    return adapters.resources.movies.receiveMovies(response.data)
  } catch (err) {
    return Promise.reject(err.response.data)
  }
}
