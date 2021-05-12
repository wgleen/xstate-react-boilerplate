import * as config from '../config'
import * as interceptors from './interceptors'
import client from './client'

describe('client', () => {
  describe('defaults', () => {
    describe('headers.common', () => {
      it('should have a "Content-Type" prop equal to config.api.headers.contentType', () => {
        expect(client.defaults.headers.common).toHaveProperty('Content-Type', config.api.headers.contentType)
      })
    })
  })

  describe('interceptors', () => {
    describe('request', () => {
      it('should call interceptors.request', () => {
        const data = {
          objectData: {
            propertyData: 'propertyValue'
          },
          arrayData: [
            'itemValue'
          ],
          stringData: 'propertyValue'
        }

        const params = {
          paramProperty: 'paramValue'
        }

        const req = {
          data,
          params
        }

        client.interceptors.request.handlers[0].fulfilled(req)

        expect(
          client.interceptors.request.handlers[0].fulfilled(req)
        ).toEqual(interceptors.request(req))
      })
    })

    describe('response success', () => {
      it('should call interceptors.responseSuccess', () => {
        const data = {
          objectData: {
            propertyData: 'propertyValue'
          },
          arrayData: [
            'itemValue'
          ],
          stringData: 'propertyValue'
        }

        const res = {
          data
        }

        expect(
          client.interceptors.response.handlers[0].fulfilled(res)
        ).toEqual(interceptors.responseSuccess(res))
      })
    })

    describe('response error', () => {
      it('should call interceptors.responseError', () => {
        const data = {
          objectData: {
            propertyData: 'propertyValue'
          },
          arrayData: [
            'itemValue'
          ],
          stringData: 'propertyValue'
        }

        const err = {
          response: {
            data
          }
        }

        return expect(
          client.interceptors.response.handlers[0].rejected(err)
        ).rejects.toEqual(interceptors.responseError(err))
      })
    })
  })
})
