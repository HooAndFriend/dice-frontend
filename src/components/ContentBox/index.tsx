import Color from '@/constants/color'
import { Box } from '@mui/material'

export const ContextBox = ({ children }) => {
  return (
    <Box
      sx={{
        width: '83%',
        height: '96%',
        backgroundColor: Color.smallPurple,
        borderRadius: 10,
        p: 3,
      }}
    >
      {children}
    </Box>
  )
}
