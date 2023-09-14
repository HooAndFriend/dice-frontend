// ** React Imports
import { useEffect } from 'react'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Component Imports
import SocialSignupPageView from './social-signup-page'

// ** Type Imports
import type { UserSocialRegisterParams } from '@/types/user'

// ** Service Imports
import { useSocialRegisterMutation } from '@/services'

// ** Utils Imports
import useInput from '@/hooks/useInput'

const SocialSignupPage = () => {
  const navigate = useNavigate()

  const {
    data: user,
    handleInput: setUser,
    setData,
  } = useInput<UserSocialRegisterParams>({
    token: '',
    nickname: '',
    type: '',
  })

  const [socialRegisterApi] = useSocialRegisterMutation()

  const handleJoin = () => {
    if (user.nickname === '') {
      alert('Enter Nickname')

      return
    }

    socialRegisterApi(user)
      .unwrap()
      .then((res) => {
        navigate('/dashboard')
      })
      .catch((err) => alert(err.data.message))
  }

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    const type = urlParams.get('type') || ''
    const token = urlParams.get('token') || ''

    setData((cur) => ({
      ...cur,
      token,
      type,
    }))
  }, [])

  return (
    <SocialSignupPageView
      handleJoin={handleJoin}
      user={user}
      setUser={setUser}
    />
  )
}

export default SocialSignupPage
