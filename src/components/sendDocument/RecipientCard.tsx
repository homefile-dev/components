import { Container, Stack } from '@chakra-ui/react'
import { AssociatedAccountI } from '../../interfaces/shareHome/ShareHome.interface'
import { RecipientContent } from './RecipientContent'
import { RecipientHeader } from './RecipientHeader'

interface RecipientCardI {
  hasTitle?: boolean
  isDocument?: boolean
  recipient: AssociatedAccountI
}

export const RecipientCard = ({
  hasTitle = true,
  isDocument = false,
  recipient: { accountTypes, user },
}: RecipientCardI) => {
  const { firstName, lastName, phone, email } = user
  const oneAccountType = accountTypes.length === 1

  return (
    <Container p="base">
      <Stack spacing="4">
        {hasTitle && (
          <RecipientHeader
            accountType={
              oneAccountType ? accountTypes[0] : accountTypes.join(', ')
            }
            isDocument={isDocument}
          />
        )}
        {user && (
          <RecipientContent
            email={email}
            firstName={firstName}
            lastName={lastName}
            phone={phone}
          />
        )}
      </Stack>
    </Container>
  )
}

export default RecipientCard
