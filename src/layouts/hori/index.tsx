// ** Mui Imports
import { Box, Typography, styled, Link } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

// ** Component Imports
import UserDropdown from '@/components/user-dropdown'

// ** Utils Imports
import Color from '@/constants/color'
import AlarmDropdown from '@/components/alarm-dropdown'

const Header = styled('header')({
  background: 'lightblue',
  padding: '10px',
  height: '50px',
  backgroundColor: Color.blueRed,
})

const TextBox = styled('div')({
  marginLeft: 50,
})

const HeaderBox = () => {
  return (
    <Header>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Box>
          <Link href="/dashboard">
            <img
              src="/img/logo.png"
              alt="logo"
              width={30}
              style={{ marginLeft: 10 }}
            />
          </Link>
        </Box>
        <TextBox>
          <Link
            href="/dashboard/api"
            sx={{ textDecoration: 'none', color: 'white' }}
          >
            <Typography variant="h6">API</Typography>
          </Link>
        </TextBox>
        <TextBox>
          <Link
            href="/dashboard/erd"
            sx={{ textDecoration: 'none', color: 'white' }}
          >
            <Typography variant="h6">ERD</Typography>
          </Link>
        </TextBox>
        <TextBox>
          <Link
            href="/dashboard/workspace"
            sx={{ textDecoration: 'none', color: 'white' }}
          >
            <Typography variant="h6">SETTING</Typography>
          </Link>
        </TextBox>
        <Box sx={{ marginLeft: 'auto' }}>
          <AlarmDropdown />
        </Box>
        <Box>
          <UserDropdown />
        </Box>
      </Box>
    </Header>
  )
}

export default HeaderBox
