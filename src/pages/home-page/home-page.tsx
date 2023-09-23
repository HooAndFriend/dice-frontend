// ** Mui Imports
import { Box } from '@mui/material'

// ** Type Imports
import type { WorkspaceV1 } from '@/types/workspace'

interface PropsType {
  worksapce: WorkspaceV1
}

const HomePageView = ({ worksapce }: PropsType) => {
  return (
    <Box>
      <Box>
        <img src={worksapce.profile} />
      </Box>
    </Box>
  )
}

export default HomePageView
