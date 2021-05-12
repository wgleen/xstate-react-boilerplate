import * as movies from './movies'
import * as reviews from './reviews'
import * as resources from './index'

describe('domain/resources', () => {
  it('should contain the movies', () => {
    expect(resources.movies).toEqual(movies)
  })

  it('should contain the reviews', () => {
    expect(resources.reviews).toEqual(reviews)
  })
})
