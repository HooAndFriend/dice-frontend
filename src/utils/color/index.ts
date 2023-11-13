import Color from '@/constants/color'
import { HttpMethod } from '@/types/collection'

export const getColorFromHttpMethod = (method: HttpMethod) => {
  switch (method) {
    case 'GET':
      return Color.getColor
    case 'POST':
      return Color.postColor
    case 'PUT':
      return Color.putColor
    case 'PATCH':
      return Color.patchColor
    case 'DELETE':
      return Color.deleteColor
  }
}
