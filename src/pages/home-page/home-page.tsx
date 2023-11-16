// ** Mui Imports
import { Box, Typography } from '@mui/material'

// ** Type Imports
import type { WorkspaceV1 } from '@/types/workspace'

// ** Component Imports
import ImageBox from '@/components/Image'
import { ContextBox } from '@/components/ContentBox'

// ** Constant Imports
import Color from '@/constants/color'

interface PropsType {
  worksapce: WorkspaceV1
}

const HomePageView = ({ worksapce }: PropsType) => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: Color.purple,
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <ContextBox type="ALL">
        <Box>
          <ImageBox
            image={worksapce.profile}
            width={500}
            height={500}
            alt="workspace profile"
          />
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
      </ContextBox>
    </Box>
  )
}

export default HomePageView
