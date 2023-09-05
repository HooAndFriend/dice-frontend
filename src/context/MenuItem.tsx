// ** React Imports
import TestPage from '@/pages/test-page'
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
    name: '테스트 페이지',
    element: <TestPage />,
    onlyPath: false,
  },
]
