import { t } from 'i18next'
import { ChangeEvent, useState } from 'react'
import { AssociatedAccountI } from '../../interfaces/shareHome/ShareHome.interface'

export const useAddRecipient = () => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [recipients, setRecipients] = useState<AssociatedAccountI[]>([])
  const [hasError, setHasError] = useState(false)
  const [accountTypes, setAccountTypes] = useState(['Member'])
  const types = t('shareHome.accountTypes').split(',')

  const handleSelect = (value: string) => {
    setAccountTypes([value])
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHasError(false)
    setEmail(event.target.value)
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
    accountTypes,
    email,
    errorMessage,
    handleChange,
    hasError,
    handleSelect,
    isUniqueEmail,
    recipients,
    setHasError,
    setRecipients,
    types,
  }
}
