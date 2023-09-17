// ** React Imports
import { ReactNode } from 'react'

// ** Component Imports
import HomePage from '@/pages/home-page'
import SettingPage from '@/pages/setting-page'
import ApiPage from '@/pages/api-page'

interface MenuType {
  route: string
  name: string
  element?: ReactNode
  onlyPath?: boolean
}

export const MenuList: MenuType[] = [
  {
    route: '',
    name: '메인 페이지',
    element: <HomePage />,
    onlyPath: false,
  },
  {
    route: '/setting',
    name: '개인 설정 페이지',
    element: <SettingPage />,
    onlyPath: false,
  },
  {
    route: '/api',
    name: 'API 페이지',
    element: <ApiPage />,
    onlyPath: false,
  },
]
