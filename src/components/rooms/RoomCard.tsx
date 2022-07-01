import { Box, Flex, Image, Text, Center } from '@chakra-ui/react'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'

interface RoomCardI {
  icon: string
  index: number
  label: string
}
export const RoomCard = ({ icon, index, label }: RoomCardI) => {
  const [styles, setStyles] = useState({
    bg: 'white',
    mTop: '0',
    opacity: 1,
  })

  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = 'move'
    setStyles({
      ...styles,
      bg: 'container.tertiary',
      opacity: 0.3,
    })
  }

  const onDragEnd = () => {
    setStyles({
      ...styles,
      bg: 'white',
      mTop: '0',
      opacity: 1,
    })
  }

  const onDragLeave = () => {
    setStyles({
      ...styles,
      mTop: '0',
    })
  }

  const onDragOver = () => {
    setStyles({
      ...styles,
      mTop: '4.5rem',
    })
  }

  const onDragEnter = () => {
    setStyles({
      ...styles,
      mTop: '4.5rem',
    })
  }

  const onDrop = () => {
    setStyles({
      ...styles,
      mTop: '0',
    })
  }

  return (
    <Box
      draggable
      overflow="hidden"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <Box
        w="full"
        as="button"
        h="3.2rem"
        bg={styles.bg}
        marginTop={styles.mTop}
        transition="all 0.1s ease-in-out"
        _hover={{ backgroundColor: 'button.roomHover' }}
        _disabled={{
          filter: 'grayscale(100%)',
          pointerEvents: 'none',
        }}
      >
        <Flex justify="start" alignItems="center" opacity={styles.opacity}>
          <Center minW="container.roomIcon">
            {icon && <Image src={icon} alt={label} w="24px" h="auto" />}
          </Center>
          <Box flex="1">
            <Text textAlign="left" variant="caption">
              {label}
            </Text>
          </Box>
          <Center w="container.roomIcon" as="button" cursor="move">
            <CustomIcon type={FiMenu} color="button.icon" />
          </Center>
        </Flex>
      </Box>
    </Box>
  )
}
