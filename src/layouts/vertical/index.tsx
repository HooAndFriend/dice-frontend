// ** Mui Imports
import { Box, Typography } from '@mui/material'

// ** Color Imports
import Color from '@/constants/color'

// ** Context Imports
import { MenuList } from '@/context/MenuItem'

// ** Router Imports
import { Link, useLocation } from 'react-router-dom'
import WorkspaceDowndown from '@/components/WorkspaceDropdown'
import { useWorkspace } from '@/context/WorkspaceContext'

const VerticalNavigation = () => {
  const { pathname } = useLocation()

  const { workspaceName, workspaceProfile } = useWorkspace()

  return (
    <Box
      sx={{
        mt: 2,
        width: '12%',
        height: '100vh',
        borderRadius: '0 10px 10px 0',
        float: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Box sx={{ ml: -2 }}>
        <Box sx={{ display: 'flex', mt: 3, justifyContent: 'center' }}>
          <WorkspaceDowndown profile={workspaceProfile} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Typography variant="h6" sx={{ color: 'black' }}>
            {workspaceName}
          </Typography>
        </Box>
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
              <Box sx={{ display: 'flex', mt: 3 }}>
                {item.selectIcon}
                <Typography sx={{ color: Color.babeBlue, ml: 2 }}>
                  {item.name}
                </Typography>
              </Box>
            </Link>
          ) : (
            <Link
              to={`/dashboard${item.route}`}
              style={{ textDecoration: 'none', color: 'black' }}
              key={item.route}
            >
              <Box sx={{ display: 'flex', mt: 3 }}>
                {item.icon}
                <Typography sx={{ color: 'black', ml: 2 }}>
                  {item.name}
                </Typography>
              </Box>
            </Link>
          ),
        )}
      </Box>
    </Box>
  )
}

export default VerticalNavigation
