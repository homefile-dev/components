
export interface ShareFormI {
 email: string
 accountType: 'Manager' | 'Member' | 'Contributor'
}

export interface AssociatedAccountI {
  email: string
  firstName?: string
  lastName?: string
  phone?: string
}

export interface ShareHomeI {
  handleAdd: (form: ShareFormI) => void
  handleShowAccounts: () => void
  associatedAccounts: AssociatedAccountI[]
}