import Color from '@/constants/color'
import { Box } from '@mui/material'

export const ContextBox = ({ children }) => {
  return (
    <Box
      sx={{
        width: '79%',
        height: '96%',
        backgroundColor: Color.smallPurple,
        borderRadius: 10,
        px: 5,
        py: 3,
      }}
    >
      {children}
    </Box>
  )
}
