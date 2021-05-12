import * as requests from './requests'
import * as movies from './index'

describe('integration/movies', () => {
  it('should contain the requests', () => {
    expect(movies.requests).toEqual(requests)
  })
})
