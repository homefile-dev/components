import { Wrap, Box, useDisclosure } from '@chakra-ui/react'
import { t } from 'i18next'
import { RightPanel } from '../launchpad/RightPanel'
import { FileDetail } from './FileDetail'
import { File } from './File'
import { folderHeaderProxy } from '../../proxies/folderHeader.proxy'
import { fileDetailProxy } from '../../proxies/fileDetail.proxy'
import { FolderFileI } from '../../interfaces/homeBoard/FolderDetail.interface'
import { AssociatedAccountI } from '../../interfaces/shareHome/ShareHome.interface';

interface FilesI {
  files: FolderFileI[]
  handleAddRecipient: (form: AssociatedAccountI) => void
  handleDeleteFile: (id: string) => void
  handleDeleteRecipient: (email: string) => void
  handleEditDescription: (id: string) => void
  handleEditFileName: (id: string) => void
  handleFileClick: (id: string) => void
  handleOpenFile: (file: FolderFileI) => void
  panelSize?: string
  uploading?: boolean
  isDocument?: boolean
}

export const Files = ({
  files,
  handleAddRecipient,
  handleDeleteFile,
  handleDeleteRecipient,
  handleEditDescription,
  handleEditFileName,
  handleFileClick,
  handleOpenFile,
  panelSize,
  uploading,
  isDocument
}: FilesI) => {
  const {
    isOpen: isRightOpen,
    onOpen: onRightOpen,
    onClose: onRightClose,
  } = useDisclosure()

  folderHeaderProxy.handleCloseButton = onRightClose

  const fileMenu = [
    {
      label: t('folderSharing.menu.details'),
      handleClick: (form: any) => {
        onRightOpen()
        fileDetailProxy.name = form.name
        fileDetailProxy.addedAt = form.updatedAt.replace(' ', ' @ ')
        fileDetailProxy.icon = form.icon
        fileDetailProxy._id = form._id
        handleFileClick(fileDetailProxy._id)
      },
    },
    {
      label: t('folderSharing.menu.delete'),
      handleClick: (form: any) => {
        fileDetailProxy._id = form._id
        handleDeleteFile(fileDetailProxy._id)
      },
    },
  ]

  return (
    <Wrap>
      {files?.map(
        (
          {
            description,
            extension,
            _id,
            isNew,
            isShared,
            title,
            uploaded,
            updatedAt,
          },
          index
        ) => {
          fileDetailProxy.description = description
          return (
            <Box key={_id + index}>
              <File
                handleClick={(id) => {
                  const file = files.find((file) => file._id === id)
                  file && handleOpenFile(file)
                }}
                handleEditFileName={handleEditFileName}
                isNew={isNew}
                isShared={isShared}
                menu={fileMenu}
                title={title}
                type={extension || ''}
                updatedAt={updatedAt}
                uploaded={uploaded}
                uploading={uploading}
                _id={_id}
              />
            </Box>
          )
        }
      )}
      <RightPanel
        children={
          <FileDetail
            handleAddRecipient={handleAddRecipient}
            handleEditDescription={handleEditDescription}
            handleEditFileName={handleEditFileName}
            handleDeleteRecipient={handleDeleteRecipient}
            isDocument={isDocument}
          />
        }
        isOpen={isRightOpen}
        onClose={onRightClose}
        size={panelSize}
      />
    </Wrap>
  )
}
