import type { Response } from '.'

export interface UserLoginResponse extends Response {
  data: {
    accessToken: string
    refreshToken: string
  }
}

export interface UserRegisterResponse extends Response {
  data: {
    accessToken: string
    refreshToken: string
  }
}
