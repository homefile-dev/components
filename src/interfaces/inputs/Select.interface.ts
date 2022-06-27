export interface SelectItemI {
  name: string
  _id: string
}

export interface SelectI {
  handleClick: (form: SelectItemI) => void
  initailValue: string
  isDisabled?: boolean
  items: SelectItemI[]
}
