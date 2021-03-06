import { FileI } from './File.interface'
import { FolderI } from './FolderSharing.interface'
import { ImageDBI } from '../sendDocument/AddMedia.interface'
import { SelectItemI } from '../inputs/Select.interface'
import { AssociatedAccountI } from '../shareHome/ShareHome.interface';

export interface FolderDetailI {
  addedBy: string
  children?: JSX.Element[] | JSX.Element | Element | Element[]
  editing?: boolean
  files: FolderFileI[]
  folder: FolderI
  handleAddRecipient: (form: AssociatedAccountI) => void
  handleClose: () => void
  handleDeleteFile: (id: string) => void
  handleDeleteFolder: (id: string) => void
  handleDeleteRecipient: (email: string) => void
  handleEditDescription: (file: FolderFileI) => void
  handleEditFileName: (file: FolderFileI) => void
  handleEditFolderName: (folder: FolderI) => void
  handleFileClick: (file: FolderFileI) => void
  handleFilter: (filter: SelectItemI | string) => void
  handleOpenFile: (file: FolderFileI) => void
  handleSharedFilter: (checked: boolean) => void
  handleUpload: (files: FolderFileI[]) => void
  loading?: boolean
  panelSize?: string
  recipients?: AssociatedAccountI[]
  uploading: boolean
  isDocument?: boolean
}

interface FileDBI {
  _id: string
  fileName: string
  extension: string
  originalName: string
  bucketName: string
  description: string
  collectionName: string
  docId: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface FolderFileI {
  description?: string
  extension?: string
  file?: File | FileDBI
  _id: string
  isNew?: boolean
  isShared?: boolean
  imageUrl?: string
  title: string
  type: string
  uploaded?: boolean
  updatedAt: string
}

export interface ReportsI {
  _id: string
  description: string
  user: string
  home: string
  title: string
  report: any[]
  type: string
  subType: string
  needsReview: boolean
  reviewed: boolean
  images: ImageDBI[]
  status: string
  deleted: boolean
  createdAt: string
  updatedAt: string
  __v: number
  file?: FileDBI
}

export interface MapFileI {
  files: FolderFileI[] | File[] | FileI[] | ReportsI[]
  isLocal?: boolean
}
