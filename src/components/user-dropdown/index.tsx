// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import { Button, MenuItem, Avatar, Menu } from '@mui/material'

// ** Context Imports
import { useWorkspace } from '@/context/WorkspaceContext'

// ** Color Imports
import Color from '@/constants/color'

const WorkspaceDowndown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

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

  return (
    <Fragment>
      <Button onClick={handleClick}>
        <Avatar sx={{ width: 40, height: 40 }}>
          <img
            width="100%"
            height="100%"
            src="https://firebasestorage.googleapis.com/v0/b/dice-dev-a5b63.appspot.com/o/images%2FKakaoTalk_Image_2023-04-20-18-16-20.jpeg?alt=media&token=a347e6ca-ed4c-424a-9a0b-e4b7e44974aa"
          />
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
        {workspaceList.data.map((item) => (
          <MenuItem
            onClick={() => handleWorkspace(item.workspace.id)}
            sx={{
              color: 'black',
              backgroundColor:
                workspaceId === item.workspace.id ? Color.babeBlue : '',
            }}
          >
            <Avatar sx={{ width: 30, height: 30, mr: 1 }}>
              <img width="100%" height="100%" src={item.workspace.profile} />
            </Avatar>
            {item.workspace.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  )
}

export default WorkspaceDowndown
