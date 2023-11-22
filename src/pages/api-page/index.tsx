// ** React Imports
import { useState, KeyboardEvent, ChangeEvent } from 'react'

// ** Component Imports
import ApiPageView from './api-page'

// ** Type Imports
import type { Collection, HttpMethod } from '@/types/collection'

// ** Utils Imports
import useInput from '@/hooks/useInput'
import { requestService } from '@/api'

export interface requestProps {
  url: string
  method: HttpMethod
}

const ApiPage = () => {
  const [collectionList, setCollectionList] =
    useState<Collection[]>(CollectionTrash)

  const handleAddCollection = () => {
    setCollectionList((cur) => [
      ...cur,
      {
        id: cur.length + 1,
        name: 'New Collection',
        url: '/',
        item: [],
      },
    ])
  }

  const {
    data: request,
    handleInit,
    handleInput,
    handleSelect,
  } = useInput<requestProps>({
    url: '',
    method: 'GET',
  })

  const [search, setSearch] = useState<string>('')
  const [selectedCollectionId, setSelectedCollectionId] = useState<number>(0)

  const [response, setResponse] = useState<any>()

  const handleSelectedCollection = (collectionId: number) => {
    setSelectedCollectionId(collectionId)
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      try {
        const { data } = await requestService(request.url, request.method)
        setResponse(data)
      } catch (error: any) {
        setResponse(error.message)
      }
    }
  }

  return (
    <ApiPageView
      data={collectionList}
      handleSelectedCollection={handleSelectedCollection}
      selectedCollectionId={selectedCollectionId}
      request={request}
      handleInput={handleInput}
      handleSelect={handleSelect}
      handleAddCollection={handleAddCollection}
      handleEnter={handleEnter}
      handleSearch={handleSearch}
      search={search}
      response={response}
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
