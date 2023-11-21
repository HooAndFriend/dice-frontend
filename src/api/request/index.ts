import { HttpMethod } from '@/types/collection'
import { Delete, Get, Patch, Post, Put } from '../util'

export const requestService = async (url: string, method: HttpMethod) => {
  switch (method) {
    case 'GET':
      return await Get(url)
    case 'POST':
      return await Post(url)
    case 'DELETE':
      return await Delete(url)
    case 'PUT':
      return await Put(url)
    case 'PATCH':
      return await Patch(url)
  }
}
