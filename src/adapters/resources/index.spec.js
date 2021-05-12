import * as cases from './cases'
import * as reviews from './reviews'
import * as movies from './movies'
import * as resources from './index'

describe('adapters/resources', () => {
  it('should contain the cases adapter', () => {
    expect(resources.cases).toEqual(cases)
  })

  it('should contain the reviews adapter', () => {
    expect(resources.reviews).toEqual(reviews)
  })

  it('should contain the movies adapter', () => {
    expect(resources.movies).toEqual(movies)
  })
})
