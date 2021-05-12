import * as reviews from './reviews'

describe('adapters/reviews', () => {
  describe('receiveMovie()', () => {
    it('should return a review properly configured', () => {
      const data = {
        id: 1,
        reviewContent: 'Best movie!',
        reviewMovie: {
          title: 'Movie Title',
          universe: 'Movie universe'
        }
      }

      const expected = {
        id: 1,
        review: 'Best movie!',
        movie: 'Movie Title',
        universe: 'Movie universe'
      }

      expect(reviews.receiveReview(data)).toEqual(expected)
    })
  })

  describe('receiveReviews()', () => {
    it('should return a review properly configured', () => {
      const data = [
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

      expect(reviews.receiveReviews(data)).toEqual(expected)
    })
  })

  describe('createReview()', () => {
    it('should return a review properly configured', () => {
      const data = {
        id: 1,
        review: 'Best movie!',
        movie: {
          id: 1,
          title: 'Movie Title',
          universe: 'Movie universe'
        }
      }

      const expected = {
        id: 1,
        reviewContent: 'Best movie!',
        reviewMovie: {
          id: 1,
          title: 'Movie Title',
          universe: 'Movie universe'
        }
      }

      expect(reviews.createReview(data)).toEqual(expected)
    })
  })
})
