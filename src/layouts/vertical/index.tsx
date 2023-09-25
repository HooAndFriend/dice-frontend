// ** Mui Imports
import { Box, Typography } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import GridViewIcon from '@mui/icons-material/GridView'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'

// ** Color Imports
import Color from '@/constants/color'

const VerticalNavigation = () => {
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
          <Box
            sx={{
              width: 50,
              height: 50,
              backgroundColor: Color.lightGrey,
              borderRadius: 3,
            }}
          >
            <img
              width="100%"
              height="100%"
              src="https://firebasestorage.googleapis.com/v0/b/dice-dev-a5b63.appspot.com/o/images%2FKakaoTalk_Image_2023-04-20-18-16-20.jpeg?alt=media&token=a347e6ca-ed4c-424a-9a0b-e4b7e44974aa"
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Typography variant="h6">Pinomaker</Typography>
        </Box>
        <Box sx={{ display: 'flex', mt: 5 }}>
          <GridViewIcon sx={{ mr: 2 }} />
          <Typography sx={{ color: 'black' }}>Dashboard</Typography>
        </Box>
        <Box sx={{ display: 'flex', mt: 3 }}>
          <LocalShippingIcon sx={{ mr: 2 }} />
          <Typography sx={{ color: 'black' }}>Collection</Typography>
        </Box>
        <Box sx={{ display: 'flex', mt: 3 }}>
          <AccountTreeIcon sx={{ mr: 2 }} />
          <Typography sx={{ color: 'black' }}>ERD</Typography>
        </Box>
        <Box sx={{ display: 'flex', mt: 3 }}>
          <SettingsApplicationsIcon sx={{ mr: 2 }} />
          <Typography sx={{ color: 'black' }}>Setting</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default VerticalNavigation
