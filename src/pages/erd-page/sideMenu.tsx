// ** Mui Imports
import { Box, TextField } from '@mui/material'
import { TreeView, TreeItem } from '@mui/x-tree-view'
import { SearchIcon, ApiAddIcon, ApiImportIcon } from '@/components/Icons'
import { ArrowDropDown } from '@mui/icons-material'

// ** Constant Imports
import Color from '@/constants/color'

interface PropsType {}

const SideMenu = ({}: PropsType) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: Color.purple,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '8%',
          justifyContent: 'center',
        }}
      >
        <TextField
          variant="standard"
          label="search"
          name="word"
          sx={{ width: '50%' }}
        />
        <Box sx={{ mt: 2.5, mr: 2 }}>
          <SearchIcon />
        </Box>
        <Box sx={{ mt: 2.5, mr: 2 }}>
          <ApiImportIcon />
        </Box>

        <Box sx={{ mt: 2.5 }}>
          <ApiAddIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '90%',
        }}
      >
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ArrowDropDown />}
          defaultExpandIcon={<ArrowDropDown />}
          sx={{
            height: '100%',
            flexGrow: 1,
            maxWidth: 400,
            overflowY: 'auto',
            color: Color.glassGrey,
          }}
        >
          <TreeItem nodeId="1" label="untitled">
            <TreeItem nodeId="2" label="column" />
          </TreeItem>
          <TreeItem nodeId="4" label="untitled1">
            <TreeItem nodeId="5" label="column1" />
            <TreeItem nodeId="6" label="column2" />
            <TreeItem nodeId="7" label="column3" />
          </TreeItem>
          <TreeItem nodeId="8" label="untitled1">
            <TreeItem nodeId="9" label="column1" />
            <TreeItem nodeId="10" label="column2" />
            <TreeItem nodeId="11" label="column3" />
          </TreeItem>
        </TreeView>
      </Box>
    </Box>
  )
}

export default SideMenu
