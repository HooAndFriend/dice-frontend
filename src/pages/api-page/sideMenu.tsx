// ** React Imports
import { MouseEvent, ChangeEvent, useMemo, useState } from 'react'

// ** Mui Imports
import { Box, InputBase, Typography } from '@mui/material'

// ** Component Imports
import { CollectionAddIcon, SearchIcon } from '@/components/Icons'
import { CollectionDropDown } from './component'

// ** Type Imports
import type { Collection } from '@/types/collection'

// ** Constant Imports
import Color from '@/constants/color'

// ** Utils Imports
import { getColorFromHttpMethod } from '@/utils/color'

// ** Service Imports
import { useDeleteCollectionMutation, useSaveRequestMutation } from '@/services'

// ** Context Imports
import { useError } from '@/context/ErrorContext'

interface PropsType {
  data: Collection[]
  selectedCollectionId: number
  search: string
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
  handleAddCollection: () => void
  handleSelectedCollection: (collectionId: number) => void
  refetch: () => void
}

const SideMenu = ({
  data,
  selectedCollectionId,
  handleSelectedCollection,
  search,
  handleSearch,
  handleAddCollection,
  refetch,
}: PropsType) => {
  const [collectionId, setCollectionId] = useState<number>(0)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const [deleteCollectionApi] = useDeleteCollectionMutation()
  const [saveRequestApi] = useSaveRequestMutation()

  const { onError } = useError()

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleRightClick = (e: MouseEvent<HTMLDivElement>, id: number) => {
    e.preventDefault()
    setAnchorEl(e.currentTarget)
    setCollectionId(id)
  }

  const handleSaveRequest = (id: number) => {
    saveRequestApi({ collectionId: id, name: 'New Request' })
      .unwrap()
      .then((res) => {
        if (res.statusCode === 200) {
          refetch()
          handleClose()
        }
      })
      .catch((err) => {
        onError('에러', err.data.message)
      })
  }

  const handleDeleteCollection = (id: number) => {
    deleteCollectionApi(id)
      .unwrap()
      .then((res) => {
        if (res.statusCode === 200) {
          refetch()
          handleClose()
        }
      })
      .catch((err) => {
        onError('에러', err.data.message)
      })
  }

  const filterData = useMemo(() => {
    if (search === '') return data
    const arr = data
      .filter((item) => {
        let count = 0

        for (const _ of item.request) {
          if (_.name.includes(search) || _.type.includes(search)) {
            count++
          }
        }

        return count > 0
      })
      .map((item) => {
        const arr = item.request.filter(
          (_) => _.name.includes(search) || _.type.includes(search),
        )

        return { ...item, item: arr }
      })

    return arr
  }, [search])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: Color.purple,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'right', pt: 4, pr: 2 }}>
        {/* <Box
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
        </Box> */}
        <Box
          sx={{
            px: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CollectionAddIcon onClick={handleAddCollection} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 60,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '20%',
            ml: 1,
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
          <InputBase
            sx={{ height: '100%', color: Color.grey }}
            value={search}
            onChange={handleSearch}
            placeholder="Search"
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
                  height: 40 * (item.request.length + 1),
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
                key={item.id}
                onClick={() => handleSelectedCollection(item.id)}
                onContextMenu={(e) => handleRightClick(e, item.id)}
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
                  <CollectionDropDown
                    anchorEl={anchorEl}
                    open={open}
                    handleClose={handleClose}
                    count={item.request.length}
                    collectionId={collectionId}
                    handleDeleteCollection={handleDeleteCollection}
                    handleSaveRequest={handleSaveRequest}
                  />
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
                {item.request.map((_) => (
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      my: 1,
                      pl: 4,
                    }}
                    key={_.id}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 15,
                        borderRadius: 10,
                        backgroundColor: getColorFromHttpMethod(_.type),
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
                        {_.type}
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
