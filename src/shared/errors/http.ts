export class ServerError extends Error {
  readonly error: Error
  constructor (error?: Error) {
    super(error.message)
    this.error = {
      name: 'ServerError',
      message: error.message,
      stack: error?.stack
    }
  }
}

export class UnauthorizedError extends Error {
  readonly error: Error
  constructor () {
    super('Unauthorized')
    this.error = {
      name: 'UnauthorizedError',
      message: 'Unauthorized'
    }
  }
}

export class ForbiddenError extends Error {
  readonly error: Error
  constructor () {
    super('Access denied')
    this.error = {
      name: 'ForbiddenError',
      message: 'Access denied'
    }
  }
}

export class NotFoundError extends Error {
  readonly error: Error
  constructor () {
    super('Not found')
    this.error = {
      name: 'NotFoundError',
      message: 'Not found'
    }
  }
}