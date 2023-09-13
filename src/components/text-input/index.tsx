import { TextField, styled } from '@mui/material'

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
