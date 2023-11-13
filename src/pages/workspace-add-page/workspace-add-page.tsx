// ** Mui Imports
import { Box, Button, Typography } from '@mui/material'

// ** Component Imports
import ImagePreview from '@/components/ImagePreview'
import { InputTextField } from '@/components/TextInput'

// ** Constant Imports
import Color from '@/constants/color'

// ** Type Imporst

interface PropsType {}

const WorksapceAddPageView = ({}: PropsType) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: Color.purple,
      }}
    >
      <Box
        sx={{
          mt: -10,
          backgroundColor: 'white',
          p: 5,
          borderRadius: 5,
        }}
      >
        <Typography variant="h3" sx={{ color: 'black' }}>
          Add Worksapce
        </Typography>
        <Box
          sx={{
            width: 400,
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: 100, height: 100 }}>
            <ImagePreview
              image=""
              setPath={(e: string) => {
                console.log(e)
              }}
              boxColor={Color.lightGrey}
              borderRadius={5}
            />
          </Box>
        </Box>
        <Box sx={{ width: 400, mt: 5 }}>
          <InputTextField
            type="text"
            variant="standard"
            fullWidth
            label="name"
          />
        </Box>
        <Box sx={{ width: 400, mt: 3 }}>
          <InputTextField
            type="text"
            variant="standard"
            fullWidth
            label="comment"
          />
        </Box>
        <Box sx={{ width: 400, mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: Color.green,
              '&:hover': {
                backgroundColor: Color.green,
              },
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default WorksapceAddPageView
