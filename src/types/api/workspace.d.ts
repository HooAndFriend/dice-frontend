import type { PaginationResponse, Response } from '.'
import type { WorkspaceV0, WorkspaceV1 } from '../workspace'

export interface WorkspaceV0Response extends PaginationResponse {
  data: WorkspaceV0[]
}

export interface WorkspaceV1Respons extends Response {
  data: WorkspaceV1
}
