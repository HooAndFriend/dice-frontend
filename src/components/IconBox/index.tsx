// ** Mui Imports
import { Box } from '@mui/material'

export const IconBox = ({ children }) => (
  <Box
    sx={{
      width: 40,
      height: 40,
      backgroundColor: 'white',
      boxShadow: 2,
      borderRadius: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      float: 'left',
    }}
  >
    {children}
  </Box>
)
