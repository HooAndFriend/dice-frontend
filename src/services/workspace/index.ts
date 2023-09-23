import { api } from '..'
import type {
  WorksapceV2Response,
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
      getWorksapceV2: builder.query<WorksapceV2Response, number>({
        query: (id) => ({
          url: `/workspace/${id}`,
        }),
      }),
      // Mutation
    }),
  })

export const {
  useGetWorkspaceV0ListQuery,
  useLazyGetWorkspaceV1Query,
  useLazyGetWorksapceV2Query,
} = workspaceApi
