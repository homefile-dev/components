import { SelectItemI } from '../inputs/Select.interface'

export interface CreateDocumentHeaderI {
  handleDateRange: (date: string) => void
  handleSelectHome?: (form: SelectItemI | string) => void | null
  homes?: SelectItemI[] | null
  initialHome?: string | null
}
