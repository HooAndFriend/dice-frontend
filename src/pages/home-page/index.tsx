// ** React Imports
import { useEffect, useMemo, useState } from 'react'

// ** Component Imports
import HomePageView from './home-page'

// ** Service Imports
import { useLazyGetWorkspaceV1Query } from '@/services'

// ** Context Imports
import { useWorkspace } from '@/context/WorkspaceContext'

// ** Type Imports
import type { WorkspaceV1 } from '@/types/workspace'

const HomePage = () => {
  const [workspace, setWorksapce] = useState<WorkspaceV1>({
    id: 0,
    name: '',
    profile: '',
    isPersonal: false,
  })

  const { workspaceId } = useWorkspace()
  const [getWorksapceApi] = useLazyGetWorkspaceV1Query()

  useEffect(() => {
    if (!workspaceId) return

    getWorksapceApi(workspaceId)
      .unwrap()
      .then((res) => {
        setWorksapce(res.data)
      })
  }, [workspaceId])

  console.log(workspace)

  return <HomePageView worksapce={workspace} />
}

export default HomePage
