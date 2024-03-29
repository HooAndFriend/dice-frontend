// ** Router Imports
import { Route, Routes } from 'react-router-dom'

// ** Menu Imports
import { MenuList } from '@/constants/MenuItem'

// ** Utils Imports
import { compact } from 'lodash'

// ** Layout Imports
import UseLayout from '@/layouts'

export default function Dashboard() {
  return (
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
  )
}
