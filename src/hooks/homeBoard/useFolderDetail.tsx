import { t } from 'i18next'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { formatDate } from '../../helpers/Formaters'
import {
  FolderFileI,
  MapFileI,
} from '../../interfaces/homeBoard/FolderDetail.interface'
import { fileDetailProxy } from '../../proxies/fileDetail.proxy'

export const useFolderDetail = () => {
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [acceptedFiles, setAcceptedFiles] = useState<FolderFileI[]>([])
  const [totalFiles, setTotalFiles] = useState<FolderFileI[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [folderName, setFolderName] = useState('')
  const { REACT_APP_STORAGE_URL: storageUrl } = process.env

  const handleMapFile = ({ files, isLocal = true }: MapFileI) => {
    const newFiles = files.map((file: any) => {
      return {
        description: isLocal ? '' : file.description,
        extension: isLocal ? '' : file?.file?.extension,
        file: isLocal ? file : file?.file,
        _id: isLocal ? file.name : file?._id,
        isNew: isLocal ? true : false,
        isShare: isLocal ? false : false,
        imageUrl: isLocal
          ? URL.createObjectURL(file)
          : `${storageUrl}/${file?.file?.bucketName}/${file?.file?.fileName}.${file?.file?.extension}`,
        project: isLocal ? '' : file?.project,
        report: isLocal ? [] : file?.report,
        subType: isLocal ? '' : file?.subType,
        title: isLocal ? file?.name.split('.')[0] : file?.title,
        type: isLocal ? '' : file?.type,
        updatedAt: isLocal
          ? formatDate(file?.lastModified)
          : formatDate(file?.updatedAt),
        uploaded: isLocal ? false : true,
        user: isLocal ? '' : file?.user,
      }
    })
    return newFiles
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.pdf', '.txt', '.doc', '.docx', '.heic'],
      'video/mp4': ['.mp4', '.MP4'],
      'video/mov': ['.mov', '.MOV'],
      'video/quicktime': ['.mov', '.MOV']
    },
    disabled: isUploading,
    maxSize: 25000000,
    onDrop: (uploadedFiles) => {
      const selectedFiles = handleMapFile({ files: uploadedFiles })
      setAcceptedFiles(selectedFiles)
    },
    onDropRejected: (rejectFiles) => {
      setHasError(true)
      setErrorMessage(
        rejectFiles[0].errors[0].code === 'file-too-large'
          ? t('folderSharing.details.errorSize')
          : t('folderSharing.details.errorType')
      )
    },
  })

  const getFile = (id: string) => {
    return totalFiles.find((file: FolderFileI) => file._id === id)
  }

  const handleFileUpdate = (id: string): FolderFileI => {
    const fileChanged = getFile(id) as FolderFileI
    return {
      ...fileChanged,
      title: fileDetailProxy.name,
      description: fileDetailProxy.description,
    }
  }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setFolderName(e.target.value)
   }

  useEffect(() => {
    if (hasError) {
      setTimeout(() => {
        setHasError(false)
        setErrorMessage('')
      }, 5000)
    }
  }, [hasError])

  return {
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
  }
}
