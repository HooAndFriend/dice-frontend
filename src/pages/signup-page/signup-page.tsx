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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'white',
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
  )
}

export default SignupPageView
