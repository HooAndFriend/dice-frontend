import type {
  UserLoginResponse,
  UserRegisterResponse,
  UserSocialLoginResponse,
} from '@/types/api/user'
import { api } from '..'
import type {
  UserLoginParams,
  UserRegisterParams,
  UserSocialLoginParams,
} from '@/types/user'

// Auth Api CreateApi
export const authApi = api
  .enhanceEndpoints({
    addTagTypes: ['Auth'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      // Mutation
      login: builder.mutation<UserLoginResponse, UserLoginParams>({
        query: (args) => ({
          url: '/auth',
          method: 'POST',
          body: args,
        }),
      }),
      socialLogin: builder.mutation<
        UserSocialLoginResponse,
        UserSocialLoginParams
      >({
        query: (args) => ({
          url: '/auth/social',
          method: 'POST',
          body: args,
        }),
      }),
      register: builder.mutation<UserRegisterResponse, UserRegisterParams>({
        query: (args) => ({
          url: '/auth/user',
          method: 'POST',
          body: args,
        }),
      }),
    }),
  })

export const { useLoginMutation, useRegisterMutation, useSocialLoginMutation } =
  authApi
