import { Box } from '@mui/material'

interface PropsType {
  image: string
  alt: string
  width?: number | string
  height?: number | string
}

const ImageBox = ({ image, width, height, alt }: PropsType) => {
  return (
    <Box sx={{ width, height }}>
      {image !== '' && (
        <img src={image} width={width} height={height} alt={alt} />
      )}
    </Box>
  )
}

export default ImageBox
