export interface LoginResponseInterface {
  data: {
    type: string,
    token: string
  }
}

export interface LoginStorePayloadInterface {
  email: string,
  password: string
}
