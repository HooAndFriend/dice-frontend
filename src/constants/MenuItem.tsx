// ** React Imports
import { ReactNode } from 'react'

// ** Component Imports
import {
  CollectionIcon,
  DashboardIcon,
  ErdIcon,
  SettingIcon,
  TicketIcon,
  WorkspaceSettingIcon,
} from '@/components/Icons'
import ApiPage from '@/pages/api-page'
import ErdPage from '@/pages/erd-page'
import HomePage from '@/pages/home-page'
import SettingPage from '@/pages/setting-page'
import WorkspacePage from '@/pages/workspace-page'

interface MenuType {
  route: string
  name: string
  element?: ReactNode
  icon: ReactNode

  onlyPath?: boolean
  isMenu: boolean
}

export const MenuList: MenuType[] = [
  {
    route: '',
    name: 'Dashboard',
    element: <HomePage />,
    icon: <DashboardIcon />,
    onlyPath: false,
    isMenu: true,
  },
  {
    route: '/setting',
    name: 'Setting',
    element: <SettingPage />,
    icon: <SettingIcon />,
    onlyPath: false,
    isMenu: false,
  },
  {
    route: '/api',
    name: 'Collection',
    element: <ApiPage />,
    icon: <CollectionIcon />,
    onlyPath: false,
    isMenu: true,
  },
  {
    route: '/erd',
    name: 'ERD',
    element: <ErdPage />,
    icon: <ErdIcon />,
    onlyPath: false,
    isMenu: true,
  },
  {
    route: '/workspace',
    name: 'Workspace',
    element: <WorkspacePage />,
    icon: <WorkspaceSettingIcon />,
    onlyPath: false,
    isMenu: true,
  },
  {
    route: '/ticket',
    name: 'Ticket',
    element: <WorkspacePage />,
    icon: <TicketIcon />,
    onlyPath: false,
    isMenu: true,
  },
]