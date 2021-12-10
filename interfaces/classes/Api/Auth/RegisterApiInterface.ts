export interface RegisterResponseInterface {
  data: {
    type: string,
    token: string
  }
}

export interface RegisterStorePayloadInterface {
  name: string,
  email: string,
  password: string
}
