// ** React Imports
import { useState, createContext, useContext, useMemo } from 'react'

// ** Service Imports
import { useGetWorkspaceV0ListQuery } from '@/services'

// ** Type Imports
import type { WorkspaceV0 } from '@/types/workspace'

// ** Utils Imports
import { isUndefined } from 'lodash'

interface ContextProps {
  workspaceId: number
  workspaceList: { data: WorkspaceV0[]; count: number }
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

  return (
    <Context.Provider
      value={{
        workspaceId,
        handleWorkspaceId,
        workspaceList,
        handleWorkspaceRefetch,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useWorkspace = () => {
  return useContext(Context)
}
