// ** React Imports
import { useState, createContext, useContext, useMemo, useEffect } from 'react'

// ** Service Imports
import { useGetWorkspaceV0ListQuery } from '@/services'

// ** Type Imports
import type { WorkspaceV0 } from '@/types/workspace'

// ** Utils Imports
import { isUndefined } from 'lodash'

interface ContextProps {
  workspaceId: number
  workspaceList: { data: WorkspaceV0[]; count: number }
  workspaceProfile: string
  workspaceName: string
  isPersonal: boolean
  handleWorkspaceRefetch: () => void
  handleWorkspaceId: (workspaceId: number) => void
}

const Context = createContext<ContextProps>({} as ContextProps)

export const WorkspaceProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [workspaceId, setWorkspaceId] = useState<number>(0)
  const [workspaceProfile, setWorkspaceProfile] = useState<string>('')
  const [workspaceName, setWorkspaceName] = useState<string>('')
  const [isPersonal, setIsPersonal] = useState<boolean>(false)

  const { data, refetch: handleWorkspaceRefetch } = useGetWorkspaceV0ListQuery()

  const workspaceList = useMemo(
    () =>
      isUndefined(data)
        ? { data: [], count: 0 }
        : { data: data.data, count: data.count },
    [data],
  )

  const handleWorkspaceId = (workspaceId: number) => {
    setWorkspaceId(workspaceId)
  }

  useEffect(() => {
    if (workspaceList.data.length > 0) {
      const arr = workspaceList.data.filter((item) => item.workspace.isPersonal)
      if (arr.length > 0) {
        setWorkspaceId(arr[0].workspace.id)
      }
    }
  }, [workspaceList])

  useEffect(() => {
    if (workspaceList.data.length > 0) {
      const arr = workspaceList.data.filter(
        (item) => item.workspace.id === workspaceId,
      )
      if (arr.length > 0) {
        setWorkspaceProfile(arr[0].workspace.profile)
        setWorkspaceName(arr[0].workspace.name)
        setIsPersonal(arr[0].workspace.isPersonal)
      }
    }
  }, [workspaceId])

  return (
    <Context.Provider
      value={{
        workspaceId,
        handleWorkspaceId,
        workspaceList,
        handleWorkspaceRefetch,
        workspaceName,
        workspaceProfile,
        isPersonal,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useWorkspace = () => {
  return useContext(Context)
}
