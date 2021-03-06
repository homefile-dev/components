import { Box, Flex, Stack, useDisclosure } from '@chakra-ui/react'
import { UserMenuItems } from '../../helpers/launchpad/MenuItems.helper'
import { HomeCards } from '../../helpers/myHomes'
import { SendCommunication } from '../sendDocument/SendCommunication'
import { RightPanel } from '../launchpad/RightPanel'
import { Masthead } from '../launchpad'
import { HomeHeader } from './HomeHeader'
import { HomeCardWithRecipent } from './HomeCardWithRecipent'
import { recipientsDb } from '../../helpers/sendDocument/AddRecipient.helper'
import {
  fileDB,
  FoldersDB,
  selectOptions,
} from '../../helpers/homeBoard/FolderSharing.helper'
import { FolderSharing } from './FolderSharing'
import { FolderDetail } from './FolderDetail'
import { FolderI } from '../../interfaces/homeBoard/FolderSharing.interface'
import { useState } from 'react'
import { RoomsMenu } from '../rooms/RoomsMenu'
import { RoomsList } from '../../helpers/rooms/RoomsList'
import { AddFolder } from './AddFolder'
import ShareHome from '../shareHome/ShareHome'

export const HomeBoard = () => {
  const homeName = 'The Edmunds'
  const userName = 'John Doe'
  const {
    isOpen: isRightOpen,
    onOpen: onRightOpen,
    onClose: onRightClose,
  } = useDisclosure()

  const [isNewFolder, setIsNewFolder] = useState(false)
  const [selectedFolder, setSelectedFolder] = useState<FolderI>({
    _id: '',
    name: '',
    public: false,
    home: '',
  })

  return (
    <Box w="full">
      <RightPanel
        children={
          isNewFolder ? (
            <AddFolder
              handleClose={onRightClose}
              handleSubmit={(value) => {
                onRightClose()
              }}
            />
          ) : (
            <FolderDetail
              addedBy="First name and last name"
              children={<h1>Hello World</h1>}
              editing={false}
              folder={selectedFolder}
              handleAddRecipient={(email) => email}
              handleClose={onRightClose}
              handleDeleteFile={(id) => id}
              handleDeleteFolder={(id) => id}
              handleDeleteRecipient={(email) => email}
              handleEditDescription={(file) => file}
              handleEditFileName={(file) => file}
              handleEditFolderName={(folder) => folder}
              handleFileClick={(file) => file}
              handleFilter={(filter) => filter}
              handleOpenFile={(file) => file}
              handleSharedFilter={(filter) => filter}
              files={fileDB}
              handleUpload={() => {}}
              loading={false}
              isDocument={true}
              panelSize="md"
              recipients={[
                {
                  accountTypes: ['Homeowner'],
                  user: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'user@user.com',
                    phone: '32329099',
                  },
                },
              ]}
              uploading={false}
            />
          )
        }
        isOpen={isRightOpen}
        onClose={onRightClose}
        size="md"
      />
      <Flex>
        <RoomsMenu rooms={RoomsList} />
        <Stack spacing="base">
          <Masthead userName={userName} menuItems={UserMenuItems} />
          <Stack pl={[0, 'base']} spacing="base">
            <HomeHeader
              handleClick={() => {}}
              homeName={homeName}
              handleAddNewProject={() => {}}
            />
            <Flex direction={['column-reverse', 'row']} gap="base" w="full">
              <HomeCardWithRecipent
                address={HomeCards[0].address}
                handleEdit={(id) => id}
                _id={HomeCards[0]._id}
                image={HomeCards[0].image}
                name={HomeCards[0].name}
                menu={[
                  {
                    label: 'Edit',
                    handleClick: (form) => form,
                  },
                ]}
                recipients={recipientsDb}
              />
              <Flex
                direction={[
                  'column-reverse',
                  'column-reverse',
                  'column-reverse',
                  'row',
                ]}
                gap="base"
                w="full"
              >
                <FolderSharing
                  folders={FoldersDB}
                  handleAddNewFolder={() => {
                    setIsNewFolder(true)
                    onRightOpen()
                  }}
                  handleFolderClick={(folder) => {
                    setIsNewFolder(false)
                    setSelectedFolder(folder)
                    onRightOpen()
                  }}
                  handleSelect={() => {}}
                  initialSelectItem={selectOptions[0]}
                  menuItems={[
                    {
                      label: 'Edit',
                      handleClick: () => {},
                    },
                  ]}
                  selectItems={selectOptions}
                />
                <Stack spacing="base">
                  <ShareHome
                    handleShowAccounts={() => {}}
                    handleAdd={(form) => form}
                    associatedAccounts={[]}
                  />
                  <SendCommunication documentList={[]} />
                </Stack>
              </Flex>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  )
}

export default HomeBoard
