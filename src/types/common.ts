export type RegisterInputType = {
    email: string
    password: string
  }
  
  export type RegisterResponseType = {
    id: string
    token: string
  }
  
  export type LoginInputType = {
    email: string
    password: string
  }
  
  export type LoginResponseType = {
    token: string
  }
  
  export type UserDataType = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
  
  export type UserDataResponseType = {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: UserDataType[]
    support: {
      url: string
      text: string
    }
  }
  