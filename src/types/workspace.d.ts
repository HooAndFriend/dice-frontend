export interface WorkspaceV0 {
  id: number
  role: WorkspaceRole
  workspace: {
    id: number
    name: string
    profile: string
    isPersonal: boolean
  }
}

export interface WorkspaceV1 {
  id: number
  name: string
  profile: string
  isPersonal: boolean
}

export type WorkspaceRole = 'WRITER' | 'VIEWER' | 'ADMIN' | 'OWNER'
