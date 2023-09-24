import type { Response } from '@/types/api'
import { api } from '..'
import type {
  WorksapceV2Response,
  WorkspaceV0Response,
  WorkspaceV1Respons,
} from '@/types/api/workspace'
import type { WorkspaceUpdateParams } from '@/types/workspace'

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
      getWorksapceV2: builder.query<WorksapceV2Response, number>({
        query: (id) => ({
          url: `/workspace/${id}`,
        }),
      }),
      // Mutation
      updateWorkspace: builder.mutation<Response, WorkspaceUpdateParams>({
        query: (args) => ({
          url: '/workspace',
          method: 'PUT',
          body: args,
        }),
      }),
    }),
  })

export const {
  useGetWorkspaceV0ListQuery,
  useLazyGetWorkspaceV1Query,
  useLazyGetWorksapceV2Query,
  useUpdateWorkspaceMutation,
} = workspaceApi
