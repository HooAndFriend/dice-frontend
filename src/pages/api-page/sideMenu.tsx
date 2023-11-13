// ** Mui Imports
import { Box, TextField } from '@mui/material'

// ** Component Imports
import {
  ApiAddIcon,
  ApiImportIcon,
  CollectionAddIcon,
  SearchIcon,
} from '@/components/Icons'

const SideMenu = () => {
  return (
    <Box
      sx={{
        width: '250px',
        height: '100vh',
        // backgroundColor: 'black',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'right', pt: 3 }}>
        <Box
          sx={{
            px: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ApiImportIcon />
        </Box>
        <Box
          sx={{
            px: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ApiAddIcon />
        </Box>
        <Box
          sx={{
            px: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CollectionAddIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 3,
        }}
      >
        <SearchIcon />
        <Box sx={{ pl: 3 }}>
          <TextField label="word" variant="outlined" size="small" />
        </Box>
      </Box>
    </Box>
  )
}

export default SideMenu
