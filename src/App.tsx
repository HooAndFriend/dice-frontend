// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectRoute, PublicRoute } from './utils/protect-route'

// ** Router Imports
import LoginPage from './pages/login-page'
import Dashboard from './pages/dashboard-page'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectRoute />}>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
