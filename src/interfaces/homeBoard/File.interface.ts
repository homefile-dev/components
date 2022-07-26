import { MenuItemI } from "../launchpad/IconMenu.interface"
import { AssociatedAccountI } from '../shareHome/ShareHome.interface';

export interface FileDetailI {
  editing?: boolean
  handleAddRecipient: (form: AssociatedAccountI) => void
  handleEditDescription: (id: string) => void
  handleEditFileName: (id: string) => void
  handleDeleteRecipient: (email: string) => void
  isDocument?: boolean
}

export interface FileI {
  handleClick: (id: string) => void
  handleEditFileName: (id: string) => void
  isNew?: boolean
  isShared?: boolean
  menu: MenuItemI[]
  title: string
  type: string
  updatedAt: string
  uploaded?: boolean
  uploading?: boolean
  _id: string
}
