export interface AddFolderI {
  handleClose: () => void
  handleSubmit: (folderName: string) => void
  loading?: boolean
}