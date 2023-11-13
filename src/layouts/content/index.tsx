// ** Mui Imports
import Color from '@/constants/color'
import { Box } from '@mui/material'

const ContentBox = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: Color.smallPurple,
      }}
    >
      {children}
    </Box>
  )
}

export default ContentBox
