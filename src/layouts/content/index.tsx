// ** Mui Imports
import { Box } from '@mui/material'

const ContentBox = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
      }}
    >
      {children}
    </Box>
  )
}

export default ContentBox
