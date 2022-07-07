import { DrawerContent, DrawerFooter, DrawerHeader } from '@chakra-ui/react'
import { t } from 'i18next'
import { useState } from 'react'
import { YellowFolder } from '../../assets/images'
import { AddFolderI } from '../../interfaces/homeBoard/AddFolder.interface'
import { FooterDrawer, FooterButtons } from '../footers'
import { PanelHeader } from '../headers'
import { EditFolderName } from './EditFolderName'

export const AddFolder = ({
  handleClose,
  handleSubmit,
  loading,
}: AddFolderI) => {
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
          handleEditFolderName={() => handleSubmit(folderName)}
          loading={loading}
          isDisabled={false}
          value={folderName}
        />
      </DrawerHeader>
      <DrawerFooter p="0" zIndex="dropdown">
        <FooterDrawer
          children={
            <FooterButtons
              button3={{
                buttonStyle: 'secondaryFooter',
                isDisabled: false,
                label: t('folderSharing.addFolder.cancel'),
                onClick: handleClose,
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
