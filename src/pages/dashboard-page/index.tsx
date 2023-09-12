// ** Router Imports
import { Routes, Route } from 'react-router-dom'

// ** Menu Imports
import { MenuList } from '@/context/MenuItem'

// ** Utils Imports
import { compact } from 'lodash'

// ** Layout Imports
import UseLayout from '@/layouts'
import { ThemeProvider } from '@mui/material'
import { dashboardTheme } from '@/theme'

export default function Dashboard() {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <UseLayout>
        <Routes>
          {compact(
            MenuList.map((item) =>
              item.onlyPath ? undefined : (
                <Route
                  key={item.name}
                  path={`/${item.route}`}
                  element={item.element}
                />
              ),
            ),
          )}
        </Routes>
      </UseLayout>
    </ThemeProvider>
  )
}