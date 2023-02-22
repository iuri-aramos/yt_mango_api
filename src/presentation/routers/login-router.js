import HttpResponse from '../helpers/http-response.js'

export default class LoginRouter {
  constructor (authUseCase) {
    this.authUseCase = authUseCase
  }

  async route (httpRequest) {
    try {
      const { email, password } = httpRequest.body

      if (!email) {
        return HttpResponse.badRequestError('email')
      }
      if (!password) {
        return HttpResponse.badRequestError('password')
      }

      const accessToken = await this.authUseCase.auth(email, password)

      if (!accessToken) return HttpResponse.unathorizedError()

      return HttpResponse.ok({ accessToken })
    } catch (error) {
      return HttpResponse.serverError()
    }
  }
}
