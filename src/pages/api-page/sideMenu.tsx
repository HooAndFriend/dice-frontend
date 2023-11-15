// ** React Imports
import { ChangeEvent, useMemo } from 'react'

// ** Mui Imports
import { Box, SelectChangeEvent, TextField, Typography } from '@mui/material'

// ** Component Imports
import {
  ApiAddIcon,
  ApiImportIcon,
  CollectionAddIcon,
  SearchIcon,
} from '@/components/Icons'

// ** Type Imports
import type { Collection } from '@/types/collection'
import type { ApiProps } from '.'

// ** Constant Imports
import Color from '@/constants/color'

// ** Utils Imports
import { getColorFromHttpMethod } from '@/utils/color'

interface PropsType {
  data: Collection[]
  selectedCollectionId: number
  searchData: ApiProps
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleSelect: (e: SelectChangeEvent<HTMLInputElement>) => void
  handleSelectedCollection: (collectionId: number) => void
}

const SideMenu = ({
  data,
  selectedCollectionId,
  handleSelectedCollection,
  searchData,
  handleInput,
  handleSelect,
}: PropsType) => {
  const filterData = useMemo(() => {
    if (searchData.word === '') return data
    const arr = data
      .filter((item) => {
        let count = 0

        for (const _ of item.item) {
          if (
            _.name.includes(searchData.word) ||
            _.method.includes(searchData.word)
          ) {
            count++
          }
        }

        return count > 0
      })
      .map((item) => {
        const arr = item.item.filter(
          (_) =>
            _.name.includes(searchData.word) ||
            _.method.includes(searchData.word),
        )

        return { ...item, item: arr }
      })

    return arr
  }, [searchData])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: Color.purple,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'right', pt: 4, pr: 2 }}>
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
            value={searchData.word}
            name="word"
            onChange={handleInput}
          />
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        {filterData.map((item) => {
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
                key={item.id}
                onClick={() => handleSelectedCollection(item.id)}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: 40,
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: Color.middleGrey,
                      width: '90%',
                      display: 'flex',
                      height: '100%',
                      borderRadius: 1,
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        ml: 2,
                        borderRadius: 5,
                        border: `solid 3px ${Color.purple}`,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ color: Color.purple, pl: 2 }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
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
                    key={_.id}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 15,
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
                        sx={{ color: 'white', fontSize: 8 }}
                      >
                        {_.method}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: Color.glassGrey }}>
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
              key={item.id}
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
                    ml: 4,
                    borderRadius: 5,
                    border: `solid 3px ${Color.glassGrey}`,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: Color.glassGrey,
                    pl: 2,
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
