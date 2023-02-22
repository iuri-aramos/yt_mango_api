import HttpResponse from '../helpers/http-response.js'

export default class LoginRouter {
  constructor (authUseCase) {
    this.authUseCase = authUseCase
  }

  route (httpRequest) {
    if (!httpRequest ||
        !httpRequest.body ||
        !this.authUseCase ||
        !this.authUseCase.auth) {
      return HttpResponse.serverError()
    }

    const { email, password } = httpRequest.body
    if (!email) {
      return HttpResponse.badRequestError('email')
    }
    if (!password) {
      return HttpResponse.badRequestError('password')
    }

    const accessToken = this.authUseCase.auth(email, password)

    if (!accessToken) return HttpResponse.unathorizedError()

    return HttpResponse.ok({ accessToken })
  }
}
