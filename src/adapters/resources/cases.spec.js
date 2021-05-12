import * as cases from './cases'

describe('adapters/cases', () => {
  describe('transformCase()', () => {
    it('should return data in snake case when type argument is "snake"', () => {
      const data = {
        objectData: {
          propertyData: 'propertyValue'
        },
        arrayData: [
          'itemValue'
        ],
        stringData: 'propertyValue'
      }

      expect(cases.transformCase('snake', data)).toEqual({
        object_data: {
          property_data: 'propertyValue'
        },
        array_data: [
          'itemValue'
        ],
        string_data: 'propertyValue'
      })
    })

    it('should return data in camel case when type argument is "camel"', () => {
      const data = {
        object_data: {
          property_data: 'propertyValue'
        },
        array_data: [
          'itemValue'
        ],
        string_data: 'propertyValue'
      }

      expect(cases.transformCase('camel', data)).toEqual({
        objectData: {
          propertyData: 'propertyValue'
        },
        arrayData: [
          'itemValue'
        ],
        stringData: 'propertyValue'
      })
    })
  })

  describe('toCamelCase()', () => {
    it('should return data in camel case', () => {
      const data = {
        object_data: {
          property_data: 'propertyValue'
        },
        array_data: [
          'itemValue'
        ],
        string_data: 'propertyValue'
      }

      expect(cases.toCamelCase(data)).toEqual({
        objectData: {
          propertyData: 'propertyValue'
        },
        arrayData: [
          'itemValue'
        ],
        stringData: 'propertyValue'
      })
    })
  })

  describe('toSnakeCase()', () => {
    it('should return data in snake case', () => {
      const data = {
        objectData: {
          propertyData: 'propertyValue'
        },
        arrayData: [
          'itemValue'
        ],
        stringData: 'propertyValue'
      }

      expect(cases.toSnakeCase(data)).toEqual({
        object_data: {
          property_data: 'propertyValue'
        },
        array_data: [
          'itemValue'
        ],
        string_data: 'propertyValue'
      })
    })
  })
})
