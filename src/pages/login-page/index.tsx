// ** Component Imports
import { ThemeProvider } from '@mui/material'
import LoginPageView from './login-page'

// ** Router Imports
import { useNavigate } from 'react-router-dom'
import { theme } from '@/theme'

const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/dashboard')
  }

  return <LoginPageView handleLogin={handleLogin} />
}

export default LoginPage
