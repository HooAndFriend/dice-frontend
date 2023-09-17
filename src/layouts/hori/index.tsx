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
          <img
            src="/img/logo.png"
            alt="logo"
            width={30}
            style={{ marginLeft: 10 }}
          />
        </Box>
        <TextBox>
          <Typography variant="h6">HOME</Typography>
        </TextBox>
        <TextBox>
          <Typography variant="h6">API</Typography>
        </TextBox>
        <TextBox>
          <Typography variant="h6">ERD</Typography>
        </TextBox>
        <TextBox>
          <Typography variant="h6">SETTING</Typography>
        </TextBox>
        <Box sx={{ marginLeft: 'auto' }}>
          <NotificationsIcon
            sx={{ mr: 2, mt: 1, width: 30 }}
            fontSize="large"
          />
        </Box>
        <UserDropdown />
      </Box>
    </Header>
  )
}

export default HeaderBox
