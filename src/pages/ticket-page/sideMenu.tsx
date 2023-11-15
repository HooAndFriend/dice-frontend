// ** Mui Imports
import { Box } from '@mui/material'

// ** Constant Imports
import Color from '@/constants/color'

interface PropsType {}

const SideMenu = ({}: PropsType) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: Color.purple,
      }}
    ></Box>
  )
}

export default SideMenu
