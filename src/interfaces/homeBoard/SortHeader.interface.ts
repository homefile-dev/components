import { SelectItemI } from "../inputs/Select.interface";

export interface SortHeaderI {
  handleSelect: (form: SelectItemI) => void
  initialSelectValue?: string
  selectItems?: SelectItemI[]
}