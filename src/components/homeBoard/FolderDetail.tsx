import {
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Stack,
} from '@chakra-ui/react'
import { t } from 'i18next'
import {
  FolderDetailI,
  FolderFileI,
} from '../../interfaces/homeBoard/FolderDetail.interface'
import { PanelHeader } from '../headers'
import {
  BlueFolder,
  VioletFolder,
  YellowFolder,
  YellowFolderUnshared,
} from '../../assets/images'
import { DragDropArea } from '../dragDrop/DragDropArea'
import { useFolderDetail } from '../../hooks/homeBoard/useFolderDetail'
import { DragDropLoading } from '../dragDrop/DragDropLoading'
import { FooterDrawer, FooterButtons } from '../footers'
import { useState, useMemo, useEffect } from 'react'
import { SortHeader } from './SortHeader'
import { Files } from './Files'
import { fileRecipientProxy } from '../../proxies/fileRecipient.proxy'
import { fileDetailProxy } from '../../proxies/fileDetail.proxy'
import EditFolderName from './EditFolderName'
import { SharedFilter } from './SharedFilter'

export const FolderDetail = ({
  addedBy,
  children,
  editing,
  files,
  folder,
  handleClose,
  handleEditDescription,
  handleEditFileName,
  handleEditFolderName,
  handleAddRecipient,
  handleDeleteFile,
  handleDeleteFolder,
  handleDeleteRecipient,
  handleFileClick,
  handleFilter,
  handleOpenFile,
  handleSharedFilter,
  handleUpload = () => {},
  loading,
  panelSize = 'md',
  recipients,
  uploading,
}: FolderDetailI) => {
  const {
    acceptedFiles,
    errorMessage,
    getRootProps,
    getInputProps,
    handleChange,
    handleFileUpdate,
    handleMapFile,
    hasError,
    folderName,
    setAcceptedFiles,
    setFolderName,
    setIsUploading,
    setTotalFiles,
    totalFiles,
  } = useFolderDetail()

  let isMounted = true

  const [dbFiles, setDbFiles] = useState<FolderFileI[]>([])
  // const isNew = folder.status?.toLowerCase() === 'new'
  // const isShared = folder.needsReview || folder.reviewed
  // const icon = isNew
  //   ? VioletFolder
  //   : isShared
  //   ? BlueFolder
  //   : YellowFolderUnshared
  const icon = YellowFolder
  const typesOptions = ['All']
  fileRecipientProxy.recipients = recipients
  fileDetailProxy.addedBy = addedBy
  fileDetailProxy.editing = editing

  const sortMenu = [
    {
      _id: '1',
      name: t('folderSharing.sort.date'),
    },
    {
      _id: '2',
      name: t('folderSharing.sort.name'),
    },
    {
      _id: '3',
      name: t('folderSharing.sort.type'),
    },
  ]

  useMemo(() => {
    isMounted && setDbFiles(handleMapFile({ files, isLocal: false }))
    return () => {
      isMounted = false
    }
  }, [files])

  useEffect(() => {
    isMounted && setTotalFiles([...dbFiles])
    return () => {
      isMounted = false
    }
  }, [acceptedFiles, dbFiles])

  useEffect(() => {
    isMounted && handleUpload(acceptedFiles)
    return () => {
      isMounted = false
    }
  }, [acceptedFiles])

  useEffect(() => {
    isMounted && setFolderName(folder?.name)
    return () => {
      isMounted = false
    }
  }, [folder.name])

  useEffect(() => {
    isMounted && setIsUploading(uploading)
    !uploading && setAcceptedFiles([])
    return () => {
      isMounted = false
    }
  }, [uploading])

  return (
    <DrawerContent bg="container.tertiary">
      <DrawerHeader p="0">
        <PanelHeader
          handleCloseButton={handleClose}
          icon={icon}
          title={folderName}
        />
      </DrawerHeader>
      <EditFolderName
        isDisabled={folder.public}
        handleChange={handleChange}
        handleEditFolderName={() => {
          handleEditFolderName({
            ...folder,
            name: folderName,
          })
        }}
        value={folderName}
      />
      <SortHeader
        handleSelect={(form) => handleFilter(form)}
        initialSelectValue={sortMenu[0].name}
        selectItems={sortMenu}
        selectTypeItems={typesOptions}
      />
      <SharedFilter
        handleSharedFilter={handleSharedFilter}
        totalFiles={files.length}
        showingFiles={files.length}
      />
      <DrawerBody p="0" bg="white">
        <Stack spacing="4" w="full" p="base" h="100%">
          <DragDropArea
            errorMessage={errorMessage}
            getInputProps={getInputProps}
            getRootProps={getRootProps}
            hasError={hasError}
          />
          <DragDropLoading
            children={
              <Files
                files={totalFiles}
                handleAddRecipient={handleAddRecipient}
                handleDeleteFile={(id) => handleDeleteFile(id)}
                handleDeleteRecipient={handleDeleteRecipient}
                handleEditDescription={(id) => {
                  const file = handleFileUpdate(id)
                  file && handleEditDescription(file)
                }}
                handleEditFileName={(id) => {
                  const file = handleFileUpdate(id)
                  file && handleEditFileName(file)
                }}
                handleFileClick={(id) => {
                  const file = handleFileUpdate(id)
                  file && handleFileClick(file)
                }}
                handleOpenFile={handleOpenFile}
                panelSize={panelSize}
                uploading={uploading}
              />
            }
            isLoading={loading || uploading}
          />
        </Stack>
      </DrawerBody>
      <DrawerFooter p="0" zIndex="dropdown">
        <FooterDrawer
          children={
            <FooterButtons
              button3={{
                buttonStyle: 'secondaryFooter',
                isDisabled: false,
                label: t('folderSharing.details.delete'),
                onClick: () => handleDeleteFolder(folder._id),
              }}
            />
          }
          isOpen
        />
      </DrawerFooter>
      {children}
    </DrawerContent>
  )
}

export default FolderDetail
