// ** React Imports
import { useState, KeyboardEvent, ChangeEvent, useMemo } from 'react'

// ** Component Imports
import ApiPageView from './api-page'

// ** Type Imports
import type { ApiParams, Collection, HttpMethod } from '@/types/collection'

// ** Utils Imports
import useInput from '@/hooks/useInput'
import { isUndefined } from 'lodash'
import { requestService } from '@/api'

// ** Service Imports
import { useGetCollectionListQuery } from '@/services'

// ** Context Imports
import { useWorkspace } from '@/context/WorkspaceContext'

export interface requestProps {
  url: string
  method: HttpMethod
}

const ApiPage = () => {
  const [paramsList, setParamsList] = useState<ApiParams[]>([
    {
      id: 1,
      key: '',
      value: '',
      description: '',
      isCheck: false,
    },
  ])

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
  const [tab, setTab] = useState<number>(0)

  const [response, setResponse] = useState<any>()

  const { workspaceId } = useWorkspace()

  const { data, refetch } = useGetCollectionListQuery(workspaceId)

  const collectionList = useMemo(
    () => (isUndefined(data) ? [] : data.data.data),
    [data, search],
  )

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

  const handleParams = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('Hello')
  }

  const handleClickBtn = () => {
    setParamsList((cur) => [
      ...cur,
      {
        id: cur.length + 1,
        key: '',
        value: '',
        description: '',
        isCheck: false,
      },
    ])
  }

  const handleTab = (tab: number) => setTab(tab)
  const handleAddCollection = () => {
    // setCollectionList((cur) => [
    //   ...cur,
    //   {
    //     id: cur.length + 1,
    //     name: 'New Collection',
    //     url: '/',
    //     item: [],
    //   },
    // ])
  }

  return (
    <ApiPageView
      data={collectionList}
      selectedCollectionId={selectedCollectionId}
      request={request}
      search={search}
      response={response}
      tab={tab}
      handleInput={handleInput}
      handleSelect={handleSelect}
      handleAddCollection={handleAddCollection}
      handleEnter={handleEnter}
      handleSearch={handleSearch}
      handleSelectedCollection={handleSelectedCollection}
      handleTab={handleTab}
      handleParams={handleParams}
      paramsList={paramsList}
      handleClickBtn={handleClickBtn}
    />
  )
}

export default ApiPage
