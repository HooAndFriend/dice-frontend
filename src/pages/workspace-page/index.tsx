// ** React Imports
import { useEffect } from 'react'

// ** Type Imports
import { WorkspaceV2 } from '@/types/workspace'

// ** Context Imports
import { useWorkspace } from '@/context/WorkspaceContext'

// ** Service Imports
import { useLazyGetWorksapceV2Query } from '@/services'

// ** Utils Imports
import useInput from '@/hooks/useInput'
// ** Component Imports
import WorkspacePageView from './workspace-page'

const WorkspacePage = () => {
  const {
    data: worksapce,
    setData: setWorkspace,
    handleInput,
  } = useInput<WorkspaceV2>({
    id: 0,
    name: '',
    profile: '',
    comment: '',
    isPersonal: false,
    workspaceUser: [],
  })

  const { workspaceId } = useWorkspace()

  const [getWorksapceApi] = useLazyGetWorksapceV2Query()

  useEffect(() => {
    if (!workspaceId) return

    getWorksapceApi(workspaceId)
      .unwrap()
      .then((res) => {
        setWorkspace(res.data)
      })
  }, [workspaceId])

  return <WorkspacePageView worksapce={worksapce} handleInput={handleInput} />
}

export default WorkspacePage
