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
        height: '100vh',
      }}
    >
      <Box sx={{ display: 'flex', mt: 3, justifyContent: 'center' }}>
        <WorkspaceDowndown profile={workspaceProfile} />
      </Box>
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            width: '30px',
            height: '1px',
          }}
        ></Box>
      </Box>
      {MenuList.filter((item) => item.isMenu).map((item) =>
        `/dashboard${item.route}` === pathname ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={item.route}
          >
            <Link
              to={`/dashboard${item.route}`}
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <Box sx={{ display: 'flex', mt: 5 }}>{item.icon}</Box>
            </Link>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={item.route}
          >
            <Link
              to={`/dashboard${item.route}`}
              style={{ textDecoration: 'none', color: 'black' }}
              key={item.route}
            >
              <Box sx={{ display: 'flex', mt: 5, opacity: 0.5 }}>
                {item.icon}
              </Box>
            </Link>
          </Box>
        ),
      )}
    </Box>
  )
}

export default VerticalNavigation
