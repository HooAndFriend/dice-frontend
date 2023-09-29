// ** Mui Imports
import { Box, Button, Typography } from '@mui/material'

// ** Color Imports
import Color from '@/constants/color'

// ** Componet Imports
import { InputTextField } from '@/components/TextInput'
import ImagePreview from '@/components/ImagePreview'

// ** Type Imporst
import type { UserV0 } from '@/types/user'

interface PropsType {
  user: UserV0
  handleSetPath: (path: string) => void
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleUpdateUser: () => void
}

const SettingPageView = ({
  user,
  handleSetPath,
  handleInput,
  handleUpdateUser,
}: PropsType) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 5,
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: 'black' }}>
            Profile Image
          </Typography>
          <Box
            sx={{
              width: 400,
              height: 400,
              backgroundColor: 'white',
              mt: 1,
              borderRadius: 12,
            }}
          >
            <ImagePreview image={user.profile} setPath={handleSetPath} />
          </Box>
        </Box>
        <Box sx={{ ml: 10 }}>
          <Typography variant="h5" sx={{ color: 'black' }}>
            Nickname
          </Typography>
          <InputTextField
            sx={{ mt: 1, width: 600 }}
            value={user.nickname}
            onChange={handleInput}
            name="nickname"
          />
          <Typography variant="h5" sx={{ color: 'black', mt: 3 }}>
            Email
          </Typography>
          <InputTextField
            sx={{ mt: 1, width: 600 }}
            value={user.email}
            onChange={handleInput}
            name="email"
          />
          <Typography variant="h5" sx={{ color: 'black', mt: 3 }}>
            My Comment
          </Typography>
          <InputTextField
            sx={{ mt: 1, width: 600 }}
            multiline
            rows={5}
            value={user.comment}
            onChange={handleInput}
            name="comment"
          />
        </Box>
      </Box>
      <Box sx={{ float: 'right', mt: 5 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: Color.green, width: 150 }}
          onClick={handleUpdateUser}
        >
          Save
        </Button>
      </Box>
    </Box>
  )
}

export default SettingPageView
