import { styled } from '@mui/material'
import VerticalNavigation from './vertical'
import { Box } from '@mui/system'
import HeaderBox from './hori'

const LayoutWrapper = styled('div')({
  display: 'flex',
})

const MainContentWrapper = styled('div')({
  flexGrow: 1,
})

const UseLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <MainContentWrapper>
        <HeaderBox />
        <VerticalNavigation />
        <Box sx={{ float: 'left' }}>{children}</Box>
      </MainContentWrapper>
    </LayoutWrapper>
  )
}

export default UseLayout
