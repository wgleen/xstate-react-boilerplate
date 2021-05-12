export default {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: process.env.REACT_APP_API_TIMEOUT,
  headers: {
    contentType: process.env.REACT_APP_API_HEADERS_CONTENT_TYPE
  }
}
