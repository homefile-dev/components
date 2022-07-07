import { SelectItemI } from "../inputs/Select.interface";
import { MenuItemI } from "../launchpad/IconMenu.interface";

export interface FolderI {
  _id: string
  name: string
  public: boolean
  home?: string
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