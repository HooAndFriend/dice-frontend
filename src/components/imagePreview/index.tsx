// ** React Imports
import { ChangeEvent, useEffect, useRef } from 'react'

// ** Mui Imports
import { Box } from '@mui/material'

// ** Utils Imports
import { uploadImage } from '@/utils/firebase-upload'

interface PropsType {
  image: string
  setPath: (e: string) => void
}

const ImagePreview = ({ setPath, image }: PropsType) => {
  const inputRef = useRef<HTMLInputElement | any>(null)

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = null
    }
  }

  const click = () => {
    if (inputRef) {
      inputRef.current.click()
    }
  }

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const response = await uploadImage(file)
      if (response) {
        setPath(response)
      }
    }
  }

  useEffect(() => {
    if (image === '') {
      clearInput()
    }
  }, [image])

  return (
    <Box onClick={click}>
      {image ? (
        <img
          src={image}
          alt="Preview"
          style={{ width: '100%', height: '100%', border: 12 }}
        />
      ) : (
        <Box sx={{ border: 12, width: '100%', height: '100%' }} />
      )}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </Box>
  )
}

export default ImagePreview
