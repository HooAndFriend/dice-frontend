import type { UserUpdateParams } from '@/types/user'
import { api } from '..'
import type { UserV0Response } from '@/types/api/user'
import type { Response } from '@/types/api'

// Workspace Api CreateApi
export const userApi = api
  .enhanceEndpoints({
    addTagTypes: ['User'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getUserV0: builder.query<UserV0Response, void>({
        query: () => ({
          url: '/user',
        }),
      }),
      // Mutation
      updateUser: builder.mutation<Response, UserUpdateParams>({
        query: (args) => ({
          url: '/user',
          method: 'PUT',
          body: args,
        }),
      }),
    }),
  })

export const { useLazyGetUserV0Query, useUpdateUserMutation } = userApi
