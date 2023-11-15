// ** React Imports
import { useState } from 'react'

// ** Component Imports
import ApiPageView from './api-page'

// ** Type Imports
import type { Collection, HttpMethod } from '@/types/collection'

// ** Utils Imports
import useInput from '@/hooks/useInput'

export interface ApiProps {
  word: string
  method: HttpMethod | ''
}

const ApiPage = () => {
  const {
    data: searchData,
    handleInit,
    handleInput,
    handleSelect,
  } = useInput<ApiProps>({
    word: '',
    method: '',
  })
  const [selectedCollectionId, setSelectedCollectionId] = useState<number>(0)

  const handleSelectedCollection = (collectionId: number) => {
    setSelectedCollectionId(collectionId)
  }

  return (
    <ApiPageView
      data={CollectionTrash}
      handleSelectedCollection={handleSelectedCollection}
      selectedCollectionId={selectedCollectionId}
      searchData={searchData}
      handleInput={handleInput}
      handleSelect={handleSelect}
    />
  )
}

export default ApiPage

const CollectionTrash: Collection[] = [
  {
    id: 1,
    name: 'user',
    url: '/user',
    item: [
      { id: 1, name: 'save user', method: 'POST', url: '/api/v1/user' },
      { id: 2, name: 'delete user', method: 'DELETE', url: '/api/v1/user' },
    ],
  },
  {
    id: 2,
    name: 'board',
    url: '/board',
    item: [
      { id: 1, name: 'save board', method: 'POST', url: '/api/v1/board' },
      { id: 2, name: 'delete board', method: 'DELETE', url: '/api/v1/board' },
    ],
  },
  {
    id: 3,
    name: 'log',
    url: '/log',
    item: [
      { id: 1, name: 'save log', method: 'POST', url: '/api/v1/log' },
      { id: 2, name: 'delete log', method: 'DELETE', url: '/api/v1/log' },
    ],
  },
  {
    id: 4,
    name: 'message',
    url: '/message',
    item: [
      { id: 1, name: 'save message', method: 'POST', url: '/api/v1/message' },
      {
        id: 2,
        name: 'get message',
        method: 'GET',
        url: '/api/v1/message',
      },
      {
        id: 3,
        name: 'delete message',
        method: 'DELETE',
        url: '/api/v1/message',
      },
      {
        id: 4,
        name: 'update message',
        method: 'PUT',
        url: '/api/v1/message',
      },
    ],
  },
]
