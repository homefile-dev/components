import { SelectItemI } from "../inputs/Select.interface";

export interface SortHeaderI {
  handleSelect: (form: SelectItemI | string) => void
  initialSelectTypeValue?: string
  initialSelectValue?: string
  selectItems?: SelectItemI[]
  selectTypeItems?: string[] | null
}