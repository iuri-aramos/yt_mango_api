import LoginRouter from './login-router.js'
import MissingParamError from '../helpers/missing-param-error.js'

describe('Login Router', () => {
  it('should return 400 if no email is provided', () => {
    // system under test
    const sut = new LoginRouter()

    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }

    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  it('should return 400 if no password is provided', () => {
    // system under test
    const sut = new LoginRouter()

    const httpRequest = {
      body: {
        email: 'user@user.com'
      }
    }

    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  it('should return 500 if no httpRequest is provided', () => {
    // system under test
    const sut = new LoginRouter()

    const httpResponse = sut.route(null)
    expect(httpResponse.statusCode).toBe(500)
  })

  it('should return 500 if httpRequest has no body', () => {
    // system under test
    const sut = new LoginRouter()

    const httpRequest = { }

    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })

  it('should return 500 if httpRequest body is null', () => {
    // system under test
    const sut = new LoginRouter()

    const httpRequest = {
      body: null
    }

    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
