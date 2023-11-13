export interface Collection {
  id: number
  name: string
  url: string
  item: ApiItem[]
}

export interface ApiItem {
  id: number
  method: HttpMethod
  url: string
  name: string
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
