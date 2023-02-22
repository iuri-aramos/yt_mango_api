import MissingParamError from './missing-param-error.js'
import UnauthorizedError from './unauthorized-error.js'

class HttpResponse {
  static badRequestError (param) {
    return {
      statusCode: 400,
      body: new MissingParamError(param)
    }
  }

  static unathorizedError (param) {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static ok () {
    return {
      statusCode: 200
    }
  }
}

export default HttpResponse
