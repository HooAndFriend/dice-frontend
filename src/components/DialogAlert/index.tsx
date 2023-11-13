import Color from '@/constants/color'
import { Backdrop, BackdropProps, Box, Button, Typography } from '@mui/material'
import { ChangeEvent } from 'react'

interface PropTypes extends BackdropProps {
  title: string
  type: 'confirm' | 'alert'
  placeholder?: string
  value?: string
  handleValue?(e: ChangeEvent<HTMLInputElement>): void
  action?(): void
  onClose(): void
}

export function DialogAlert({
  title,
  type,
  placeholder,
  value,
  handleValue,
  action,
  onClose,
  ...props
}: PropTypes) {
  return (
    <Backdrop onClick={onClose} {...props} sx={{ zIndex: 999 }}>
      <Box
        sx={{
          width: 488,
          padding: '32px',
          background: '#f7f8fa',
          borderRadius: '8px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography sx={{ fontSize: 22, fontWeight: 700, color: '#000000' }}>
            {title}
          </Typography>
        </Box>
        {type === 'alert' ? (
          <Button
            sx={{
              backgroundColor: Color.green,
              color: 'white',
              width: '100%',
            }}
            onClick={onClose}
          >
            확인
          </Button>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              sx={{
                width: 202,
              }}
              onClick={action ? action : onClose}
            >
              확인
            </Button>
            <Button
              sx={{
                width: 202,
              }}
              onClick={onClose}
            >
              취소
            </Button>
          </Box>
        )}
      </Box>
    </Backdrop>
  )
}
