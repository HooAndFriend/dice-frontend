import Color from '@/constants/color'
import { Box } from '@mui/material'

export const ContextBox = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{
        width: 'calc(90% - 351px)',
      }}
    >
      <Box
        sx={{
          width: '96%',
          height: '96%',
          backgroundColor: Color.smallPurple,
          borderRadius: '10px',
          p: 5,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
