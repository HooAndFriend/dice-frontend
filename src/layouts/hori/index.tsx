// ** Router Imports
import { Link } from 'react-router-dom'

// ** Mui Imports
import { Box, Typography, styled } from '@mui/material'

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
          <Link to="/dashboard">
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
            to="/dashboard/api"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Typography variant="h6">API</Typography>
          </Link>
        </TextBox>
        <TextBox>
          <Link
            to="/dashboard/erd"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Typography variant="h6">ERD</Typography>
          </Link>
        </TextBox>
        <TextBox>
          <Link
            to="/dashboard/workspace"
            style={{ textDecoration: 'none', color: 'white' }}
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
