import nock from 'nock'
import * as config from '../../config'
import * as requests from './reviews'

describe('integrations/reviews', () => {
  let scope

  beforeAll(() => {
    scope = nock(config.api.baseURL)
  })

  afterEach(() => {
    scope.done()
  })

  describe('fetchReviews()', () => {
    it('should return the response properly configured when request is success', () => {
      const response = [
        {
          id: 1,
          reviewContent: 'Best movie!',
          reviewMovie: {
            title: 'Movie Title One',
            universe: 'Movie universe one'
          }
        },
        {
          id: 2,
          reviewContent: 'I hate this movie!',
          reviewMovie: {
            title: 'Movie Title Two',
            universe: 'Movie universe two'
          }
        }
      ]

      scope.get('/reviews').reply(200, response)

      const expected = [
        {
          id: 1,
          review: 'Best movie!',
          movie: 'Movie Title One',
          universe: 'Movie universe one'
        },
        {
          id: 2,
          review: 'I hate this movie!',
          movie: 'Movie Title Two',
          universe: 'Movie universe two'
        }
      ]

      return expect(requests.fetchReviews()).resolves.toEqual(expected)
    })

    it('should return the response error properly configured when request is fail', () => {
      const error = {
        code: 500,
        message: 'Internal Server Error'
      }

      scope.get('/reviews').reply(500, error)

      const expected = {
        code: 500,
        message: 'Internal Server Error'
      }

      return expect(requests.fetchReviews()).rejects.toEqual(expected)
    })
  })

  describe('submitReview()', () => {
    const data = {
      review: 'Best movie!',
      movie: {
        id: 1,
        title: 'Movie Title',
        universe: 'Movie universe'
      }
    }

    const body = {
      review_content: 'Best movie!',
      review_movie: {
        id: 1,
        title: 'Movie Title',
        universe: 'Movie universe'
      }
    }

    it('should submit with body properly configured and return the response properly configured when request is success', () => {
      const response = {
        id: 1,
        review_content: 'Best movie!',
        review_movie: {
          id: 1,
          title: 'Movie Title',
          universe: 'Movie universe'
        }
      }

      scope.post('/reviews', body).reply(200, response)

      const expected = {
        id: 1,
        review: 'Best movie!',
        movie: 'Movie Title',
        universe: 'Movie universe'
      }

      return expect(requests.submitReview(data)).resolves.toEqual(expected)
    })

    it('should submit with body properly configured and return the err properly configured when request is success', () => {
      const error = {
        code: 500,
        message: 'Internal Server Error'
      }

      scope.post('/reviews', body).reply(500, error)

      const expected = {
        code: 500,
        message: 'Internal Server Error'
      }

      return expect(requests.submitReview(data)).rejects.toEqual(expected)
    })
  })
})
