import type { Response } from '.'

export interface UserLoginResponse extends Response {
  data: {
    accessToken: string
    refreshToken: string
  }
}
