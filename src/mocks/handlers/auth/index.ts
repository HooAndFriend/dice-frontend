// ** msw Imports
import { rest } from 'msw'

// ** Fake Imports
import { user } from './mock.auth'

const getUser = (isError?: boolean) => {
  return rest.post('/auth', (_, res, ctx) => {
    if (isError) {
      return res(ctx.status(500))
    }

    return res(ctx.status(200), ctx.json(user))
  })
}

export const authHandlers = [getUser()]
