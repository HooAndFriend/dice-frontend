// ** React Imports
import { ChangeEvent, KeyboardEvent } from 'react'

// ** Mui Imports
import { Box, ButtonBase, InputBase, Typography } from '@mui/material'

// ** Type Imports
import type { UserSocialRegisterParams } from '@/types/user'

interface PropsType {
  user: UserSocialRegisterParams
  setUser: (e: ChangeEvent<HTMLInputElement>) => void
  handleJoin: () => void
  handleEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

const SocialSignupPageView = ({
  handleJoin,
  user,
  setUser,
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
          <img src="/img/dice.jpeg" width={300} height={300} />
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <Box>
              <Typography variant="h6">Email</Typography>
              <InputBase
                type="text"
                value={user.nickname}
                name="username"
                onChange={setUser}
                placeholder="email"
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 30 }}>
            <ButtonBase
              sx={{
                backgroundColor: 'black',
                width: '400px',
                height: '50px',
                borderRadius: 2,
                color: 'white',
              }}
              onClick={handleJoin}
            >
              <Typography variant="h6">Join</Typography>
            </ButtonBase>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SocialSignupPageView
