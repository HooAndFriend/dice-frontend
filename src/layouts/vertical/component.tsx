// ** Mui Imports
import { Box } from '@mui/material'

// ** Component Imports
import AppleIcon from '@/components/icons/apple'

// ** Type Imports
import type { WorkspaceV0 } from '@/types/workspace'

// ** Context Imports
import { useWorkspace } from '@/context/WorkspaceContext'

interface WorkspaceBoxProps {
  data: WorkspaceV0
}

export const WorkspaceBox = ({ data }: WorkspaceBoxProps) => {
  const { handleWorkspaceId, workspaceId } = useWorkspace()

  return (
    <Box
      sx={{
        mt: 2,
      }}
      onClick={() => handleWorkspaceId(data.workspace.id)}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          float: 'left',
        }}
      >
        <img
          src={data.workspace.profile}
          width={40}
          height={40}
          style={{
            border:
              workspaceId === data.workspace.id
                ? '2px solid red'
                : '2px solid black',
            borderRadius: '10px',
          }}
        />
      </Box>
    </Box>
  )
}
