// ** React Imports
import { ReactNode } from 'react'

// ** Mui Imports
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import GridViewIcon from '@mui/icons-material/GridView'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'

// ** Component Imports
import HomePage from '@/pages/home-page'
import SettingPage from '@/pages/setting-page'
import ApiPage from '@/pages/api-page'
import ErdPage from '@/pages/erd-page'
import WorkspacePage from '@/pages/workspace-page'

interface MenuType {
  route: string
  name: string
  element?: ReactNode
  icon: ReactNode
  selectIcon: ReactNode
  onlyPath?: boolean
  isMenu: boolean
}

export const MenuList: MenuType[] = [
  {
    route: '',
    name: 'Dashboard',
    element: <HomePage />,
    icon: <GridViewIcon />,
    selectIcon: <GridViewIcon sx={{ color: 'white' }} />,
    onlyPath: false,
    isMenu: true,
  },
  {
    route: '/setting',
    name: 'Setting',
    element: <SettingPage />,
    icon: <SettingsApplicationsIcon />,
    selectIcon: <SettingsApplicationsIcon sx={{ color: 'white' }} />,
    onlyPath: false,
    isMenu: false,
  },
  {
    route: '/api',
    name: 'Collection',
    element: <ApiPage />,
    icon: <LocalShippingIcon />,
    selectIcon: <LocalShippingIcon sx={{ color: 'white' }} />,
    onlyPath: false,
    isMenu: true,
  },
  {
    route: '/erd',
    name: 'ERD',
    element: <ErdPage />,
    icon: <AccountTreeIcon />,
    selectIcon: <AccountTreeIcon sx={{ color: 'white' }} />,
    onlyPath: false,
    isMenu: true,
  },
  {
    route: '/workspace',
    name: 'Workspace',
    element: <WorkspacePage />,
    icon: <SettingsApplicationsIcon />,
    selectIcon: <SettingsApplicationsIcon sx={{ color: 'white' }} />,
    onlyPath: false,
    isMenu: true,
  },
]
