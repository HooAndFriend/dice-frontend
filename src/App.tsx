// ** Router Imports
import { Routes, Route } from 'react-router-dom'
import { ProtectRoute, PublicRoute } from './utils/protect-route'

// ** Router Imports
import LoginPage from './pages/login-page'
import Dashboard from './pages/dashboard-page'
import SignupPage from './pages/signup-page'
import SocialSignupPage from './pages/social-signup-page'

// ** Context Imports
import { ErrorProvider } from './context/ErrorContext'
import { DialogProvider } from './context/DialogContext'
import { WorkspaceProvider } from './context/WorkspaceContext'

// ** Style Imports
import { ThemeProvider } from '@mui/material'
import { theme } from '@/theme'
import { GlobalStyles } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ backgroundColor: 'blue' }} />
      <CssBaseline />
      <ErrorProvider>
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
                <WorkspaceProvider>
                  <DialogProvider>
                    <Dashboard />
                  </DialogProvider>
                </WorkspaceProvider>
              }
            />
          </Route>
        </Routes>
      </ErrorProvider>
    </ThemeProvider>
  )
}

export default App
