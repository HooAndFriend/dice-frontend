// ** Constant Imports
import Color from '@/constants/color'
import { ApiParams } from '@/types/collection'

// ** Mui Imports
import {
  TableContainer,
  Checkbox,
  TableBody,
  Table,
  Menu,
  MenuItem,
  TextField,
  styled,
  TableCell,
  TableHead,
  TableRow,
  InputBase,
  Box,
  FormControl,
  Select,
  InputLabel,
  Typography,
} from '@mui/material'
import { ChangeEvent } from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

// ** Json Imports
import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/en'

export const InputTextField = styled(TextField)({
  '& label': {
    color: 'var(--sub-text)',
  },
  '& label.Mui-focused': {
    color: 'var(--primary)',
  },
  '& label.Mui-error': {
    color: '#d32f2f',
  },
  '& .MuiOutlinedInput-root': {
    color: 'var(--text)',
    '& fieldset': {
      borderColor: 'var(--sub-text)',
    },
  },
})

interface PropsType {
  anchorEl: HTMLElement | null
  open: boolean
  count: number
  handleClose: () => void
}

export const CollectionDropDown = ({
  anchorEl,
  handleClose,
  open,
  count,
}: PropsType) => {
  return (
    <Menu
      anchorEl={anchorEl}
      onClose={handleClose}
      open={open}
      sx={{
        top: `${-45 * count}px`,
        left: '50px',
      }}
    >
      <MenuItem>Add Request</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Duplicate</MenuItem>
    </Menu>
  )
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
]

interface ParamsTablePropsType {
  paramsList: ApiParams[]
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void
  handleClickBtn: () => void
}

export function ParamsTable({
  paramsList,
  handleParams,
  handleClickBtn,
}: ParamsTablePropsType) {
  return (
    <TableContainer>
      <Table>
        <TableHead
          sx={{
            backgroundColor: Color.smallPurple,
            border: `2px ${Color.purple} solid`,
          }}
        >
          <TableRow>
            <TableCell
              sx={{ borderRight: `2px ${Color.purple} solid` }}
              size="small"
            ></TableCell>
            <TableCell
              align="left"
              sx={{
                color: Color.glassGrey,
                borderRight: `2px ${Color.purple} solid`,
              }}
              size="small"
            >
              key
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: Color.glassGrey,
                borderRight: `2px ${Color.purple} solid`,
              }}
              size="small"
            >
              value
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: Color.glassGrey,
                borderRight: `2px ${Color.purple} solid`,
              }}
              size="small"
            >
              description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            backgroundColor: Color.smallPurple,
            border: `2px ${Color.purple} solid`,
          }}
        >
          {paramsList.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                color: 'black',
                border: `2px ${Color.purple} solid`,
              }}
            >
              <TableCell
                align="center"
                sx={{ width: 50, borderRight: `2px ${Color.purple} solid` }}
                size="small"
              >
                <Checkbox checked={row.isCheck} />
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  width: 300,
                  borderRight: `2px ${Color.purple} solid`,
                }}
                size="small"
              >
                <InputBase sx={{ color: Color.glassGrey }} />
              </TableCell>
              <TableCell
                align="left"
                sx={{ width: 300, borderRight: `2px ${Color.purple} solid` }}
                size="small"
              >
                <InputBase sx={{ color: Color.glassGrey }} />
              </TableCell>
              <TableCell align="left" size="small">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <InputBase sx={{ color: Color.glassGrey, width: '90%' }} />
                  <RemoveCircleOutlineIcon />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          backgroundColor: Color.purple,
          width: '100%',
          height: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 1,
        }}
        onClick={handleClickBtn}
      >
        <Typography>+</Typography>
      </Box>
    </TableContainer>
  )
}

export const AuthTable = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ width: '15%' }}>
        <FormControl fullWidth>
          <InputLabel id="auth">Auth</InputLabel>
          <Select
            labelId="auth"
            name="auth"
            sx={{ border: 'none', height: 50 }}
            label="auth"
          >
            <MenuItem value="">No Auth</MenuItem>
            <MenuItem value="Bearer">Bearer</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: '80%', ml: '5%' }}>
        <InputBase sx={{ backgroundColor: Color.glassGrey, width: '80%' }} />
      </Box>
    </Box>
  )
}

export const JsonEditor = () => {
  return <JSONInput id="a_unique_id" locale={locale} height="550px" />
}

export const BodyEditor = () => {
  return (
    <Box
      sx={{
        mt: 3,
        height: 300,
        backgroundColor: Color.purple,
        overflowY: 'scroll',
      }}
    >
      <JsonEditor />
    </Box>
  )
}
