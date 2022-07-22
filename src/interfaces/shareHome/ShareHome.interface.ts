export interface AssociatedAccountI {
  accountTypes: string[]
  user: UserI
}

export interface UserI {
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  _id?: string
}

export interface ShareHomeI {
  associatedAccounts: AssociatedAccountI[]
  handleAdd: (form: AssociatedAccountI) => void
  handleShowAccounts: () => void
}