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
  InputBase,
  Box,
  FormControl,
  Select,
  Typography,
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
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
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
                sx={{ width: 50, borderRight: `2px ${Color.purple} solid` }}
                size="small"
              >
                <CheckBox />
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
                <InputBase sx={{ color: Color.glassGrey }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
          <Select
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            name="method"
            sx={{ border: 'none', height: 50 }}
          >
            <MenuItem value="Bearer">Bearer</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: '80%', ml: '5%' }}>
        <TextField variant="outlined" label="value" fullWidth />
      </Box>
    </Box>
  )
}
