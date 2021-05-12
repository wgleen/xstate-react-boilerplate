import nock from 'nock'
import * as config from '../../../config'
import * as requests from './requests'

describe('integrations/movies', () => {
  let scope

  beforeAll(() => {
    scope = nock(config.api.baseURL)
  })

  afterEach(() => {
    scope.done()
  })

  describe('fetchMovies()', () => {
    it('should return the response properly configured when request is success', () => {
      const response = [
        {
          id: 1,
          movie_title: 'Batman vs Superman',
          movie_universe: 'dc'
        },
        {
          id: 2,
          movie_title: 'Avengers Endgame',
          movie_universe: 'marvel'
        }
      ]

      scope.get('/movies').reply(200, response)

      const expected = [
        {
          id: 1,
          title: 'Batman vs Superman',
          universe: 'dc'
        },
        {
          id: 2,
          title: 'Avengers Endgame',
          universe: 'marvel'
        }
      ]

      return expect(requests.fetchMovies()).resolves.toEqual(expected)
    })

    it('should return the response error properly configured when request is fail', () => {
      const error = {
        code: 500,
        message: 'Internal Server Error'
      }

      scope.get('/movies').reply(500, error)

      const expected = {
        code: 500,
        message: 'Internal Server Error'
      }

      return expect(requests.fetchMovies()).rejects.toEqual(expected)
    })
  })
})
