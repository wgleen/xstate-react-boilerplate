import * as adapters from '../adapters'

export const request = (req) => {
  const newReq = { ...req }

  newReq.data = adapters.resources.cases.toSnakeCase(newReq.data)
  newReq.params = adapters.resources.cases.toSnakeCase(newReq.params)

  return newReq
}

export const responseSuccess = (res) => {
  const newRes = { ...res }

  newRes.data = adapters.resources.cases.toCamelCase(newRes.data)

  return newRes
}

export const responseError = (err) => {
  const newErr = { ...err }

  newErr.response = {
    data: adapters.resources.cases.toCamelCase(newErr?.response?.data)
  }

  return newErr
}
