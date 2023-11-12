// ** Mui Imports
import { Box } from '@mui/material'

// ** Context Imports
import { MenuList } from '@/constants/MenuItem'
import { useWorkspace } from '@/context/WorkspaceContext'

// ** Router Imports
import { Link, useLocation } from 'react-router-dom'

// ** Component Imports
import WorkspaceDowndown from '@/components/WorkspaceDropdown'

const VerticalNavigation = () => {
  const { pathname } = useLocation()

  const { workspaceName, workspaceProfile } = useWorkspace()

  return (
    <Box
      sx={{
        width: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', mt: 3, justifyContent: 'center' }}>
        <WorkspaceDowndown profile={workspaceProfile} />
      </Box>
      <Box
        sx={{
          width: '30px',
          height: '1px',
          mt: 3,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}
      ></Box>
      {MenuList.filter((item) => item.isMenu).map((item) =>
        `/dashboard${item.route}` === pathname ? (
          <Link
            to={`/dashboard${item.route}`}
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
            key={item.route}
          >
            <Box sx={{ display: 'flex', mt: 5 }}>{item.icon}</Box>
          </Link>
        ) : (
          <Link
            to={`/dashboard${item.route}`}
            style={{ textDecoration: 'none', color: 'black' }}
            key={item.route}
          >
            <Box sx={{ display: 'flex', mt: 5, opacity: 0.5 }}>{item.icon}</Box>
          </Link>
        ),
      )}
    </Box>
  )
}

export default VerticalNavigation
