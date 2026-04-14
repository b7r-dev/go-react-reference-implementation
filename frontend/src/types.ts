export interface User {
  id: number
  name: string
  email: string
  role: string
  created_at: string
}

export interface Quote {
  id: number
  text: string
  author: string
}

export interface HelloData {
  message: string
  timestamp: string
  version: string
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}
