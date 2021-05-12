import {
  cloneDeep,
  isArray,
  map,
  mapKeys,
  mapValues,
  isPlainObject,
  isString,
  snakeCase,
  camelCase
} from 'lodash'

export const TYPES_TO_CASE_FUNCTION = {
  snake: snakeCase,
  camel: camelCase
}

export const transformCase = (type, data) => {
  let dataObjt = cloneDeep(data)

  if (isString(dataObjt)) return dataObjt

  if (isArray(dataObjt)) return map(dataObjt, (item) => transformCase(type, item))

  dataObjt = mapKeys(dataObjt, (_, key) =>
    TYPES_TO_CASE_FUNCTION[type](key)
  )

  // Recursively apply throughout object
  return mapValues(dataObjt, (value) => {
    if (isPlainObject(value)) return transformCase(type, value)

    if (isArray(value)) return map(value, (item) => transformCase(type, item))

    return value
  })
}

export const toCamelCase = (data) => transformCase('camel', data)

export const toSnakeCase = (data) => transformCase('snake', data)
