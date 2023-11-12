import { Box } from '@mui/material'

interface PropsType {
  image: string
  alt: string
  borderRadius?: number | string
  width?: number | string
  height?: number | string
}

const ImageBox = ({ image, width, height, alt, borderRadius }: PropsType) => {
  return (
    <Box sx={{ width, height, borderRadius, overflow: 'hidden' }}>
      {image !== '' && (
        <img src={image} width={width} height={height} alt={alt} />
      )}
    </Box>
  )
}

export default ImageBox
