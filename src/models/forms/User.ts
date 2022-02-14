type User = {
  name: string,
  email: string,
  password: string,
  occupation: string,
}

const userInitialState = {
  name: '',
  email: '',
  password: '',
  occupation: '',
}

export { userInitialState }
export type { User }
