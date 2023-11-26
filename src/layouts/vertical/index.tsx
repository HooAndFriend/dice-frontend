// ** React Imports
import { useMemo } from 'react'

// ** Mui Imports
import { Box } from '@mui/material'

// ** Context Imports
import { MenuList } from '@/constants/MenuItem'
import { useWorkspace } from '@/context/WorkspaceContext'

// ** Router Imports
import { Link, useLocation } from 'react-router-dom'

// ** Redux Imports
import { useSelector } from 'react-redux'
import { getUserInfo } from '@/store/app/auth'

// ** Component Imports
import WorkspaceDowndown from '@/components/WorkspaceDropdown'
import ImageBox from '@/components/Image'

const VerticalNavigation = () => {
  const { pathname } = useLocation()

  const { profile } = useSelector(getUserInfo)

  const { workspaceProfile, isPersonal } = useWorkspace()

  const menuList = useMemo(
    () => (isPersonal ? MenuList.filter((item) => !item.isPersonal) : MenuList),

    [isPersonal],
  )

  return (
    <Box
      sx={{
        width: '80px',
        height: '100vh',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
      <Box>
        {menuList
          .filter((item) => item.isMenu)
          .map((item) =>
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ position: 'absolute', bottom: 10 }}>
          <ImageBox
            width={40}
            height={40}
            image={profile}
            alt="profile"
            borderRadius={5}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default VerticalNavigation
