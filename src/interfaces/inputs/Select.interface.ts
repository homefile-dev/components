export interface SelectItemI {
  _id: string
  name: string
}

export interface SelectI {
  handleClick: (form: SelectItemI | string) => void
  initailValue: string
  isDisabled?: boolean
  items: SelectItemI[] | string[]
  width?: string
}
