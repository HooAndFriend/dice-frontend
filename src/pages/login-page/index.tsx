// ** React Imports
import { KeyboardEvent } from 'react'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Component Imports
import LoginPageView from './login-page'

// ** Utils Imports
import useInput from '@/hooks/useInput'
import { socialLogin } from '@/utils/firebase-auth'

// ** Type Imports
import type { SocialType, UserLoginParams } from '@/types/user'

// ** Service Imports
import { useLoginMutation, useSocialLoginMutation } from '@/services'

// ** Context Imports
import { useError } from '@/context/ErrorContext'

const LoginPage = () => {
  const navigate = useNavigate()

  const { data: user, handleInput: setUser } = useInput<UserLoginParams>({
    username: '',
    password: '',
  })

  const { onError } = useError()

  const [loginApi] = useLoginMutation()
  const [socialLoginApi] = useSocialLoginMutation()

  const handleEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  const handleLogin = () => {
    if (user.username === '') {
      alert('Enter username')

      return
    }

    if (user.password === '') {
      alert('Enter password')

      return
    }
    loginApi(user)
      .unwrap()
      .then(({ statusCode }) => {
        if (statusCode === 200) {
          navigate('/dashboard')
        }
      })
      .catch((err) => {
        console.log(err)
        onError('알림', err.data.message)
      })
  }

  const handleSocial = async (type: SocialType) => {
    socialLogin(type)
      .then((res) => {
        if (!res) return
        socialLoginApi({ token: res, type })
          .unwrap()
          .then(({ statusCode }) => {
            if (statusCode === 200) {
              navigate('/dashboard')
            }
          })
          .catch((err) => {
            if (err.data.statusCode === 404) {
              navigate(`/social/signup?token=${res}&type=${type}`)

              return
            }

            onError('알림', err.data.message)
          })
      })
      .catch((err) => {
        onError('알림', err.data.message)
      })
  }

  return (
    <LoginPageView
      handleLogin={handleLogin}
      user={user}
      setUser={setUser}
      handleSocial={handleSocial}
      handleEnter={handleEnter}
    />
  )
}

export default LoginPage
