// ** React Imports
import HomePage from '@/pages/home-page'
import { ReactNode } from 'react'

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
]
