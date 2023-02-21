import MissingParamError from './missing-param-error.js'

class HttpResponse {
  static badRequest (param) {
    return {
      statusCode: 400,
      body: new MissingParamError(param)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }
}

export default HttpResponse
