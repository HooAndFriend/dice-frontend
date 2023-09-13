// ** Router Imports
import { Link } from 'react-router-dom'

// ** Mui Imports
import { Box, Button, Typography } from '@mui/material'

// ** Component Imports
import AppleIcon from '@/components/icons/apple'
import GithubIcon from '@/components/icons/github'
import MicrosoftIcon from '@/components/icons/microsoft'
import GoogleIcon from '@/components/icons/google'
import { InputTextField } from '@/components/text-input'
import { IconBox } from '@/components/icon-box'

// ** Utils Imports
import Color from '@/constants/color'
import { UserLoginParams } from '@/types/user'
import { ChangeEvent } from 'react'

interface PropsType {
  user: UserLoginParams
  setUser: (e: ChangeEvent<HTMLInputElement>) => void
  handleLogin: () => void
}

const LoginPageView = ({ handleLogin, user, setUser }: PropsType) => {
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
        <Typography variant="h1">Login</Typography>
        <Box sx={{ width: 400, mt: 3 }}>
          <InputTextField
            type="text"
            variant="standard"
            fullWidth
            defaultValue="admin"
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
            defaultValue="1234"
            label="password"
            value={user.password}
            name="password"
            onChange={setUser}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: 400,
            mt: 3,
          }}
        >
          <IconBox>
            <AppleIcon width={20} height={20} />
          </IconBox>
          <IconBox>
            <GithubIcon width={20} height={20} />
          </IconBox>
          <IconBox>
            <GoogleIcon width={20} height={20} />
          </IconBox>
          <IconBox>
            <MicrosoftIcon width={20} height={20} />
          </IconBox>
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
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </Box>
        <Box sx={{ float: 'right' }}>
          <Link to="/signup" style={{ textDecoration: 'none', color: 'grey' }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              signup
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPageView
