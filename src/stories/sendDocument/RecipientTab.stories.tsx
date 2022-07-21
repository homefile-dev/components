import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { RecipientTab } from '../../components/sendDocument'
import { recipientsDb } from '../../helpers/sendDocument/AddRecipient.helper'
import { AssociatedAccountI } from '../../interfaces/shareHome/ShareHome.interface'


export default {
  title: 'Components/SendDocument',
  component: RecipientTab,
} as ComponentMeta<typeof RecipientTab>

const Template: ComponentStory<typeof RecipientTab> = () => {
  const [recipients, setRecipients] =
    useState<AssociatedAccountI[]>(recipientsDb)
  return (
    <Box w={['full', 'md']}>
      <RecipientTab
        handleAdd={(form: AssociatedAccountI) => {
          setRecipients([...recipients, form])
        }}
        handleRemove={(email: string) =>
          setRecipients(
            recipients.filter((recipient) => recipient.user.email !== email)
          )
        }
        loading={false}
        recipients={recipients}
      />
    </Box>
  )
}

export const RecipientTabComponent = Template.bind({})
