import { t } from 'i18next'
import { ChangeEvent, useState } from 'react'
import { AssociatedAccountI } from '../../interfaces/shareHome/ShareHome.interface'

export const useAddRecipient = () => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [recipients, setRecipients] = useState<AssociatedAccountI[]>([])
  const [hasError, setHasError] = useState(false)
  const [accountType, setAccountType] = useState('Member')
  const types = t('shareHome.accountTypes').split(',')

  const handleSelect = (value: string) => {
    setAccountType(value)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHasError(false)
    setEmail(event.target.value)
  }

  const handleAddLocal = () => {
    setRecipients([...recipients, { accountType, user: { email } }])
    setEmail('')
  }

  const handleRemoveLocal = (index: number) => {
    setRecipients(recipients.filter((_, i) => i !== index))
  }

  const isUniqueEmail = (email: string) => {
    const isUnique = recipients.every(
      (recipient) => recipient.user.email !== email
    )
    if (!isUnique) {
      setHasError(true)
      setErrorMessage(t('addRecipient.errorDuplicate'))
    }
    return isUnique
  }

  return {
    accountType,
    email,
    errorMessage,
    handleAddLocal,
    handleChange,
    hasError,
    handleRemoveLocal,
    handleSelect,
    isUniqueEmail,
    recipients,
    setHasError,
    setRecipients,
    types,
  }
}
