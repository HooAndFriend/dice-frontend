// ** React Imports
import { useEffect, useMemo } from 'react'

// ** Mui Imports
import { Box } from '@mui/material'

// ** Service Imports
import { useGetWorkspaceV0ListQuery } from '@/services'

// ** Component Imports
import { WorkspaceBox } from './component'

// ** Utils Imports
import { isUndefined } from 'lodash'
import Color from '@/constants/color'

// ** Context Imports
import { useWorkspace } from '@/context/WorkspaceContext'

const VerticalNavigation = () => {
  const { data } = useGetWorkspaceV0ListQuery()

  const { handleWorkspaceId } = useWorkspace()

  const workspaceData = useMemo(
    () =>
      isUndefined(data)
        ? { data: [], count: 0 }
        : { data: data.data, count: data.count },
    [data],
  )

  useEffect(() => {
    const arr = workspaceData.data.filter((item) => item.workspace.isPersonal)

    if (arr.length > 0) {
      handleWorkspaceId(arr[0].workspace.id)
    }
  }, [data])

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
      {workspaceData.data.map((item) => (
        <WorkspaceBox data={item} key={item.id} />
      ))}
    </Box>
  )
}

export default VerticalNavigation
