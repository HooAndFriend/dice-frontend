// ** React Imports
import { createContext, useContext, useState } from 'react'

// ** Type Imports
import type { AlertType, Alerts } from '@/types/common'

// ** Mui Imports
import { Alert, Box, Typography } from '@mui/material'

// ** Icon Imports
import CloseIcon from '@mui/icons-material/Close'

// ** Hooks Imports
import useInterval from '@/hooks/useInterval'

interface ContextProps {
  handleOpen: (title: string, type?: AlertType) => void
}

const Context = createContext<ContextProps>({} as ContextProps)

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alertContents, setAlertContents] = useState<Alerts[]>([])

  const handleOpen = (content: string, type?: AlertType) => {
    setAlertContents((cur) => [...cur, { content, type: type ? type : 'info' }])
  }

  const handleRemove = (id: number) => {
    setAlertContents((cur) => cur.filter((item, index) => index !== id))
  }

  useInterval(() => {
    if (alertContents.length > 0) {
      setAlertContents((cur) => cur.slice(1))
    }
  }, 3000)

  return (
    <Context.Provider value={{ handleOpen }}>
      {children}
      {alertContents.map((item, index) => (
        <Alert
          severity={item.type}
          sx={{
            position: 'absolute',
            left: '10px',
            bottom: `${(alertContents.length - index - 1) * 55 + 5}px`,
            height: '50px',
            width: '500px',
            flex: 'display',
            alignItems: 'center',
          }}
          variant="filled"
          key={index}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '400px',
            }}
          >
            <Typography variant="body2">{item.content}</Typography>
            <CloseIcon onClick={() => handleRemove(index)} />
          </Box>
        </Alert>
      ))}
    </Context.Provider>
  )
}

export function useAlert() {
  return useContext(Context)
}
