// ** React Imports
import { ChangeEvent } from 'react'

// ** Mui Imports
import { Box, Button, Typography } from '@mui/material'

// ** Component Imports
import { InputTextField } from '@/components/text-input'

// ** Utils Imports
import Color from '@/constants/color'

// ** Type Imports
import type { UserSocialRegisterParams } from '@/types/user'

interface PropsType {
  user: UserSocialRegisterParams
  setUser: (e: ChangeEvent<HTMLInputElement>) => void
  handleJoin: () => void
}

const SocialSignupPageView = ({ handleJoin, user, setUser }: PropsType) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        <img src="/img/dice2.png" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          bottom: 0,
        }}
      >
        <img src="/img/dice1.png" />
      </Box>
      <Box sx={{ mt: -10 }}>
        <Typography variant="h1" sx={{ color: 'black' }}>
          Sign up
        </Typography>
        <Box sx={{ width: 400, mt: 3 }}>
          <InputTextField
            type="text"
            variant="standard"
            fullWidth
            label="nickname"
            value={user.nickname}
            name="nickname"
            onChange={setUser}
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
            onClick={handleJoin}
          >
            JOIN
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SocialSignupPageView
