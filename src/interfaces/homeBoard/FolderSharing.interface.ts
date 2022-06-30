import { SelectItemI } from "../inputs/Select.interface";
import { MenuItemI } from "../launchpad/IconMenu.interface";

export interface FolderI {
  deleted: boolean
  needsReview?: boolean
  reviewed?: boolean
  status?: string
  subTypes: string[]
  type: string
}

export interface FolderSharingI {
  folders?: FolderI[] | null
  handleAddNewFolder: () => void
  handleFolderClick: (folder: FolderI) => void
  handleSelect: (form: SelectItemI | string) => void
  initialSelectItem: SelectItemI
  menuItems?: MenuItemI[]
  selectItems: SelectItemI[]
}