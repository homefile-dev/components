export interface TwoFactorI {
  handleResend: () => void
  handleReset: (code: string) => void
  isLoading: boolean
}
