// ** React Imports
import { createContext, useContext, useState } from 'react'

// ** Type Imports
import type { AlertType, Alerts } from '@/types/common'

// ** Mui Imports
import { Alert } from '@mui/material'

interface ContextProps {
  handleOpen: (title: string, type?: AlertType) => void
}

const Context = createContext<ContextProps>({} as ContextProps)

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alertContents, setAlertContents] = useState<Alerts[]>([])

  const handleOpen = (content: string, type?: AlertType) => {
    setAlertContents((cur) => [...cur, { content, type: type ? type : 'info' }])
  }

  return (
    <Context.Provider value={{ handleOpen }}>
      {children}
      {alertContents.map((item, index) => (
        <Alert
          severity={item.type}
          sx={{
            minWidth: 500,
            position: 'absolute',
            left: '10px',
            bottom: `${index * 55 + 5}px`,
            height: '50px',
            flex: 'display',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          variant="filled"
          key={index}
        >
          {item.content}
        </Alert>
      ))}
    </Context.Provider>
  )
}

export function useAlert() {
  return useContext(Context)
}
