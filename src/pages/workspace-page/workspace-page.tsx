import { Box, TextField, Typography } from '@mui/material'
import { InputTextField } from '@/components/text-input'

const WorkspacePageView = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography variant="h6">Workspace Image</Typography>
          <Box sx={{ width: 300, height: 300, backgroundColor: 'white' }}></Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  )
}

export default WorkspacePageView
