import {
  Box,
  Button,
  Container,
  Flex,
  Wrap,
  WrapItem,
  Image,
  Text,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import {
  BlueFolder,
  VioletFolder,
  YellowFolder,
  YellowFolderUnshared,
} from '../../assets/images'
import { FolderSharingI } from '../../interfaces/homeBoard/FolderSharing.interface'
import { TextBagde } from '../badge/TextBadge'
import { ContainerHeader } from '../headers'
import { CustomIcon } from '../icons/CustomIcon'
import { SelectInput } from '../inputs/SelectInput'
import { folderHeaderProxy } from '../../proxies/folderHeader.proxy'
import { LeftButtonAnimated } from '../buttons/LeftButtonAnimated'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const FolderSharing = ({
  folders,
  handleAddNewFolder,
  handleFolderClick,
  handleSelect,
  initialSelectItem,
  menuItems,
  selectItems,
}: FolderSharingI) => {
  const { width } = useWindowDimensions()
  const isDesktop = width > 800
  return (
    <Container variant="launchpad" minW={isDesktop ? '62%' : 'full'}>
      <ContainerHeader
        disabled
        title={t('folderSharing.title')}
        titleIcon={YellowFolder}
        menuItems={menuItems}
        icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
      />
      <Box bg="container.neutralBlue" py="2" pl="base" w="100%">
        <Flex justify="space-between" align="center">
          <SelectInput
            handleClick={(form) => handleSelect(form)}
            initailValue={initialSelectItem.name}
            isDisabled
            items={selectItems}
          />
          <LeftButtonAnimated handleClick={handleAddNewFolder} label="Folder" />
        </Flex>
      </Box>
      <Wrap py="8" px="base" spacing="2">
        {folders &&
          folders.map(({ _id, name, public: isPublic, home }, index) => {
            // const isNew = status?.toLowerCase() === 'new'
            // const isShared = needsReview || reviewed
            // const icon = isNew
            //   ? VioletFolder
            //   : isShared
            //   ? BlueFolder
            //   : YellowFolderUnshared

            const isNew = false
            const isShared = false
            const icon = YellowFolder
            return (
              <WrapItem w="6rem" key={_id}>
                <Button
                  variant="folder"
                  position="relative"
                  px="base"
                  pb="base"
                  pt="6"
                  onClick={() => {
                    handleFolderClick({
                      _id,
                      name,
                      public: isPublic,
                      home,

                    })
                    folderHeaderProxy.icon = icon
                    folderHeaderProxy.title = name
                  }}
                >
                  <Flex gap="1" position="absolute" top="-1" left="base">
                    {isNew && <TextBagde />}
                    {isShared ? (
                      <TextBagde
                        bgColor="container.blue"
                        text={t('badges.shared')}
                        width="3.4rem"
                      />
                    ) : (
                      false && (
                        <TextBagde
                          bgColor="container.warning"
                          text={t('badges.private')}
                          width="3.4rem"
                        />
                      )
                    )}
                  </Flex>
                  <Flex direction="column" gap="base" align="center">
                    <Image
                      src={icon}
                      w="3.7rem"
                      h="auto"
                      alt={t('folderSharing.altIcon')}
                    />
                    <Text fontSize="sm">{name}</Text>
                  </Flex>
                </Button>
              </WrapItem>
            )
          })}
      </Wrap>
    </Container>
  )
}

export default FolderSharing
