import { api } from '..'
import type { WorkspaceV0Response } from '@/types/api/workspace'

// Workspace Api CreateApi
export const workspaceApi = api
  .enhanceEndpoints({
    addTagTypes: ['Workspace'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getWorkspaceV0List: builder.query<WorkspaceV0Response, void>({
        query: () => ({
          url: '/workspace-user',
        }),
      }),
      // Mutation
    }),
  })

export const { useGetWorkspaceV0ListQuery } = workspaceApi
