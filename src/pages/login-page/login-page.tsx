// ** React Imports
import { ChangeEvent, KeyboardEvent } from 'react'

// ** Router Imports
import { Link } from 'react-router-dom'

// ** Mui Imports
import { Box, ButtonBase, InputBase, Typography } from '@mui/material'

// ** Component Imports
import { IconBox } from '@/components/IconBox'
import {
  AppleIcon,
  GithubIcon,
  GoogleIcon,
  MicrosoftIcon,
} from '@/components/Icons'

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
  handleEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

const LoginPageView = ({
  handleLogin,
  user,
  setUser,
  handleSocial,
  handleEnter,
}: PropsType) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: ' 60%',
          height: '70%',
          backgroundColor: 'white',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ width: '80%' }}>
            <Lottie animationData={loginLottie} width="50%" />
          </Box>
        </Box>
        <Box sx={{ width: '1px', height: '90%', backgroundColor: '#909090' }} />
        <Box sx={{ width: '50%', height: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              mt: 7,
            }}
          >
            <Typography variant="h3">Welcome Back!</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Box>
              <Typography variant="h6">Email</Typography>
              <InputBase
                type="text"
                value={user.username}
                name="username"
                onChange={setUser}
                placeholder="email"
                sx={{
                  mt: 1,
                  border: '1px solid #CDCDCD',
                  width: '400px',
                  height: '50px',
                  borderRadius: 2,
                  pl: 2,
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Box>
              <Typography variant="h6">Password</Typography>
              <InputBase
                type="password"
                value={user.password}
                name="password"
                onChange={setUser}
                placeholder="password"
                onKeyDown={handleEnter}
                sx={{
                  mt: 1,
                  border: '1px solid #CDCDCD',
                  width: '400px',
                  height: '50px',
                  borderRadius: 2,
                  pl: 2,
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <ButtonBase
              sx={{
                backgroundColor: 'black',
                width: '400px',
                height: '50px',
                borderRadius: 2,
                color: 'white',
              }}
              onClick={handleLogin}
            >
              <Typography variant="h6">Log In</Typography>
            </ButtonBase>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
            <Box
              sx={{ width: '400px', display: 'flex', justifyContent: 'right' }}
            >
              <Link
                to="/signup"
                style={{ textDecoration: 'none', color: 'grey' }}
              >
                <Typography variant="body2">
                  Don’t have an account? Sign up
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 5,
            }}
          >
            <Box
              sx={{ backgroundColor: '#909090', width: '120px', height: '1px' }}
            />
            <Typography variant="body2" sx={{ px: 1.5, color: '#909090' }}>
              OR LOGIN WITH SOCIAL
            </Typography>
            <Box
              sx={{ backgroundColor: '#909090', width: '120px', height: '1px' }}
            />
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
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
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPageView
