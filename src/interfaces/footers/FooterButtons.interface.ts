export interface FooterButtonI {
  buttonStyle: string
  isDisabled?: boolean
  label: string
  onClick: () => void
  width?: string
}

export interface FooterButtonsI {
  button1?: FooterButtonI
  button2?: FooterButtonI | null
  button3?: FooterButtonI
}
