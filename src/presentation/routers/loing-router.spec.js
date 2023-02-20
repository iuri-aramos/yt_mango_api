class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return {
        statusCode: 500
      }
    }

    const { email, password } = httpRequest.body
    if (!email || !password) {
      return {
        statusCode: 400
      }
    }
  }
}

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
})
