export interface UserProps {
  id: number,
  name: string,
  email: string
}

export type UserReturn = UserProps | null