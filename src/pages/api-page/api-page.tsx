// ** React Imports
import { ChangeEvent } from 'react'

// ** Mui Imports
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'

// ** Component Imports
import SideMenu from './sideMenu'
import { ContextBox } from '@/components/ContentBox'

// ** Type Imports
import type { Collection } from '@/types/collection'
import type { ApiProps } from '.'

// ** Constant Imports
import Color from '@/constants/color'

interface PropsType {
  data: Collection[]
  searchData: ApiProps
  selectedCollectionId: number
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleSelect: (e: SelectChangeEvent<HTMLInputElement>) => void
  handleSelectedCollection: (collectionId: number) => void
}

const ApiPageView = ({
  data,
  searchData,
  handleSelect,
  handleInput,
  selectedCollectionId,
  handleSelectedCollection,
}: PropsType) => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: Color.purple,
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '20%' }}>
        <SideMenu
          data={data}
          handleSelectedCollection={handleSelectedCollection}
          selectedCollectionId={selectedCollectionId}
          searchData={searchData}
          handleInput={handleInput}
          handleSelect={handleSelect}
        />
      </Box>
      <ContextBox type="SIDE">
        <Box>
          <Typography variant="h4" sx={{ color: 'white' }}>
            user
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: 'white' }}>
            save message
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              backgroundColor: Color.purple,
              width: '100%',
              height: 60,
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              mt: 5,
            }}
          >
            <Box
              sx={{
                width: '15%',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FormControl fullWidth>
                <Select labelId="lang" defaultValue="GET">
                  <MenuItem value="GET">
                    <Typography variant="h6" sx={{ color: Color.getColor }}>
                      GET
                    </Typography>
                  </MenuItem>
                  <MenuItem value="POST">
                    <Typography variant="h6" sx={{ color: Color.postColor }}>
                      POST
                    </Typography>
                  </MenuItem>
                  <MenuItem value="PUT">
                    <Typography variant="h6" sx={{ color: Color.putColor }}>
                      PUT
                    </Typography>
                  </MenuItem>
                  <MenuItem value="PATCH">
                    <Typography variant="h6" sx={{ color: Color.patchColor }}>
                      PATCH
                    </Typography>
                  </MenuItem>
                  <MenuItem value="DELETE">
                    <Typography variant="h6" sx={{ color: Color.deleteColor }}>
                      DELETE
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{ backgroundColor: Color.glassGrey, height: 30, width: 1.2 }}
            />
            <Box
              sx={{
                pl: 3,
                width: '85%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextField
                defaultValue="http://localhost:8080/api/v1/user"
                sx={{ color: Color.glassGrey }}
                variant="standard"
                fullWidth
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 3,
          }}
        >
          <Box
            sx={{
              mr: 15,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" sx={{ color: Color.glassGrey }}>
                params
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  width: 30,
                  height: 1.2,
                  borderRadius: 1,
                  mt: 1,
                  backgroundColor: 'white',
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            sx={{
              mr: 15,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" sx={{ color: Color.glassGrey }}>
                auth
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  width: 30,
                  height: 1.2,
                  borderRadius: 1,
                  mt: 1,
                  backgroundColor: 'white',
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            sx={{
              mr: 15,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" sx={{ color: Color.glassGrey }}>
                header
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  width: 30,
                  height: 1.2,
                  borderRadius: 1,
                  mt: 1,
                  backgroundColor: 'white',
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            sx={{
              mr: 15,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" sx={{ color: Color.glassGrey }}>
                body
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  width: 30,
                  height: 1.2,
                  borderRadius: 1,
                  mt: 1,
                  backgroundColor: 'white',
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </ContextBox>
    </Box>
  )
}

export default ApiPageView
