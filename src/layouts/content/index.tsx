// ** Mui Imports
import { Box } from '@mui/material'

const ContentBox = ({ children }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          mt: 2,
          width: '95%',
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default ContentBox
