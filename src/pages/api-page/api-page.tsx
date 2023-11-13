import ContentBox from '@/layouts/content'
import { Box, Typography } from '@mui/material'
import SideMenu from './sideMenu'

const ApiPageView = () => {
  return (
    <Box>
      <SideMenu />
      <ContentBox>
        <Box>
          <Typography sx={{ color: 'white' }}>Hello</Typography>
        </Box>
      </ContentBox>
    </Box>
  )
}

export default ApiPageView
