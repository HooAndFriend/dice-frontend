import type { Response } from '.'

export interface UserLoginResponse extends Response {
  data: {
    token: {
      accessToken: string
      refreshToken: string
    }
    user: {
      nickname: string
    }
  }
}

export interface UserSocialLoginResponse extends Response {
  data: {
    token: {
      accessToken: string
      refreshToken: string
    }
    user: {
      nickname: string
    }
  }
}

export interface UserRegisterResponse extends Response {
  data: {
    token: {
      accessToken: string
      refreshToken: string
    }
    user: {
      nickname: string
    }
  }
}

export interface UserSocialRegisterResponse extends Response {
  data: {
    token: {
      accessToken: string
      refreshToken: string
    }
    user: {
      nickname: string
    }
  }
}
