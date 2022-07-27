import { Text, Flex, Box } from '@chakra-ui/react'
import { t } from 'i18next'
import { HomeHeaderI } from '../../interfaces/homeBoard/HomeHeader.interface'
import { BackCircleButton } from '../buttons/BackCircleButton'
import { LeftButtonAnimated } from '../buttons/LeftButtonAnimated'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const HomeHeader = ({
  handleAddNewProject,
  handleClick,
  homeName,
}: HomeHeaderI) => {
  const { width } = useWindowDimensions()
  const isSmallMobile = width < 500
  return (
    <Flex align="center" justify="space-between">
      <Flex align="center" gap="1">
        <BackCircleButton handleClick={handleClick} />
        <Box
          borderLeft="solid"
          borderWidth="1px"
          borderColor="divider"
          h="1.75rem"
          mx="4"
        />
        {!isSmallMobile && (
          <Text variant="title">{t('myHomes.board.title')}</Text>
        )}
        <Text variant="titleBolder">{`${homeName} ${t(
          'myHomes.addHome'
        )}`}</Text>
      </Flex>
      <LeftButtonAnimated
        bgColor="button.green"
        handleClick={handleAddNewProject}
        height="2rem"
        label={t('myHomes.addProject')}
        position="absolute"
        right="0"
      />
    </Flex>
  )
}

export default HomeHeader
