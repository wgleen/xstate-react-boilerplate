import * as movies from './movies'

describe('adapters/movies', () => {
  describe('receiveMovie()', () => {
    it('should return a movie properly configured', () => {
      const data = {
        id: 1,
        movieTitle: 'Movie Title',
        movieUniverse: 'Movie universe'
      }

      const expected = {
        id: 1,
        title: 'Movie Title',
        universe: 'Movie universe'
      }

      expect(movies.receiveMovie(data)).toEqual(expected)
    })
  })

  describe('receiveMovies()', () => {
    it('should return a list of movies properly configured', () => {
      const data = [
        {
          id: 1,
          movieTitle: 'Movie Title One',
          movieUniverse: 'Movie universe one'
        },
        {
          id: 2,
          movieTitle: 'Movie Title Two',
          movieUniverse: 'Movie universe two'
        }
      ]

      const expected = [
        {
          id: 1,
          title: 'Movie Title One',
          universe: 'Movie universe one'
        },
        {
          id: 2,
          title: 'Movie Title Two',
          universe: 'Movie universe two'
        }
      ]

      expect(movies.receiveMovies(data)).toEqual(expected)
    })
  })
})
