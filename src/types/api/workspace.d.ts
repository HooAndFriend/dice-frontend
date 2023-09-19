import type { PaginationResponse, Response } from '.'
import type { WorkspaceV0 } from '../workspace'

export interface WorkspaceV0Response extends PaginationResponse {
  data: WorkspaceV0[]
}
