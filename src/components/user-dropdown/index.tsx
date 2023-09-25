// ** React Imports
import { useState, Fragment } from 'react'

// ** Router Imports
import { Link } from 'react-router-dom'

// ** MUI Imports
import { Button, MenuItem, Avatar, Menu } from '@mui/material'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { logout } from '@/store/app/auth'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

interface PropsType {
  profile: string
  nickname: string
}

const UserDropdown = ({ profile, nickname }: PropsType) => {
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
        <Avatar sx={{ width: 40, height: 40 }}>
          {profile !== '' ? (
            <img width="100%" height="100%" src={profile} />
          ) : (
            nickname
          )}
        </Avatar>
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
        <Link to="/dashboard/setting">
          <MenuItem onClick={handleClose} sx={{ color: 'black' }}>
            Setting
          </MenuItem>
        </Link>
        <MenuItem onClick={handleLogout} sx={{ color: 'black' }}>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default UserDropdown
