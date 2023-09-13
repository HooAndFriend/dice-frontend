// ** Component Imports
import useInput from '@/hooks/useInput'
import LoginPageView from './login-page'

// ** Router Imports
import { useNavigate } from 'react-router-dom'
import { UserLoginParams } from '@/types/user'
import { useLoginMutation } from '@/services'

const LoginPage = () => {
  const navigate = useNavigate()

  const { data: user, handleInput: setUser } = useInput<UserLoginParams>({
    username: '',
    password: '',
  })

  const [loginApi] = useLoginMutation()

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
      .then((res) => {
        navigate('/dashboard')
      })
      .catch((err) => alert(err.data.message))
  }

  return (
    <LoginPageView handleLogin={handleLogin} user={user} setUser={setUser} />
  )
}

export default LoginPage
