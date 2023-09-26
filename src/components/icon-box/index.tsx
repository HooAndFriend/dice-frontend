// ** Mui Imports
import { Box } from '@mui/material'

export const IconBox = ({ children }) => (
  <Box
    sx={{
      width: 50,
      height: 50,
      backgroundColor: 'white',
      boxShadow: 2,
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
