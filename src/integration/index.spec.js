import client from './client'
import * as interceptors from './interceptors'
import * as resources from './resources'
import * as integration from './index'

describe('integration', () => {
  it('should contain the http client', () => {
    expect(integration.client).toEqual(client)
  })

  it('should contain the resources', () => {
    expect(integration.interceptors).toEqual(interceptors)
  })

  it('should contain the resources', () => {
    expect(integration.resources).toEqual(resources)
  })
})
