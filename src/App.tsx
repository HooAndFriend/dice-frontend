// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectRoute, PublicRoute } from './utils/protect-route'

// ** Context Imports
import { MenuList } from './context/MenuItem'

// ** Router Imports
import LoginPage from './pages/login-page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectRoute />}>
          {MenuList.map((item, index) => (
            <Route path={item.route} element={item.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
