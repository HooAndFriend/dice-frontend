// ** Mui Imports
import { styled, Box } from '@mui/material'

// ** Component Imports
import HeaderBox from './horizon'
import ContentBox from './content'
import VerticalNavigation from './vertical'

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
        <Box sx={{ display: 'flex' }}>
          <VerticalNavigation />
          <ContentBox>{children}</ContentBox>
        </Box>
      </MainContentWrapper>
    </LayoutWrapper>
  )
}

export default UseLayout
