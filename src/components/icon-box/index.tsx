// ** Mui Imports
import { Box } from '@mui/material'

// ** Color Imports
import Color from '@/constants/color'

export const IconBox = ({ children }) => (
  <Box
    sx={{
      width: 50,
      height: 50,
      backgroundColor: Color.lightGrey,
      borderRadius: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      float: 'left',
    }}
  >
    {children}
  </Box>
)
