import { Box, Button, Typography } from '@mui/material'
import { InputTextField } from '@/components/TextInput'
import { WorkspaceV2 } from '@/types/workspace'
import Color from '@/constants/color'
import ImagePreview from '@/components/ImagePreview'

interface PropsType {
  worksapce: WorkspaceV2
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSetPath: (path: string) => void
  handleWorkspaceUpdate: () => void
}

const WorkspacePageView = ({
  worksapce,
  handleInput,
  handleSetPath,
  handleWorkspaceUpdate,
}: PropsType) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 5,
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: 'black' }}>
            Workspace Image
          </Typography>
          <Box
            sx={{
              width: 400,
              height: 400,
              backgroundColor: 'white',
              mt: 1,
              borderRadius: 12,
            }}
          >
            <ImagePreview image={worksapce.profile} setPath={handleSetPath} />
          </Box>
        </Box>
        <Box sx={{ ml: 10 }}>
          <Typography variant="h5" sx={{ color: 'black' }}>
            Workspace Name
          </Typography>
          <InputTextField
            sx={{ mt: 1, width: 600 }}
            value={worksapce.name}
            onChange={handleInput}
            name="name"
          />
          <Typography variant="h5" sx={{ color: 'black', mt: 5 }}>
            Workspace Comment
          </Typography>
          <InputTextField
            sx={{ mt: 1, width: 600 }}
            multiline
            rows={10}
            value={worksapce.comment}
            onChange={handleInput}
            name="comment"
          />
        </Box>
      </Box>
      <Box sx={{ float: 'right', mt: 5 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: Color.green, width: 150 }}
          onClick={handleWorkspaceUpdate}
        >
          Save
        </Button>
      </Box>
      <Box sx={{ mt: 15 }}>
        <Typography variant="h5" sx={{ color: 'black' }}>
          Member Manage
        </Typography>
        <Typography variant="body1" sx={{ color: 'black', mt: 2 }}>
          해당 링크를 공유하여 워크페이스로 사람들을 초대하세요.
        </Typography>
        <Box sx={{ display: 'flex', mt: 3 }}>
          <Box
            sx={{
              backgroundColor: Color.lightGrey,
              width: 1000,
              height: 40,
              borderRadius: '10px 0 0 10px',
              display: 'flex',
              alignItems: 'center',
              pl: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: 'black' }}>
              https://naver.com?token=lkshdashdk2133lqkjwlkajsdoi2u3ahs
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: Color.green,
              width: 150,
              height: 40,
              borderRadius: '0 10px 10px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6">Copy</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: Color.green, width: 150 }}
        >
          Invite Member
        </Button>
        <InputTextField
          sx={{ backgroundColor: Color.lightGrey, border: 'none' }}
        />
      </Box>
      <Box>
        <Box
          sx={{
            border: '3px black solid',
            minHeight: 300,
            mt: 3,
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              px: 5,
              py: 3,
            }}
          >
            <Typography>Member</Typography>
            <Typography>Role</Typography>
          </Box>
          {worksapce.workspaceUser.map((item) => (
            <Box
              sx={{ px: 5, display: 'flex', justifyContent: 'space-between' }}
              key={item.user.email}
            >
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: 50, height: 50, borderRadius: 25 }}>
                  <img src={item.user.profile} width={50} height={50} />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6">{item.user.nickname}</Typography>
                  <Typography variant="body2" sx={{ color: 'grey' }}>
                    {item.user.email}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ alignItem: 'center' }}>
                <Typography>{item.role}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default WorkspacePageView
