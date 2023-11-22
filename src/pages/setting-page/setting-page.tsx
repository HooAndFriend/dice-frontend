// ** React Imports
import { ReactElement, Ref, forwardRef } from 'react'

// ** Mui Imports
import { Box, Button, Dialog, Slide, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

// ** Color Imports
import Color from '@/constants/color'

// ** Componet Imports
import { InputTextField } from '@/components/TextInput'
import ImagePreview from '@/components/ImagePreview'

// ** Type Imporst
import type { UserV0 } from '@/types/user'

interface PropsType {
  user: UserV0
  open: boolean
  handleClose: () => void
  handleSetPath: (path: string) => void
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleUpdateUser: () => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const SettingPageView = ({
  user,
  handleSetPath,
  handleInput,
  handleUpdateUser,
  open,
  handleClose,
}: PropsType) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="lg"
    >
      <Box sx={{ width: '100%', height: '600px', p: 5 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ color: 'black', ml: 3 }}>
              Profile Image
            </Typography>
            <Box
              sx={{
                width: 400,
                height: 400,
                backgroundColor: 'white',
                borderRadius: 12,
              }}
            >
              <ImagePreview image={user.profile} setPath={handleSetPath} />
            </Box>
          </Box>
          <Box>
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
          <Button
            variant="contained"
            color="error"
            sx={{ width: 150, ml: 5 }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default SettingPageView
