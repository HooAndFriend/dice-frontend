// ** Router Imports
import { Link } from 'react-router-dom'

// ** Mui Imports
import { Box, Typography, styled } from '@mui/material'

// ** Component Imports
import UserDropdown from '@/components/UserDropdown'
import ImageBox from '@/components/Image'

// ** Redux Imports
import { getUserInfo } from '@/store/app/auth'
import { useSelector } from 'react-redux'

const Header = styled('header')({
  background: 'lightblue',
  padding: '10px',
  height: '75px',
  backgroundColor: 'white',
})

const HeaderBox = () => {
  const { email, nickname, profile } = useSelector(getUserInfo)
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
        <Box sx={{ width: '85%', ml: 1 }}>
          <Link to="/dashboard">
            <ImageBox image="/img/main-logo.png" width={150} alt="logo" />
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <UserDropdown profile={profile} nickname={nickname} />
          </Box>
          <Box sx={{ mx: 1 }}>
            <Typography variant="h6" sx={{ fontSize: 16 }}>
              {nickname}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              {email}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Header>
  )
}

export default HeaderBox
