import * as requests from '../../integration/resources/movies/requests'
import * as movies from './movies'

describe('domain/movies', () => {
  describe('fetchMovies()', () => {
    it('should return the fetchMovies response', async () => {
      const response = [
        {
          id: 1,
          title: 'Batman vs Superman',
          universe: 'dc'
        }
      ]

      const spy = jest
        .spyOn(requests, 'fetchMovies')
        .mockResolvedValue(response)

      const expected = response

      await expect(movies.fetchMovies()).resolves.toEqual(expected)

      spy.mockRestore()
    })
  })
})
