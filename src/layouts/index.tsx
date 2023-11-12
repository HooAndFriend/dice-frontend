// ** Mui Imports
import { Box, styled } from '@mui/material'

// ** Component Imports
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
        {/* <HeaderBox /> */}
        <Box sx={{ display: 'flex' }}>
          <VerticalNavigation />
          {/* <ContentBox>{children}</ContentBox> */}
        </Box>
      </MainContentWrapper>
    </LayoutWrapper>
  )
}

export default UseLayout
