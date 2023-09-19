// ** Mui Imports
import { Box } from '@mui/material'

// ** Component Imports
import AppleIcon from '@/components/icons/apple'

// ** Type Imports
import type { WorkspaceV0 } from '@/types/workspace'

interface WorkspaceBoxProps {
  data: WorkspaceV0
}

export const WorkspaceBox = ({ data }: WorkspaceBoxProps) => {
  return (
    <Box
      sx={{
        mt: 2,
        borderRadius: 2,
        border: data.workspace.isPersonal ? '2px solid black' : '',
      }}
    >
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
        <AppleIcon width={20} height={20} />
      </Box>
    </Box>
  )
}
