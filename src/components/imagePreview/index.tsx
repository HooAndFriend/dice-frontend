// ** React Imports
import { ChangeEvent, useEffect, useRef } from 'react'

// ** Mui Imports
import { Box } from '@mui/material'

// ** Aws Imports
// import AWS from 'aws-sdk'

interface PropsType {
  image: string
  boxColor?: string
  borderRadius?: string | number
  setPath: (e: string) => void
}

const ImagePreview = ({
  setPath,
  image,
  boxColor,
  borderRadius,
}: PropsType) => {
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
      // const s3 = new AWS.S3({
      //   accessKeyId: import.meta.env.VITE_MINIO_ACCESS_KEY,
      //   secretAccessKey: import.meta.env.VITE_MINIO_SECRET_KEY,
      //   endpoint: import.meta.env.VITE_MINIO_ENDPOINT,
      //   s3ForcePathStyle: true,
      //   signatureVersion: 'v4',
      // })
      // const params = {
      //   Bucket: import.meta.env.VITE_MINIO_BUCKET_NAME,
      //   Key: file.name,
      //   Body: file,
      // }
      // s3.upload(params, (err, data) => {
      //   if (err) {
      //     console.error(err)
      //     return
      //   }
      //   setPath(data.Location)
      // })
    }
  }

  useEffect(() => {
    if (image === '') {
      clearInput()
    }
  }, [image])

  return (
    <Box
      onClick={click}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius,
      }}
    >
      {image !== '' ? (
        <img
          src={image}
          alt="Preview"
          style={{ width: '90%', height: '90%', borderRadius }}
        />
      ) : (
        <Box
          sx={{
            width: '90%',
            height: '90%',
            backgroundColor: boxColor ? boxColor : '',
            borderRadius,
          }}
        />
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
