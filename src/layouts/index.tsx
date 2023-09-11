import React from 'react'
import { styled } from '@mui/material'
import VerticalNavigation from './vertical'
import { Box } from '@mui/system'
import Color from '@/constants/color'

const LayoutWrapper = styled('div')({
  display: 'flex',
})

const MainContentWrapper = styled('div')({
  flexGrow: 1,
})

const Header = styled('header')({
  background: 'lightblue',
  padding: '10px',
  height: '75px',
  backgroundColor: Color.blueRed,
})

const UseLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <MainContentWrapper>
        <Header>
          <img src="/img/logo.png" alt="logo" width={50} />
        </Header>
        <VerticalNavigation />
        <Box sx={{ float: 'left' }}>{children}</Box>
      </MainContentWrapper>
    </LayoutWrapper>
  )
}

export default UseLayout
