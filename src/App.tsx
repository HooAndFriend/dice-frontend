// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectRoute, PublicRoute } from './utils/protect-route'

// ** Router Imports
import LoginPage from './pages/login-page'
import Dashboard from './pages/dashboard-page'
import SignupPage from './pages/signup-page'
import SocialSignupPage from './pages/social-signup-page'

// ** Context Imports
import { ErrorProvider } from './context/ErrorContext'
import { DialogProvider } from './context/DialogContext'

const App = () => {
  return (
    <ErrorProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/social/signup" element={<SocialSignupPage />} />
          </Route>
          <Route element={<ProtectRoute />}>
            <Route
              path="/dashboard/*"
              element={
                <DialogProvider>
                  <Dashboard />
                </DialogProvider>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorProvider>
  )
}

export default App
