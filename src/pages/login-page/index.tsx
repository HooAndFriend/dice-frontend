// ** Component Imports
import LoginPageView from './login-page'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/dashboard')
  }

  return <LoginPageView handleLogin={handleLogin} />
}

export default LoginPage
