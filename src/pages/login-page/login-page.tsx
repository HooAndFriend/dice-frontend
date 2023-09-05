// ** Mui Imports
import AppleIcon from '@/components/icons/apple'
import Color from '@/constants/color'
import { Box, Button, Typography } from '@mui/material'
import { IconBox, InputTextField } from './component'
import GithubIcon from '@/components/icons/github'
import MicrosoftIcon from '@/components/icons/microsoft'
import GoogleIcon from '@/components/icons/google'

interface PropsType {
  handleLogin: () => void
}

const LoginPageView = ({ handleLogin }: PropsType) => {
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
          />
        </Box>
        <Box sx={{ width: 400, mt: 3 }}>
          <InputTextField
            type="password"
            variant="standard"
            fullWidth
            defaultValue="1234"
            label="password"
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
      </Box>
    </Box>
  )
}

export default LoginPageView
