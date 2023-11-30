// ** Component Imports
import { useLazyGetTableQuery } from '@/services'
import ErdPageView from './erd-page'
import useInput from '@/hooks/useInput'
import { Table } from '@/types/erd'
import { useWorkspace } from '@/context/WorkspaceContext'
import { useEffect } from 'react'

const ErdPage = () => {
  const {
    data: table,
    setData: setTable,
    handleInput,
  } = useInput<Table>({
    id: 0,
    name: '',
    comment: '',
    column: [],
    createUser: {
      nickname: '',
      email: '',
      profile: '',
    },
    modifyUser: {
      nickname: '',
      email: '',
      profile: '',
    },
  })
  const { workspaceId } = useWorkspace()
  const [getTableApi] = useLazyGetTableQuery()

  useEffect(() => {
    getTableApi(workspaceId)
      .unwrap()
      .then((res) => {
        console.log(res.data.findErd)
        setTable(res.data.findErd)
      })
  }, [workspaceId])

  return <ErdPageView />
}

export default ErdPage
