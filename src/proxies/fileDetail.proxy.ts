import { proxy } from 'valtio'

interface FileDetailI {
  addedAt: string
  addedBy: string
  description?: string
  editing?: boolean
  _id: string
  icon: string
  name: string
}

export const fileDetailProxy = proxy<FileDetailI>({
  addedAt: '',
  addedBy: '',
  description: '',
  editing: false,
  _id: '',
  icon: '',
  name: '',
})
