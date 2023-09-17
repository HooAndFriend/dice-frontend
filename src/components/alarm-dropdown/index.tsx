// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import { Button, MenuItem, Avatar, Menu, Link } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { logout } from '@/store/app/auth'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

const AlarmDropdown = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <Fragment>
      <Button onClick={handleClick}>
        <NotificationsIcon
          sx={{ width: 30 }}
          color="success"
          fontSize="large"
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} sx={{ color: 'black' }}>
          Setting
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ color: 'black' }}>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default AlarmDropdown
