// ** React Imports
import { ChangeEvent, KeyboardEvent } from 'react'

// ** Mui Imports
import {
  Box,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'

// ** Component Imports
import SideMenu from './sideMenu'
import { ContextBox } from '@/components/ContentBox'
import { AuthTable, ParamsTable, BodyEditor } from './component'

// ** Type Imports
import type { ApiParams, Collection } from '@/types/collection'
import type { requestProps } from '.'

// ** Constant Imports
import Color from '@/constants/color'

interface PropsType {
  data: Collection[]
  request: requestProps
  selectedCollectionId: number
  search: string
  response: any
  tab: number
  paramsList: ApiParams[]
  handleAddCollection: () => void
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
  handleSelect: (e: SelectChangeEvent<HTMLInputElement>) => void
  handleSelectedCollection: (collectionId: number) => void
  handleEnter: (e: KeyboardEvent<HTMLInputElement>) => void
  handleTab: (tap: number) => void
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void
  handleClickBtn: () => void
  refetch: () => void
}

const ApiPageView = ({
  data,
  request,
  handleSelect,
  handleInput,
  selectedCollectionId,
  handleSelectedCollection,
  handleAddCollection,
  handleEnter,
  handleSearch,
  search,
  response,
  handleTab,
  tab,
  handleParams,
  paramsList,
  handleClickBtn,
  refetch,
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
      <Box sx={{ width: '15%' }}>
        <SideMenu
          data={data}
          handleSelectedCollection={handleSelectedCollection}
          selectedCollectionId={selectedCollectionId}
          search={search}
          handleSearch={handleSearch}
          handleAddCollection={handleAddCollection}
          refetch={refetch}
        />
      </Box>
      <ContextBox type="SIDE">
        <Box>
          <Typography variant="h4" sx={{ color: 'white' }}>
            user
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: 'white' }}>
            save message
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              backgroundColor: Color.purple,
              width: '100%',
              height: 50,
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
                <Select
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  value={request.method as any}
                  name="method"
                  onChange={handleSelect}
                  sx={{ border: 'none', height: 50 }}
                >
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
              <InputBase
                value={request.url}
                name="url"
                onChange={handleInput}
                sx={{ color: Color.glassGrey }}
                onKeyDown={handleEnter}
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
            pl: 3,
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
              <Typography
                variant="h6"
                sx={{
                  color: tab === 0 ? 'white' : Color.glassGrey,
                }}
                onClick={() => handleTab(0)}
              >
                params
              </Typography>
            </Box>
            {tab === 0 && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {/* <Box
                  sx={{
                    width: 30,
                    height: 1.2,
                    borderRadius: 1,
                    mt: 1,
                    backgroundColor: 'white',
                  }}
                ></Box> */}
              </Box>
            )}
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
              <Typography
                variant="h6"
                sx={{ color: tab === 1 ? 'white' : Color.glassGrey }}
                onClick={() => handleTab(1)}
              >
                auth
              </Typography>
            </Box>
            {tab === 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {/* <Box
                  sx={{
                    width: 30,
                    height: 1.2,
                    borderRadius: 1,
                    mt: 1,
                    backgroundColor: 'white',
                  }}
                ></Box> */}
              </Box>
            )}
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
              <Typography
                variant="h6"
                sx={{ color: tab === 2 ? 'white' : Color.glassGrey }}
                onClick={() => handleTab(2)}
              >
                header
              </Typography>
            </Box>
            {tab === 2 && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {/* <Box
                  sx={{
                    width: 30,
                    height: 1.2,
                    borderRadius: 1,
                    mt: 1,
                    backgroundColor: 'white',
                  }}
                ></Box> */}
              </Box>
            )}
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
              <Typography
                variant="h6"
                sx={{ color: tab === 3 ? 'white' : Color.glassGrey }}
                onClick={() => handleTab(3)}
              >
                body
              </Typography>
            </Box>
            {tab === 3 && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {/* <Box
                  sx={{
                    width: 30,
                    height: 1.2,
                    borderRadius: 1,
                    mt: 1,
                    backgroundColor: 'white',
                  }}
                ></Box> */}
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={{ mt: 3, height: 200, overflowY: 'scroll' }}>
          {tab === 0 && (
            <ParamsTable
              paramsList={paramsList}
              handleParams={handleParams}
              handleClickBtn={handleClickBtn}
            />
          )}
          {tab === 1 && <AuthTable />}
          {tab === 2 && (
            <ParamsTable
              paramsList={paramsList}
              handleParams={handleParams}
              handleClickBtn={handleClickBtn}
            />
          )}
          {tab === 3 && <BodyEditor />}
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ color: Color.glassGrey }}>
            response
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 3,
            height: 300,
            backgroundColor: Color.purple,
            overflowY: 'scroll',
          }}
        >
          <Typography variant="h6" sx={{ color: Color.glassGrey }}>
            {response}
          </Typography>
        </Box>
      </ContextBox>
    </Box>
  )
}

export default ApiPageView
