// ** Component Imports
import useInput from '@/hooks/useInput'
import SettingPageView from './setting-page'
import { UserV0 } from '@/types/user'
import { useEffect, useState } from 'react'
import { useLazyGetUserV0Query, useUpdateUserMutation } from '@/services'
import { useError } from '@/context/ErrorContext'

const SettingPage = () => {
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

  const [reRenderSwitch, setReRenderSwitch] = useState<boolean>(false)

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
          handleRefetch()
        }
      })
      .catch((err) => {
        onError('알림', err.data.message)
      })
  }
  const handleRefetch = () => setReRenderSwitch(true)

  const handleSetPath = (path: string) => {
    setUser((cur) => ({ ...cur, profile: path }))
  }

  useEffect(() => {
    if (reRenderSwitch) {
      setReRenderSwitch(false)
    }

    getUserApi()
      .unwrap()
      .then((res) => {
        setUser(res.data)
      })
  }, [reRenderSwitch])

  return (
    <SettingPageView
      handleSetPath={handleSetPath}
      user={user}
      handleInput={handleInput}
      handleUpdateUser={handleUpdateUser}
    />
  )
}

export default SettingPage
