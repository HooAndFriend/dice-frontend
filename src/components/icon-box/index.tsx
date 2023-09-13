import { Box } from '@mui/material'

export const IconBox = ({ children }) => (
  <Box
    sx={{
      width: 40,
      height: 40,
      backgroundColor: 'white',
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
