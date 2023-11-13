// ** React Imports
import { DialogAlert } from '@/components/DialogAlert'
import { createContext, useContext, useState } from 'react'

interface ContextProps {
  handleOpen: (title: string) => void
}

const Context = createContext<ContextProps>({} as ContextProps)

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false)
  const [alertContents, setAlertContents] = useState<{
    title: string
    type: 'alert' | 'confirm'
  }>({ title: '', type: 'alert' })

  const handleOpen = (title: string, type?: 'alert' | 'confirm') => {
    setAlertContents({ title, type: type ? type : 'alert' })
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  return (
    <Context.Provider value={{ handleOpen }}>
      {children}

      <DialogAlert
        open={open}
        type={alertContents.type}
        onClose={handleClose}
        title={alertContents.title}
      />
    </Context.Provider>
  )
}

export function useDialog() {
  return useContext(Context)
}
