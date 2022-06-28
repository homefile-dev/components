export interface SelectItemI {
  _id: string
  name: string
}

export interface SelectI {
  handleClick: (form: SelectItemI) => void
  initailValue: string
  isDisabled?: boolean
  items: SelectItemI[]
}
