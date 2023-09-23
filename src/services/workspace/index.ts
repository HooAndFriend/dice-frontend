import { api } from '..'
import type {
  WorkspaceV0Response,
  WorkspaceV1Respons,
} from '@/types/api/workspace'

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
      getWorkspaceV1: builder.query<WorkspaceV1Respons, number>({
        query: (id) => ({
          url: `/workspace/home/${id}`,
        }),
      }),

      // Mutation
    }),
  })

export const { useGetWorkspaceV0ListQuery, useLazyGetWorkspaceV1Query } =
  workspaceApi
