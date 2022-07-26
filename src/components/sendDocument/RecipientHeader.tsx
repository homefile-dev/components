import { Flex, Image, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { Contributor, Homeowner, Manager, Member, Recipient } from '../../assets/images'

const accountIcon = {
  contributor: Contributor,
  homeowner: Homeowner,
  manager: Manager,
  member: Member,
}

interface RecipientCardI {
  accountType: string
  isDocument?: boolean
}

export const RecipientHeader = ({accountType, isDocument}: RecipientCardI) => {
  return (
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
  )
}
