// ** Mui Imports
import { Box, TextField, Typography } from '@mui/material'

// ** Constant Imports
import Color from '@/constants/color'

// ** Component Imports
import { ContextBox } from '@/components/ContentBox'
import SideMenu from './sideMenu'

// ** ReactFlow Imports
import ReactFlow, {
  Background,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from 'reactflow'

export const Table = () => {
  return (
    <Box sx={{ width: 500, backgroundColor: 'white' }}>
      <TextField sx={{ width: '100%' }} defaultValue="untitled" />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          backgroundColor: Color.lightGrey,
        }}
      >
        <Typography sx={{ ml: 3, mr: 6 }}>PK</Typography>
        <Typography sx={{ mr: 8 }}>column</Typography>
        <Typography sx={{ mr: 8 }}>null</Typography>
        <Typography sx={{ mr: 5 }}>data_type</Typography>
        <Typography sx={{ mr: 5 }}>comment</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: 120 }}></Box>
        <TextField />
        <TextField />
        <TextField />
        <TextField />
      </Box>
    </Box>
  )
}

const nodeTypes = {
  dragHandleNode: Table,
}

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: <Table /> },
  { id: '2', position: { x: 0, y: 100 }, data: <Table /> },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

const ErdPageView = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

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
        <SideMenu />
      </Box>
      <ContextBox type="SIDE">
        <Box sx={{ width: '100%', height: '100%' }}>
          {/* <Table /> */}
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeTypes}
            >
              <Background gap={12} size={1} />
            </ReactFlow>
          </ReactFlowProvider>
        </Box>
      </ContextBox>
    </Box>
  )
}

export default ErdPageView
