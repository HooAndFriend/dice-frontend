import { Menu, MenuItem, TextField, styled } from '@mui/material'

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

interface PropsType {
  anchorEl: HTMLElement | null
  open: boolean
  count: number
  handleClose: () => void
}

export const CollectionDropDown = ({
  anchorEl,
  handleClose,
  open,
  count,
}: PropsType) => {
  return (
    <Menu
      anchorEl={anchorEl}
      onClose={handleClose}
      open={open}
      sx={{
        top: `${-45 * count}px`,
        left: '50px',
      }}
    >
      <MenuItem>Add Request</MenuItem>
    </Menu>
  )
}
