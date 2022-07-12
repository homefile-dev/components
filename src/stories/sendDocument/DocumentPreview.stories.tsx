import { Drawer, useDisclosure } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect } from 'react'
import DocumentPreview from '../../components/sendDocument/DocumentPreview'
import { documentDB } from '../../helpers/sendDocument/DocumentPreview.helper'

export default {
  title: 'Components/SendDocument',
  component: DocumentPreview,
} as ComponentMeta<typeof DocumentPreview>

const Template: ComponentStory<typeof DocumentPreview> = () => {
  const { companyInfo, date, document, form, home, images, userInfo } =
    documentDB
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    onOpen()
  }, [])

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
      <DocumentPreview
        companyInfo={companyInfo}
        date={date}
        document={document}
        form={form}
        handleClose={onClose}
        handleSend={() => {}}
        home={home}
        images={images}
        userInfo={userInfo}
      />
    </Drawer>
  )
}

export const DocumentPreviewComponent = Template.bind({})
