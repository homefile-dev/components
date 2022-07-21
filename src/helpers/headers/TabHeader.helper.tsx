import { t } from 'i18next'
import { DetailTab } from '../../components/sendDocument/DetailsTab'
import { AddMedia } from '../../components/sendDocument/AddMedia'
import { imagesDb } from '../sendDocument/AddMedia.helper'
import { useEffect, useState } from 'react'
import { RecipientTab } from '../../components/sendDocument/RecipientTab'
import { recipientsDb } from '../sendDocument/AddRecipient.helper'
import { AssociatedAccountI } from '../../interfaces/shareHome/ShareHome.interface'

const AddMediaContent = () => {
  const [isUploading, setIsUploading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsUploading(true)
    }, 20000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsUploading(false)
    }, 25000)
  }, [])

  return (
    <AddMedia
      handleDelete={(image) => image}
      handleEdit={(image) => image}
      handleUpload={(images) => images}
      images={imagesDb}
      uploading={isUploading}
    />
  )
}

export const AddRecipientContent = () => {
  const [recipients, setRecipients] =
    useState<AssociatedAccountI[]>(recipientsDb)
  return (
    <RecipientTab
      handleAdd={(form: AssociatedAccountI) => {
        setRecipients([...recipients, form])
      }}
      handleRemove={(email: string) =>
        setRecipients(
          recipients.filter((recipient) => recipient.user.email !== email)
        )
      }
      isDocument
      loading={false}
      recipients={recipients}
    />
  )
}

export const createDocList = [
  {
    label: t('createDocument.tabs.tab1'),
    component: <DetailTab />,
  },
  {
    label: t('createDocument.tabs.tab2'),
    component: <AddMediaContent />,
  },
  {
    label: t('createDocument.tabs.tab3'),
    component: <AddRecipientContent />,
  },
]
