// ** Mui Imports
import { Box, Typography } from '@mui/material'

// ** Component Imports

// ** Type Imports
import { ContextBox } from '@/components/ContentBox'
import Color from '@/constants/color'
import type { Collection } from '@/types/collection'
import SideMenu from './sideMenu'

interface PropsType {
  data: Collection[]
  selectedCollectionId: number
  handleSelectedCollection: (collectionId: number) => void
}

const ApiPageView = ({
  data,
  selectedCollectionId,
  handleSelectedCollection,
}: PropsType) => {
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
      <Box sx={{ width: '16%' }}>
        <SideMenu
          data={data}
          handleSelectedCollection={handleSelectedCollection}
          selectedCollectionId={selectedCollectionId}
        />
      </Box>
      <ContextBox>
        <Typography sx={{ color: 'white' }}>Hello</Typography>
      </ContextBox>
    </Box>
  )
}

export default ApiPageView
