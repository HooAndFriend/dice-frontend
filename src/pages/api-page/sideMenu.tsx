// ** Mui Imports
import { Box, TextField, Typography } from '@mui/material'

// ** Component Imports
import {
  ApiAddIcon,
  ApiImportIcon,
  CollectionAddIcon,
  SearchIcon,
} from '@/components/Icons'
import Color from '@/constants/color'
import { Collection } from '@/types/collection'
import { getColorFromHttpMethod } from '@/utils/color'

interface PropsType {
  data: Collection[]
  selectedCollectionId: number
  handleSelectedCollection: (collectionId: number) => void
}

const SideMenu = ({
  data,
  selectedCollectionId,
  handleSelectedCollection,
}: PropsType) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: Color.purple,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'right', pt: 3 }}>
        <Box
          sx={{
            px: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ApiImportIcon />
        </Box>
        <Box
          sx={{
            px: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ApiAddIcon />
        </Box>
        <Box
          sx={{
            px: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CollectionAddIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 60,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '20%',
          }}
        >
          <SearchIcon />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <TextField
            variant="standard"
            label="Search"
            sx={{ height: '100%' }}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        {data.map((item) => {
          if (item.id === selectedCollectionId) {
            return (
              <Box
                sx={{
                  my: 2,
                  width: '100%',
                  height: 40 * (item.item.length + 1),
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
                onClick={() => handleSelectedCollection(item.id)}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    backgroundColor: Color.middleGrey,
                    borderRadius: 1,
                    height: 40,
                  }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      ml: 5,
                      borderRadius: 5,
                      border: `solid 3px ${Color.purple}`,
                    }}
                  />
                  <Typography variant="h6" sx={{ color: Color.purple, pl: 2 }}>
                    user
                  </Typography>
                </Box>
                {item.item.map((_) => (
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      my: 1,
                      pl: 7,
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 20,
                        borderRadius: 10,
                        backgroundColor: getColorFromHttpMethod(_.method),
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: 'white', fontSize: 10 }}
                      >
                        {_.method}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      {_.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )
          }
          return (
            <Box
              sx={{
                my: 2,
                width: '100%',
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => handleSelectedCollection(item.id)}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    ml: 5,
                    borderRadius: 5,
                    border: 'solid 3px white',
                    opacity: 0.5,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    pl: 2,
                    opacity: 0.5,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default SideMenu
