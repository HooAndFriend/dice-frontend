// ** React Imports
import { useState, createContext, useContext } from 'react'

interface ContextProps {
  workspaceId: number
  handleWorkspaceId: (workspaceId: number) => void
}

const Context = createContext<ContextProps>({} as ContextProps)

export const WorkspaceProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [workspaceId, setWorkspaceId] = useState<number>(0)

  const handleWorkspaceId = (workspaceId: number) => {
    setWorkspaceId(workspaceId)
  }

  return (
    <Context.Provider value={{ workspaceId, handleWorkspaceId }}>
      {children}
    </Context.Provider>
  )
}

export const useWorkspace = () => {
  return useContext(Context)
}
