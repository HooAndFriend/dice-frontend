// ** Mui Imports
import { Box, Typography, styled } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

// ** Component Imports
import UserDropdown from '@/components/user-dropdown'

// ** Utils Imports
import Color from '@/constants/color'

const Header = styled('header')({
  background: 'lightblue',
  padding: '10px',
  height: '75px',
  backgroundColor: Color.blueRed,
})

const TextBox = styled('div')({
  marginLeft: 50,
})

const HeaderBox = () => {
  return (
    <Header>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Box>
          <img src="/img/logo.png" alt="logo" width={40} />
        </Box>
        <TextBox>
          <Typography variant="h5">HOME</Typography>
        </TextBox>
        <TextBox>
          <Typography variant="h5">API</Typography>
        </TextBox>
        <TextBox>
          <Typography variant="h5">ERD</Typography>
        </TextBox>
        <TextBox>
          <Typography variant="h5">SETTING</Typography>
        </TextBox>
        <Box sx={{ marginLeft: 'auto' }}>
          <NotificationsIcon sx={{ mr: 5, mt: 1 }} fontSize="large" />
        </Box>
        <UserDropdown />
      </Box>
    </Header>
  )
}

export default HeaderBox
