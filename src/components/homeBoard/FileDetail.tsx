import {
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react'
import { PanelHeader, TabsHeader } from '../headers'
import { folderHeaderProxy } from '../../proxies/folderHeader.proxy'
import { BackCircleButton } from '../buttons/BackCircleButton'
import { fileDetailProxy } from '../../proxies/fileDetail.proxy'
import { t } from 'i18next'
import { DetailsTab } from './DetailsTab'
import { useSnapshot } from 'valtio'
import { FileDetailI } from '../../interfaces/homeBoard/File.interface'
import { RecipientTab } from '../sendDocument'
import { fileRecipientProxy } from '../../proxies/fileRecipient.proxy'

export const FileDetail = ({
  editing,
  handleAddRecipient,
  handleEditDescription,
  handleEditFileName,
  handleDeleteRecipient,
}: FileDetailI) => {
  const { recipients } = fileRecipientProxy
  const {isDocument} = fileDetailProxy
  const tabs = [
    {
      label: t('folderSharing.tabs.tab1'),
      component: (
        <DetailsTab
          handleEditDescription={handleEditDescription}
          handleEditFileName={handleEditFileName}
        />
      ),
    },
    {
      label: t('folderSharing.tabs.tab2'),
      component: (
        <RecipientTab
          handleAdd={handleAddRecipient}
          handleRemove={handleDeleteRecipient}
          loading={false}
          recipients={recipients}
          isDocument={isDocument}
        />
      ),
    },
  ]
  const { handleCloseButton, icon, title } = folderHeaderProxy
  const snap = useSnapshot(fileDetailProxy)

  return (
    <DrawerContent bg="container.tertiary">
      <DrawerHeader p="0">
        <PanelHeader
          handleCloseButton={handleCloseButton}
          icon={icon}
          title={title}
        />
      </DrawerHeader>
      <DrawerBody p="0">
        <Box bg="container.neutralBlue" py="2" px="base" w="100%">
          <Flex align="center" gap="1">
            <BackCircleButton handleClick={handleCloseButton} />
            <Box
              borderLeft="solid"
              borderWidth="1px"
              borderColor="divider"
              h="1.75rem"
              mx="4"
            />
            <Text variant="title" fontWeight="medium" isTruncated>
              {snap.name}
            </Text>
          </Flex>
        </Box>
        <TabsHeader tabList={tabs} />
      </DrawerBody>
    </DrawerContent>
  )
}
