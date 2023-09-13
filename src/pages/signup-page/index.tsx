// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Component Imports
import SignupPageView from './signup-page'

// ** Type Imports
import type { UserRegisterParams } from '@/types/user'

// ** Service Imports
import { useRegisterMutation } from '@/services'

// ** Utils Imports
import useInput from '@/hooks/useInput'

const SignupPage = () => {
  const navigate = useNavigate()

  const { data: user, handleInput: setUser } = useInput<UserRegisterParams>({
    username: '',
    password: '',
    nickname: '',
  })
  const [passwordC, setPasswordC] = useState<string>('')

  const [registerApi] = useRegisterMutation()

  const handleChangePasswordC = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordC(e.target.value)
  }

  const handleJoin = () => {
    if (user.username === '') {
      alert('Enter username')

      return
    }

    if (user.password === '') {
      alert('Enter password')

      return
    }

    if (passwordC === '') {
      alert('Enter password check')

      return
    }

    if (user.nickname === '') {
      alert('Enter nickname')

      return
    }

    if (user.password !== passwordC) {
      alert('Check password check')

      return
    }

    registerApi(user)
      .unwrap()
      .then((res) => {
        navigate('/dashboard')
      })
      .catch((err) => alert(err.data.message))
  }

  return (
    <SignupPageView
      handleJoin={handleJoin}
      passwordC={passwordC}
      handleChangePasswordC={handleChangePasswordC}
      user={user}
      setUser={setUser}
    />
  )
}

export default SignupPage
