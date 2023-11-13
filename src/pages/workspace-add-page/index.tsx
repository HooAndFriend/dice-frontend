// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Component Imports
import WorksapceAddPageView from './workspace-add-page'

// ** Context Imports
import { useError } from '@/context/ErrorContext'

// ** Custom Hooks Imports
import useInput from '@/hooks/useInput'

// ** Service Imports
import { useSaveWorksapceMutation } from '@/services'

// ** Type Imports
import type { WorkspaceSaveParams } from '@/types/workspace'

const WorksapceAddPage = () => {
  const { data, handleInput, handleInit, setData } =
    useInput<WorkspaceSaveParams>({
      name: '',
      profile: '',
      comment: '',
    })

  const navigate = useNavigate()

  const [saveWorkspaceApi] = useSaveWorksapceMutation()

  const { onError } = useError()

  const handleImage = (profile: string) => {
    setData((cur) => ({ ...cur, profile }))
  }

  const handleSaveWorksapce = () => {
    if (data.name === '') {
      onError('확인', '이름을 입력해주세요.')

      return
    }

    saveWorkspaceApi(data)
      .unwrap()
      .then((res) => {
        if (res.statusCode === 200) {
          navigate('/dashboard')
        }
      })
      .catch((err) => {
        onError('오류', err.data.message)
      })
  }

  return (
    <WorksapceAddPageView
      data={data}
      handleInput={handleInput}
      handleImage={handleImage}
      handleSaveWorksapce={handleSaveWorksapce}
    />
  )
}

export default WorksapceAddPage
