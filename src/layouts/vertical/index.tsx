// ** React Imports
import { useMemo } from 'react'

// ** Mui Imports
import { Box } from '@mui/material'

// ** Component Imports
import { IconBox } from '@/components/icon-box'
import AppleIcon from '@/components/icons/apple'

// ** Service Imports
import { useGetWorkspaceV0ListQuery } from '@/services'

// ** Utils Imports
import { isUndefined } from 'lodash'
import Color from '@/constants/color'
import { WorkspaceBox } from './component'

const VerticalNavigation = () => {
  const { data } = useGetWorkspaceV0ListQuery()

  const workspaceData = useMemo(
    () =>
      isUndefined(data)
        ? { data: [], count: 0 }
        : { data: data.data, count: data.count },
    [data],
  )

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
