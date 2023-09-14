// ** Mui Imports
import { Box } from '@mui/material'

import Color from '@/constants/color'
import { IconBox } from '@/components/icon-box'
import AppleIcon from '@/components/icons/apple'

const VerticalNavigation = () => {
  return (
    <Box
      sx={{
        width: '75px',
        height: '100vh',
        float: 'left',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: Color.lightGrey,
      }}
    >
      <Box sx={{ mt: 2 }}>
        <IconBox>
          <AppleIcon width={20} height={20} />
        </IconBox>
      </Box>
    </Box>
  )
}

export default VerticalNavigation
