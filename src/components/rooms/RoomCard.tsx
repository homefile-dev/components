import { Box, Flex, Image, Text, Center } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { CustomIcon } from '../icons/CustomIcon'
import { useRoomCard } from '../../hooks/rooms/useRoomCard'
import { RoomCardI } from '../../interfaces/rooms/RoomCard.interface'
import { HiOutlinePlus } from 'react-icons/hi'

export const RoomCard = ({
  draggable = true,
  handleDragStart,
  handleDrop,
  icon,
  index,
  label,
}: RoomCardI) => {
  const {
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragStart,
    onDrop,
    styles,
  } = useRoomCard()

  return (
    <Box
      draggable={draggable}
      overflow="hidden"
      onDragStart={(e) => {
        onDragStart(e)
        handleDragStart(index)
      }}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={() => {
        onDrop()
        handleDrop(index)
      }}
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
            <Text
              textAlign="left"
              variant="caption"
              noOfLines={1}
              overflow="hidden"
            >
              {label}
            </Text>
          </Box>
          <Center w="container.roomIcon" cursor={draggable ? 'move' : ''}>
            {draggable ? (
              <CustomIcon type={FiMenu} color="button.icon" />
            ) : (
              <CustomIcon type={HiOutlinePlus} color="button.primary-300" />
            )}
          </Center>
        </Flex>
      </Box>
    </Box>
  )
}
