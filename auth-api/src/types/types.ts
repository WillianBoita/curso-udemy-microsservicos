export interface UserProps {
  id: number,
  name: string,
  email: string,
  password: string
}

export type UserReturn = UserProps | null