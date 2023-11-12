// ** Router Imports
import { Route, Routes } from 'react-router-dom'

// ** Router Imports
import Dashboard from './components/Dashboard'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'
import SocialSignupPage from './pages/social-signup-page'

// ** Context Imports
import { DialogProvider } from './context/DialogContext'
import { ErrorProvider } from './context/ErrorContext'
import { WorkspaceProvider } from './context/WorkspaceContext'

// ** Style Imports
import { theme } from '@/theme'
import { GlobalStyles, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ backgroundColor: 'blue' }} />
      <CssBaseline />
      <ErrorProvider>
        <Routes>
          {/* <Route element={<PublicRoute />}> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/social/signup" element={<SocialSignupPage />} />
          {/* </Route> */}
          {/* <Route element={<ProtectRoute />}> */}
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
          {/* </Route> */}
        </Routes>
      </ErrorProvider>
    </ThemeProvider>
  )
}

export default App
