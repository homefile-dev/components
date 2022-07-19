import { Box, Flex, Text, Checkbox } from '@chakra-ui/react'
import { t } from 'i18next'

interface SharedFilterI {
  handleSharedFilter: (checked: boolean) => void
  showingFiles: number
  totalFiles: number
}

export const SharedFilter = ({
  handleSharedFilter,
  showingFiles,
  totalFiles,
}: SharedFilterI) => {
  const moreThanOne = `${t(
    'folderSharing.showing.part1'
  )} 1-${showingFiles} ${t('folderSharing.showing.part2')} ${totalFiles} ${t(
    'folderSharing.showing.part3'
  )}`
  const one = `${t('folderSharing.showing.part1')} ${showingFiles} ${t(
    'folderSharing.showing.part2'
  )} ${totalFiles} ${
    totalFiles === 0
      ? t('folderSharing.showing.part3')
      : t('folderSharing.showing.part4')
  }`
  return (
    <Box bg="container.tertiary" w="100%" px="4" py="base">
      <Flex justify="space-between" align="center">
        <Text variant="home">{totalFiles > 1 ? moreThanOne : one}</Text>
        <Checkbox
          size="lg"
          onChange={(e) => handleSharedFilter(e.target.checked)}
        >
          <Text variant="info">{t('folderSharing.filters.shared')}</Text>
        </Checkbox>
      </Flex>
    </Box>
  )
}
