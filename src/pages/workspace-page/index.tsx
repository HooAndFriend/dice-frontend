// ** React Imports
import { useEffect, useState } from 'react'

// ** Type Imports
import { WorkspaceV2 } from '@/types/workspace'

// ** Context Imports
import { useWorkspace } from '@/context/WorkspaceContext'
import { useError } from '@/context/ErrorContext'

// ** Service Imports
import {
  useLazyGetWorksapceV2Query,
  useUpdateWorkspaceMutation,
} from '@/services'

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

  const [reRenderSwitch, setReRenderSwitch] = useState<boolean>(false)

  const { workspaceId, handleWorkspaceRefetch } = useWorkspace()
  const { onError } = useError()

  const [getWorksapceApi] = useLazyGetWorksapceV2Query()
  const [updateWorkspaceApi] = useUpdateWorkspaceMutation()

  const handleSetPath = (path: string) => {
    setWorkspace((cur) => ({ ...cur, profile: path }))
  }

  const handleRefetch = () => setReRenderSwitch(true)

  const handleWorkspaceUpdate = () => {
    if (worksapce.name === '') {
      onError('알림', '이름을 입력해주세요.')
      return
    }

    if (worksapce.comment === '') {
      onError('알림', '코멘트를 입력해주세요.')
      return
    }

    if (worksapce.profile === '') {
      onError('알림', '이미지를 선택해주세요.')
      return
    }

    updateWorkspaceApi({
      id: worksapce.id,
      name: worksapce.name,
      comment: worksapce.comment,
      profile: worksapce.profile,
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode === 200) {
          handleWorkspaceRefetch()
          handleRefetch()
        }
      })
      .catch((err) => {
        onError('알림', err.data.message)
      })
  }

  useEffect(() => {
    if (reRenderSwitch) {
      setReRenderSwitch(false)
    }

    if (!workspaceId) return

    getWorksapceApi(workspaceId)
      .unwrap()
      .then((res) => {
        setWorkspace(res.data)
      })
  }, [workspaceId, reRenderSwitch])

  return (
    <WorkspacePageView
      worksapce={worksapce}
      handleInput={handleInput}
      handleSetPath={handleSetPath}
      handleWorkspaceUpdate={handleWorkspaceUpdate}
    />
  )
}

export default WorkspacePage
