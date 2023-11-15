// ** React Imports
import { ReactNode } from 'react'

// ** Constant Imports
import Color from '@/constants/color'

// ** Box Imports
import { Box } from '@mui/material'

interface PropsType {
  children: ReactNode
  type: 'ALL' | 'SIDE'
}

export const ContextBox = ({ children, type }: PropsType) => {
  return (
    <Box
      sx={{
        width: type === 'SIDE' ? '79%' : '98%',
        height: '96%',
        backgroundColor: Color.smallPurple,
        borderRadius: 10,
        ml: type === 'SIDE' ? 0 : 2,
        px: 5,
        py: 3,
        overflowY: 'scroll',
      }}
    >
      {children}
    </Box>
  )
}
