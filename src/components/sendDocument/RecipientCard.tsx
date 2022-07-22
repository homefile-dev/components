import { Container, Flex, Stack, Image, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { Recipient } from '../../assets/images'
import { AssociatedAccountI } from '../../interfaces/shareHome/ShareHome.interface'
import { RecipientContent } from './RecipientContent'
import {Contributor, Homeowner, Manager, Member} from '../../assets/images'

interface RecipientCardI {
  hasTitle?: boolean
  isDocument?: boolean
  recipient: AssociatedAccountI
}

export const RecipientCard = ({
  hasTitle = true,
  isDocument = false,
  recipient: { accountType, user },
}: RecipientCardI) => {
  const { firstName, lastName, phone, email } = user

  const accountIcon = {
    contributor: Contributor,
    homeowner: Homeowner,
    manager: Manager,
    member: Member,
  }

  return (
    <Container p="base">
      <Stack spacing="4">
        {hasTitle && (
          <Flex gap="2" w="full" align="center">
            <Image
              src={
                isDocument
                  ? Recipient
                  : accountIcon[
                      accountType.toLowerCase() as keyof typeof accountIcon
                    ] || Member
              }
              alt=""
              w="auto"
              h={isDocument ? '10px' : '16px'}
            />
            <Text fontSize="xs" textTransform="uppercase">
              {isDocument ? t('addRecipient.title') : accountType}
            </Text>
          </Flex>
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
