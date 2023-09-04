// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectRoute, PublicRoute } from './utils/protect-route'
import TestPage from './pages/test'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<TestPage />} />
        </Route>
        <Route element={<ProtectRoute />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
