import { Box, Text, Flex, Center } from '@chakra-ui/react'
import { HiOutlinePlus } from 'react-icons/hi'
import { CustomIcon } from '../icons/CustomIcon'
import { RoomCard } from './RoomCard'
import {
  RoomItemI,
  RoomsMenuI,
} from '../../interfaces/rooms/RoomsMenu.interface'
import { useState } from 'react'

export const RoomsMenu = ({ rooms }: RoomsMenuI) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sortedRooms, setSortedRooms] = useState<RoomItemI[]>(rooms)
  return (
    <Box
      w={isOpen ? '16rem' : 'container.roomIcon'}
      minW={isOpen ? '16rem' : 'container.roomIcon'}
      transition="all 0.2s ease-in-out"
      bg="container.primary"
    >
      <Box overflow="hidden">
        <Box
          as="button"
          w="full"
          h="container.masthead"
          onClick={() => setIsOpen(!isOpen)}
          transition="all 0.2s ease-in-out"
          bg="button.primary"
          _hover={{ backgroundColor: 'button.primaryHover' }}
          _disabled={{
            filter: 'grayscale(100%)',
            pointerEvents: 'none',
          }}
        >
          <Flex justify="strect" alignItems="center">
            <Center minW="container.roomIcon">
              <CustomIcon type={HiOutlinePlus} size="6" color="white" />
            </Center>
            <Box>
              <Text color="white" textTransform="uppercase">
                Add room
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box>
        {sortedRooms.map(({ icon, id, label, index }, i) => {
          return (
            <Box key={id}>
              <RoomCard
                icon={icon}
                index={index}
                label={label}
              />
              {index !== rooms.length - 1 && (
                <Box
                  h="1px"
                  bg="container.primary"
                  marginX={isOpen ? 'base' : '0'}
                />
              )}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
