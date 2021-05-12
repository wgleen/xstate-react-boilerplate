import * as interceptors from './interceptors'

describe('integration/interceptors', () => {
  describe('request()', () => {
    it('should tranform data and params to snake case', () => {
      const req = {
        data: {
          objectData: {
            propertyData: 'propertyValue'
          },
          arrayData: [
            'itemValue'
          ],
          stringData: 'propertyValue'
        },
        params: {
          propertyParam: 'paramValue'
        }
      }

      const expected = {
        data: {
          object_data: {
            property_data: 'propertyValue'
          },
          array_data: [
            'itemValue'
          ],
          string_data: 'propertyValue'
        },
        params: {
          property_param: 'paramValue'
        }
      }

      expect(interceptors.request(req)).toEqual(expected)
    })
  })

  describe('responseSuccess()', () => {
    it('should tranform data and params to camel case', () => {
      const res = {
        data: {
          object_data: {
            property_data: 'propertyValue'
          },
          array_data: [
            'itemValue'
          ],
          string_data: 'propertyValue'
        }
      }

      const expected = {
        data: {
          objectData: {
            propertyData: 'propertyValue'
          },
          arrayData: [
            'itemValue'
          ],
          stringData: 'propertyValue'
        }
      }

      expect(interceptors.responseSuccess(res)).toEqual(expected)
    })
  })

  describe('responseError()', () => {
    it('should have receive a res object in snake case and tranform the data property to camel case by transform.toCamelCase lib function', () => {
      const err = {
        response: {
          data: {
            object_data: {
              property_data: 'propertyValue'
            },
            array_data: [
              'itemValue'
            ],
            string_data: 'propertyValue'
          }
        }
      }

      const expected = {
        response: {
          data: {
            objectData: {
              propertyData: 'propertyValue'
            },
            arrayData: [
              'itemValue'
            ],
            stringData: 'propertyValue'
          }
        }
      }

      expect(interceptors.responseError(err)).toEqual(expected)
    })
  })
})
