import { Box, Button, TextField, Typography, styled } from '@mui/material'

export const InputTextField = styled(TextField)({
  '& label': {
    color: 'var(--sub-text)',
  },
  '& label.Mui-focused': {
    color: 'var(--primary)',
  },
  '& label.Mui-error': {
    color: '#d32f2f',
  },
  '& .MuiOutlinedInput-root': {
    color: 'var(--text)',
    '& fieldset': {
      borderColor: 'var(--sub-text)',
    },
  },
})

export const IconBox = ({ children }) => (
  <Box
    sx={{
      width: 40,
      height: 40,
      backgroundColor: 'white',
      borderRadius: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      float: 'left',
    }}
  >
    {children}
  </Box>
)
