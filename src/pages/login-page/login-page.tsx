// ** React Imports
import { ChangeEvent } from 'react'

// ** Router Imports
import { Link } from 'react-router-dom'

// ** Mui Imports
import { Box, Button, Typography } from '@mui/material'

// ** Component Imports
import { IconBox } from '@/components/IconBox'
import {
  AppleIcon,
  GithubIcon,
  GoogleIcon,
  MicrosoftIcon,
} from '@/components/Icons'
import { InputTextField } from '@/components/TextInput'

// ** Utils Imports
import Color from '@/constants/color'

// ** Type Imporst
import type { SocialType, UserLoginParams } from '@/types/user'

// ** Lottie Imports
import loginLottie from '@/lottie/lottie-login.json'
import Lottie from 'lottie-react'

interface PropsType {
  user: UserLoginParams
  setUser: (e: ChangeEvent<HTMLInputElement>) => void
  handleLogin: () => void
  handleSocial: (type: SocialType) => void
}

const LoginPageView = ({
  handleLogin,
  user,
  setUser,
  handleSocial,
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
            Login
          </Typography>
          <Box sx={{ width: 400, mt: 5 }}>
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              width: 400,
              mt: 5,
            }}
          >
            <IconBox>
              <AppleIcon width={15} height={15} />
            </IconBox>
            <IconBox>
              <GithubIcon
                width={15}
                height={15}
                onClick={() => handleSocial('GITHUB')}
              />
            </IconBox>
            <IconBox>
              <GoogleIcon
                width={15}
                height={15}
                onClick={() => handleSocial('GOOGLE')}
              />
            </IconBox>
            <IconBox>
              <MicrosoftIcon
                width={15}
                height={15}
                onClick={() => handleSocial('MICROSOFT')}
              />
            </IconBox>
          </Box>
          <Box sx={{ width: 400, mt: 5 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: Color.green,
                '&:hover': {
                  backgroundColor: Color.green,
                },
              }}
              onClick={handleLogin}
            >
              LOGIN
            </Button>
          </Box>
          <Box sx={{ float: 'right' }}>
            <Link
              to="/signup"
              style={{ textDecoration: 'none', color: 'grey' }}
            >
              <Typography variant="body2" sx={{ mr: 1, mt: 1 }}>
                Dont have and account? Register
              </Typography>
            </Link>
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
          <Lottie animationData={loginLottie} />
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPageView
