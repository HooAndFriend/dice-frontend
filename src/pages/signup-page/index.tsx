// ** Component Imports
import SignupPageView from './signup-page'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const navigate = useNavigate()

  const handleJoin = () => {
    navigate('/')
  }

  return <SignupPageView handleJoin={handleJoin} />
}

export default SignupPage
