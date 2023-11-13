// ** Router Imports
import { Route, Routes } from 'react-router-dom'

// ** Router Imports
import Dashboard from './components/Dashboard'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'
import SocialSignupPage from './pages/social-signup-page'
import WorksapceAddPage from './pages/workspace-add-page'

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
        <WorkspaceProvider>
          <DialogProvider>
            <Routes>
              {/* <Route element={<PublicRoute />}> */}
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/social/signup" element={<SocialSignupPage />} />

              {/* <Route element={<ProtectRoute />}> */}
              <Route path="/workspace" element={<WorksapceAddPage />} />
              {/* </Route> */}
              {/* </Route> */}
              {/* <Route element={<ProtectRoute />}> */}
              <Route path="/dashboard/*" element={<Dashboard />} />
              {/* </Route> */}
            </Routes>
          </DialogProvider>
        </WorkspaceProvider>
      </ErrorProvider>
    </ThemeProvider>
  )
}

export default App
