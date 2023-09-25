// ** Mui Imports
import { Box, Typography } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import GridViewIcon from '@mui/icons-material/GridView'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'

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
        <Box sx={{ display: 'flex', mt: 3 }}>
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
