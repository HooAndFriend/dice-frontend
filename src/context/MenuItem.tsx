// ** React Imports
import TestPage from '@/pages/test-page'
import { ReactNode } from 'react'

interface MenuType {
  route: string
  name: string
  element?: ReactNode
}

export const MenuList: MenuType[] = [
  {
    route: '/test',
    name: '테스트 페이지',
    element: <TestPage />,
  },
]
