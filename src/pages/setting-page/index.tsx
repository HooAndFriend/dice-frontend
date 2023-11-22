// ** React Imports
import { useEffect } from 'react'

// ** Hooks Imports
import useInput from '@/hooks/useInput'

// ** Component Imports
import SettingPageView from './setting-page'

// ** Type Imports
import type { UserV0 } from '@/types/user'

// ** Service Imports
import { useLazyGetUserV0Query, useUpdateUserMutation } from '@/services'

// ** Context Imports
import { useError } from '@/context/ErrorContext'

interface PropsType {
  open: boolean
  handleClose: () => void
}

const SettingPage = ({ open, handleClose }: PropsType) => {
  const {
    data: user,
    setData: setUser,
    handleInput,
  } = useInput<UserV0>({
    nickname: '',
    email: '',
    profile: '',
    link: '',
    comment: '',
  })

  const [getUserApi] = useLazyGetUserV0Query()
  const [updateUserApi] = useUpdateUserMutation()

  const { onError } = useError()

  const handleUpdateUser = () => {
    updateUserApi({
      nickname: user.nickname,
      profile: user.profile,
      email: user.email,
      comment: user.comment,
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode === 200) {
          handleClose()
        }
      })
      .catch((err) => {
        onError('알림', err.data.message)
      })
  }

  const handleSetPath = (path: string) => {
    setUser((cur) => ({ ...cur, profile: path }))
  }

  useEffect(() => {
    getUserApi()
      .unwrap()
      .then((res) => {
        setUser(res.data)
      })
  }, [])

  return (
    <SettingPageView
      handleSetPath={handleSetPath}
      user={user}
      handleInput={handleInput}
      handleUpdateUser={handleUpdateUser}
      open={open}
      handleClose={handleClose}
    />
  )
}

export default SettingPage
