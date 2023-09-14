// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectRoute, PublicRoute } from './utils/protect-route'

// ** Router Imports
import LoginPage from './pages/login-page'
import Dashboard from './pages/dashboard-page'
import SignupPage from './pages/signup-page'
import SocialSignupPage from './pages/social-signup-page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/social/signup" element={<SocialSignupPage />} />
        </Route>
        <Route element={<ProtectRoute />}>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
