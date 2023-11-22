// ** React Imports
import { Fragment, useState } from 'react'

// ** Router Imports
import { Link, useNavigate } from 'react-router-dom'

// ** MUI Imports
import { Avatar, Box, Button, Menu, MenuItem } from '@mui/material'

// ** Context Imports
import { useWorkspace } from '@/context/WorkspaceContext'

// ** Color Imports
import Color from '@/constants/color'

// ** Component Imports
import ImageBox from '../Image'
import SettingPage from '@/pages/setting-page'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { logout } from '@/store/app/auth'

interface PropsType {
  profile: string
}

const WorkspaceDowndown = ({ profile }: PropsType) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const { handleWorkspaceId, workspaceList, workspaceId } = useWorkspace()

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleWorkspace = (id: number) => {
    handleWorkspaceId(id)
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  const handleModalOpen = () => {
    handleClose()
    setModalOpen(true)
  }
  const handleModalClose = () => setModalOpen(false)

  return (
    <Fragment>
      <Button onClick={handleClick}>
        <Box sx={{ display: 'flex', pt: 5 }}>
          <ImageBox
            width={60}
            height={60}
            image={profile}
            alt="workspace image"
            borderRadius={3}
          />
        </Box>
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
        {workspaceList.data.map((item) => (
          <MenuItem
            onClick={() => handleWorkspace(item.workspace.id)}
            sx={{
              color: 'black',
              backgroundColor:
                workspaceId === item.workspace.id ? Color.babeBlue : '',
            }}
            key={item.id}
          >
            <Avatar sx={{ width: 30, height: 30, mr: 1 }}>
              <ImageBox
                width="100%"
                height="100%"
                image={item.workspace.profile}
                alt="workspace profile"
              />
            </Avatar>
            {item.workspace.name}
          </MenuItem>
        ))}
        <Link
          to="/workspace"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MenuItem>Add Worksapce</MenuItem>
        </Link>
        <MenuItem onClick={handleModalOpen}>Setting</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      {modalOpen && (
        <SettingPage open={modalOpen} handleClose={handleModalClose} />
      )}
    </Fragment>
  )
}

export default WorkspaceDowndown
