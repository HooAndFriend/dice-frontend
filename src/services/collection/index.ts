import { api } from '..'
import type { CollectionV0ListResponse } from '@/types/api/collection'

// Workspace Api CreateApi
export const collectionApi = api
  .enhanceEndpoints({
    addTagTypes: ['Collection'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      getCollectionList: builder.query<CollectionV0ListResponse, number>({
        query: (id) => ({
          url: `/v1/collection/${id}`,
        }),
      }),

      // Mutation
    }),
  })

export const { useGetCollectionListQuery } = collectionApi
