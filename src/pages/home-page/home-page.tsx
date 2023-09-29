// ** Mui Imports
import { Box, Typography } from '@mui/material'

// ** Type Imports
import type { WorkspaceV1 } from '@/types/workspace'

interface PropsType {
  worksapce: WorkspaceV1
}

const HomePageView = ({ worksapce }: PropsType) => {
  return (
    <Box
      sx={{
        display: 'flex',
        mt: 10,
        ml: 10,
      }}
    >
      <Box>
        <img src={worksapce.profile} width={500} height={500} />
      </Box>
      <Box sx={{ ml: 10, mt: 5 }}>
        <Typography variant="h1" sx={{ color: 'black' }}>
          Welcome to
        </Typography>
        <Typography variant="h1" sx={{ color: 'black' }}>
          {worksapce.name}
        </Typography>
        <Typography variant="body1" sx={{ color: 'black', mt: 5 }}>
          {worksapce.comment}
        </Typography>
      </Box>
    </Box>
  )
}

export default HomePageView
