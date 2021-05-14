import * as requests from '../../integration/resources/reviews'
import * as reviews from './reviews'

describe('domain/reviews', () => {
  describe('isGoodReview()', () => {
    it('should return false when movie.universe is not equal to universe', () => {
      const movieUniverse = 'A movie universe'

      const universe = 'A universe'

      expect(reviews.isGoodReview(movieUniverse, universe)).toBeFalse()
    })

    it('should return true when movie.universe is equal to universe', () => {
      const movieUniverse = 'A movie universe'

      const universe = 'A movie universe'

      expect(reviews.isGoodReview(movieUniverse, universe)).toBeTrue()
    })
  })

  describe('fetchReviews()', () => {
    it('should return the fetchReviews response', async () => {
      const response = [
        {
          id: 1,
          review: 'Best movie!',
          movie: 'Movie Title One',
          universe: 'Movie universe one'
        }
      ]

      const spy = jest
        .spyOn(requests, 'fetchReviews')
        .mockResolvedValue(response)

      const expected = response

      await expect(reviews.fetchReviews()).resolves.toEqual(expected)

      spy.mockRestore()
    })
  })

  describe('submitReview()', () => {
    it('should call submitReview with body properly configured and return the response', async () => {
      const response = {
        id: 1,
        review: 'Best movie!',
        movie: 'Movie Title',
        universe: 'Movie universe'
      }

      const spy = jest
        .spyOn(requests, 'submitReview')
        .mockResolvedValue(response)

      const data = {
        review: 'Best movie!',
        movie: {
          id: 1,
          title: 'Movie Title',
          universe: 'Movie universe'
        }
      }

      const expected = response

      await expect(reviews.submitReview(data)).resolves.toEqual(expected)
      expect(spy).toHaveBeenCalledWith(data)

      spy.mockRestore()
    })
  })
})
