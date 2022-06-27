export interface FooterButtonI {
  buttonStyle: string
  isDisabled?: boolean
  label: string
  onClick: () => void
}

export interface FooterButtonsI {
  button1?: FooterButtonI
  button2?: FooterButtonI | null
  button3?: FooterButtonI
}
