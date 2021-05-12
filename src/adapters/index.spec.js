import * as resources from './resources'
import * as adapters from './index'

describe('adapters', () => {
  it('should contain the resources', () => {
    expect(adapters.resources).toEqual(resources)
  })
})
