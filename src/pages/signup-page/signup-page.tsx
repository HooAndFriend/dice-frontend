// ** React Imports
import { ChangeEvent } from 'react'

// ** Mui Imports
import { Box, Button, Typography } from '@mui/material'

// ** Component Imports
import { InputTextField } from '@/components/TextInput'

// ** Utils Imports
import Color from '@/constants/color'

// ** Type Imports
import type { UserRegisterParams } from '@/types/user'

// ** Lottie Imports
import registerLottie from '@/lottie/lottie-register.json'
import Lottie from 'lottie-react'

interface PropsType {
  user: UserRegisterParams
  passwordC: string
  setUser: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangePasswordC: (e: ChangeEvent<HTMLInputElement>) => void
  handleJoin: () => void
}

const SignupPageView = ({
  handleJoin,
  user,
  setUser,
  passwordC,
  handleChangePasswordC,
}: PropsType) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: '30%',
          backgroundColor: Color.smallPurple,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h1" sx={{ color: 'black' }}>
            Sign up
          </Typography>
          <Box sx={{ width: 400, mt: 3 }}>
            <InputTextField
              type="text"
              variant="standard"
              fullWidth
              label="username"
              value={user.username}
              name="username"
              onChange={setUser}
            />
          </Box>
          <Box sx={{ width: 400, mt: 3 }}>
            <InputTextField
              type="password"
              variant="standard"
              fullWidth
              label="password"
              value={user.password}
              name="password"
              onChange={setUser}
            />
          </Box>
          <Box sx={{ width: 400, mt: 3 }}>
            <InputTextField
              type="password"
              variant="standard"
              fullWidth
              label="password check"
              value={passwordC}
              onChange={handleChangePasswordC}
            />
          </Box>
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
      <Box
        sx={{
          width: '70%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '50%' }}>
          <Lottie animationData={registerLottie} />
        </Box>
      </Box>
    </Box>
  )
}

export default SignupPageView
