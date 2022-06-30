import {
  Box,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { useState } from 'react'
import { YellowFolder } from '../../assets/images'
import { AddFolderI } from '../../interfaces/homeBoard/AddFolder.interface'
import { FooterDrawer, FooterButtons } from '../footers'
import { PanelHeader, TabsHeader } from '../headers'
import { RecipientTab } from '../sendCommunication'
import EditFolderName from './EditFolderName'

export const AddFolder = ({ handleClose }: AddFolderI) => {
  const [folderName, setFolderName] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value)
  }
  return (
    <DrawerContent bg="container.tertiary">
      <DrawerHeader p="0">
        <PanelHeader
          handleCloseButton={handleClose}
          icon={YellowFolder}
          title={t('folderSharing.addFolder.title')}
        />
        <EditFolderName
          handleChange={handleChange}
          handleEditFolderName={() => {
            // ADD handleEditFolderName function
          }}
          isDisabled={false}
          value={folderName}
        />
      </DrawerHeader>
      <DrawerBody p="0">
        <TabsHeader
          tabList={[
            {
              label: t('folderSharing.tabs.tab3'),
              component: (
                <RecipientTab
                  handleAdd={() => {}}
                  handleRemove={() => {}}
                  hasTitle={false}
                  loading={false}
                  recipients={[
                    {
                      firstName: 'John',
                      lastName: 'Doe',
                      email: 'user@user.com',
                      phone: '32329099',
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      </DrawerBody>
      <DrawerFooter p="0" zIndex="dropdown">
        <FooterDrawer
          children={
            <FooterButtons
              button1={{
                buttonStyle: 'secondaryFooter',
                isDisabled: false,
                label: t('folderSharing.addFolder.cancel'),
                onClick: () => {},
                width: '7rem',
              }}
              button2={{
                buttonStyle: 'secondaryFooter',
                isDisabled: false,
                label: t('folderSharing.addFolder.create'),
                onClick: () => {},
              }}
              button3={{
                buttonStyle: 'primaryFooter',
                isDisabled: false,
                label: t('folderSharing.addFolder.close'),
                onClick: () => {},
                width: '7rem',
              }}
            />
          }
          isOpen
        />
      </DrawerFooter>
    </DrawerContent>
  )
}

export default AddFolder
