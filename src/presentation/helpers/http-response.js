import MissingParamError from './missing-param-error.js'
import ServerError from './server-error.js'
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
      statusCode: 500,
      body: new ServerError()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}

export default HttpResponse
