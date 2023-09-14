export interface UserLoginParams {
  username: string
  password: string
}

export interface UserSocialLoginParams {
  token: string
  type: SocialType
}

export interface UserRegisterParams {
  username: string
  password: string
  nickname: string
}

export type SocialType = 'GOOGLE' | 'DICE' | 'APPLE' | 'GITHUB' | 'MICROSOFT'
