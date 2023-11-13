// ** Mui Imports
import { Box } from '@mui/material'

// ** Constant Imports
import Color from '@/constants/color'

// ** Component Imports
import { ContextBox } from '@/components/ContentBox'
import SideMenu from './sideMenu'

const ErdPageView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: Color.purple,
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '20%' }}>
        <SideMenu />
      </Box>
      <ContextBox>
        <Box></Box>
      </ContextBox>
    </Box>
  )
}

export default ErdPageView
