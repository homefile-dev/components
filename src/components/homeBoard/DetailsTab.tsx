import { useState } from 'react'
import { Stack, Flex, Text, Button, Image, Box, Center } from '@chakra-ui/react'
import { t } from 'i18next'
import { BeatLoader } from 'react-spinners'
import { fileDetailProxy } from '../../proxies/fileDetail.proxy'
import { TextInput } from '../inputs'

interface DetailsTab {
  handleEditDescription: (id: string) => void
  handleEditFileName: (id: string) => void
}

export const DetailsTab = ({
  handleEditDescription,
  handleEditFileName,
}: DetailsTab) => {
  const {
    addedAt,
    addedBy,
    description: descriptionProxy,
    editing,
    icon,
    name,
    _id,
  } = fileDetailProxy
  const [fileName, setFileName] = useState(name)
  const [description, setDescription] = useState(descriptionProxy)

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setFileName(value)
    fileDetailProxy.name = value
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setDescription(value)
    fileDetailProxy.description = value
  }

  return editing ? (
    <Center h="6rem">
      <BeatLoader color="gray" size={6} />
    </Center>
  ) : (
    <Stack spacing="base">
      <Flex gap="base" align="center">
        <Image src={icon} w="auto" h="3rem" alt={t('folderSharing.altIcon')} />
        <TextInput
          handleChange={handleChangeName}
          id={_id}
          placeholder=""
          value={fileName}
        />
        <Button
          variant="tertiary"
          h="input.md"
          onClick={() => fileName && handleEditFileName(_id)}
          disabled={fileName.length === 0}
        >
          {t('createDocument.buttons.save')}
        </Button>
      </Flex>
      <Box>
        {addedAt && (
          <Flex borderY="1px solid" borderColor="input.border" py="base" px="2">
            <Text variant="info" flex="0.2">
              {t('folderSharing.details.added')}
            </Text>
            <Text variant="info" flex="0.8">
              {addedAt}
            </Text>
          </Flex>
        )}
        <Flex
          borderBottom="1px solid"
          borderColor="input.border"
          py="base"
          px="2"
        >
          <Text variant="info" flex="0.2">
            {t('folderSharing.details.addedBy')}
          </Text>
          <Text variant="info" color="font.linkHover" flex="0.8">
            {addedBy}
          </Text>
        </Flex>
        <Flex
          borderBottom="1px solid"
          borderColor="input.border"
          py="base"
          pl="2"
          align="center"
          gap="base"
        >
          <Text variant="info" flex="0.2">
            {t('folderSharing.details.description')}
          </Text>
          <Flex gap="base" flex="0.8">
            <TextInput
              handleChange={handleChangeDescription}
              id={name || _id}
              placeholder={t('addMedia.description')}
              value={description || ''}
            />
            <Button
              disabled={!description}
              variant="tertiary"
              h="input.md"
              onClick={() => description && handleEditDescription(_id)}
            >
              {t('createDocument.buttons.save')}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Stack>
  )
}
