// ** React Imports
import { ChangeEvent, KeyboardEvent } from 'react'

// ** Mui Imports
import { Box, Button, InputBase, InputLabel, Typography } from '@mui/material'

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
  handleEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

const SignupPageView = ({
  handleJoin,
  user,
  setUser,
  passwordC,
  handleChangePasswordC,
  handleEnter,
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
          <Typography variant="h1" sx={{ color: 'white' }}>
            Sign up
          </Typography>
          <Box sx={{ width: 400, mt: 3 }}>
            <InputLabel sx={{ color: 'white', pb: 1 }}>username</InputLabel>
            <InputBase
              type="text"
              placeholder="username"
              fullWidth
              value={user.username}
              name="username"
              onChange={setUser}
              sx={{ backgroundColor: Color.glassGrey, p: 1, borderRadius: 2 }}
            />
          </Box>
          <Box sx={{ width: 400, mt: 3 }}>
            <InputLabel sx={{ color: 'white', pb: 1 }}>password</InputLabel>
            <InputBase
              type="password"
              placeholder="password"
              fullWidth
              value={user.password}
              name="password"
              onChange={setUser}
              sx={{ backgroundColor: Color.glassGrey, p: 1, borderRadius: 2 }}
            />
          </Box>
          <Box sx={{ width: 400, mt: 3 }}>
            <InputLabel sx={{ color: 'white', pb: 1 }}>
              password check
            </InputLabel>
            <InputBase
              type="password"
              placeholder="password check"
              fullWidth
              value={passwordC}
              onChange={handleChangePasswordC}
              sx={{ backgroundColor: Color.glassGrey, p: 1, borderRadius: 2 }}
            />
          </Box>
          <Box sx={{ width: 400, mt: 3 }}>
            <InputLabel sx={{ color: 'white', pb: 1 }}>nickname</InputLabel>
            <InputBase
              placeholder="nickname"
              type="text"
              fullWidth
              value={user.nickname}
              name="nickname"
              onChange={setUser}
              onKeyDown={handleEnter}
              sx={{ backgroundColor: Color.glassGrey, p: 1, borderRadius: 2 }}
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
