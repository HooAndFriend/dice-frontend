// ** React Imports
import { useEffect } from 'react'

// ** Mui Imports
import { Box } from '@mui/material'

// ** Component Imports
import { WorkspaceBox } from './component'

// ** Utils Imports
import Color from '@/constants/color'

// ** Context Imports
import { useWorkspace } from '@/context/WorkspaceContext'

const VerticalNavigation = () => {
  const { handleWorkspaceId, workspaceList } = useWorkspace()

  useEffect(() => {
    const arr = workspaceList.data.filter((item) => item.workspace.isPersonal)

    if (arr.length > 0) {
      handleWorkspaceId(arr[0].workspace.id)
    }
  }, [workspaceList])

  return (
    <Box
      sx={{
        width: '75px',
        height: '100vh',
        float: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Color.lightGrey,
      }}
    >
      {workspaceList.data.map((item) => (
        <WorkspaceBox data={item} key={item.id} />
      ))}
    </Box>
  )
}

export default VerticalNavigation
