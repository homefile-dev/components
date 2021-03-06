import { Flex, Avatar, Stack, Box, Text } from '@chakra-ui/react'

interface RecipientCardI {
  email: string
  firstName?: string
  lastName?: string
  phone?: string
}

export const RecipientContent = ({
  firstName = '',
  lastName = '',
  phone = '',
  email = '',
}: RecipientCardI) => {
  return (
    <Flex gap="2" align={firstName ? 'start' : 'center'}>
      <Avatar
        size="sm"
        bg={firstName ? 'avatar.green' : 'avatar.gray'}
        fontWeight="bold"
        color="white"
        name={firstName ? `${firstName} ${lastName}` : ''}
      />
      <Stack w="full" spacing="-1">
        {firstName && (
          <Text fontWeight="medium">{`${firstName} ${lastName}`}</Text>
        )}
        <Flex align="center" justifyContent="space-between">
          {phone ? (
            <Text fontSize="xs">{phone}</Text>
          ) : firstName ? (
            <Box />
          ) : null}
          <Text variant="email">{email}</Text>
        </Flex>
      </Stack>
    </Flex>
  )
}

export default RecipientContent
