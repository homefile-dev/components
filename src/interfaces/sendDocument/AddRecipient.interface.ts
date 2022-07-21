import { AssociatedAccountI } from '../shareHome/ShareHome.interface'

export interface RecipientTabI {
  handleAdd: (form: AssociatedAccountI) => void
  handleRemove: (email: string) => void
  hasTitle?: boolean
  isDocument?: boolean
  loading?: boolean
  recipients?: AssociatedAccountI[]
}
