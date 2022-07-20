export interface ShareFormI {
  accountType: string
  email: string
}

export interface AssociatedAccountI {
  email: string
  firstName?: string
  lastName?: string
  phone?: string
}

export interface ShareHomeI {
  associatedAccounts: AssociatedAccountI[]
  handleAdd: (form: ShareFormI) => void
  handleShowAccounts: () => void
}
