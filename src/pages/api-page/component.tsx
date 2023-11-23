import Color from '@/constants/color'
import { CheckBox } from '@mui/icons-material'
import {
  TableContainer,
  TableBody,
  Table,
  Menu,
  MenuItem,
  TextField,
  styled,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  InputBase,
} from '@mui/material'

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
]

export function BasicTable() {
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
            ></TableCell>
            <TableCell
              align="left"
              sx={{
                color: Color.glassGrey,
                borderRight: `2px ${Color.purple} solid`,
              }}
            >
              key
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: Color.glassGrey,
                borderRight: `2px ${Color.purple} solid`,
              }}
            >
              value
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: Color.glassGrey,
                borderRight: `2px ${Color.purple} solid`,
              }}
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                color: 'black',
                border: `2px ${Color.purple} solid`,
              }}
            >
              <TableCell
                align="center"
                sx={{ width: 100, borderRight: `2px ${Color.purple} solid` }}
              >
                <CheckBox />
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  width: 300,
                  borderRight: `2px ${Color.purple} solid`,
                }}
              >
                <InputBase sx={{ color: Color.glassGrey }} />
              </TableCell>
              <TableCell
                align="left"
                sx={{ width: 300, borderRight: `2px ${Color.purple} solid` }}
              >
                <InputBase sx={{ color: Color.glassGrey }} />
              </TableCell>
              <TableCell align="left">
                <InputBase sx={{ color: Color.glassGrey }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
