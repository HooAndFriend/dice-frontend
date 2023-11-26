// ** React Imports
import { ReactNode } from 'react'

// ** Component Imports
import {
  CollectionIcon,
  ErdIcon,
  TicketIcon,
  WorkspaceSettingIcon,
} from '@/components/Icons'
import ApiPage from '@/pages/api-page'
import ErdPage from '@/pages/erd-page'
import TicketPage from '@/pages/ticket-page'
import WorkspacePage from '@/pages/workspace-page'

interface MenuType {
  route: string
  name: string
  element?: ReactNode
  icon: ReactNode
  onlyPath?: boolean
  isMenu: boolean
  isPersonal: boolean
}

export const MenuList: MenuType[] = [
  // {
  //   route: '',
  //   name: 'Dashboard',
  //   element: <HomePage />,
  //   icon: <DashboardIcon />,
  //   onlyPath: false,
  //   isMenu: true,
  // },
  {
    route: '/',
    name: 'Collection',
    element: <ApiPage />,
    icon: <CollectionIcon style={{ width: 30, height: 30 }} />,
    onlyPath: false,
    isMenu: true,
    isPersonal: false,
  },
  {
    route: '/erd',
    name: 'ERD',
    element: <ErdPage />,
    icon: <ErdIcon />,
    onlyPath: false,
    isMenu: true,
    isPersonal: false,
  },
  {
    route: '/workspace',
    name: 'Workspace',
    element: <WorkspacePage />,
    icon: <WorkspaceSettingIcon />,
    onlyPath: false,
    isMenu: true,
    isPersonal: true,
  },
  {
    route: '/ticket',
    name: 'Ticket',
    element: <TicketPage />,
    icon: <TicketIcon />,
    onlyPath: false,
    isMenu: true,
    isPersonal: false,
  },
]
