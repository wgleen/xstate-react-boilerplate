import * as resources from './resources'
import * as domain from './index'

describe('domain', () => {
  it('should contain the resources', () => {
    expect(domain.resources).toEqual(resources)
  })
})
