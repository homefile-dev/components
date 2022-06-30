import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { TextInput } from '../inputs'

interface EditFolderNameI {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleEditFolderName: () => void
  isDisabled?: boolean
  value: string
}

export const EditFolderName = ({
  handleChange,
  handleEditFolderName,
  isDisabled = true,
  value,
}: EditFolderNameI) => {
  return (
    <Box bg="container.tertiary" w="100%" p="base">
      <Flex gap="base" align="center">
        <Text fontFamily="secondary" minW="fit-content">
          {t('folderSharing.details.name')}
        </Text>
        <TextInput
          handleChange={handleChange}
          id={'1'}
          placeholder={t('folderSharing.details.placeholder')}
          value={value}
          isDisabled={isDisabled}
        />
        <Button
          variant="secondary"
          maxW="fit-content"
          maxH="input.md"
          disabled={!value || isDisabled}
          onClick={handleEditFolderName}
        >
          {t('createDocument.buttons.save')}
        </Button>
      </Flex>
    </Box>
  )
}

export default EditFolderName
