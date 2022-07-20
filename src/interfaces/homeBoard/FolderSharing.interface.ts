import { SelectItemI } from "../inputs/Select.interface";
import { MenuItemI } from "../launchpad/IconMenu.interface";
import React, { ReactElement } from "react"

export interface FolderI {
  _id: string
  name: string
  public: boolean
  home?: string
  icon?: string
}

export interface IconI {
  folder: string
  documents: string
  project: string
  default: string
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