import {
  Box,
  Text,
  Flex,
  Center,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react'
import { HiOutlinePlus, HiSearch } from 'react-icons/hi'
import { VscClose } from 'react-icons/vsc'
import { CustomIcon } from '../icons/CustomIcon'
import { RoomCard } from './RoomCard'
import { RoomsMenuI } from '../../interfaces/rooms/RoomsMenu.interface'
import { useRoomList } from '../../hooks/rooms/useRoomList'
import { useEffect } from 'react'
import { t } from 'i18next'

export const RoomsMenu = ({ rooms }: RoomsMenuI) => {
  const {
    adding,
    handleChange,
    handleDragStart,
    handleDrop,
    handleFilter,
    handleOpen,
    newRooms,
    isOpen,
    searchValue,
    setNewRooms,
  } = useRoomList()

  useEffect(() => {
    ;(adding || rooms) && setNewRooms(rooms)
  }, [rooms, adding])

  useEffect(() => {
    handleFilter(rooms)
  }, [searchValue])

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
          onClick={handleOpen}
          transition="all 0.2s ease-in-out"
          bg={adding ? 'font.linkSelected' : 'button.primary'}
          overflow="hidden"
          _hover={{ backgroundColor: 'button.primaryHover' }}
          _disabled={{
            filter: 'grayscale(100%)',
            pointerEvents: 'none',
          }}
        >
          <Flex
            justify={adding ? 'space-between' : 'strect'}
            alignItems="center"
            pl={adding ? '5' : '0'}
          >
            {!adding && (
              <Center minW="container.roomIcon">
                <CustomIcon type={HiOutlinePlus} size="6" color="white" />
              </Center>
            )}
            <Box>
              <Text color="white" textTransform="uppercase" noOfLines={1}>
                {t('addRoom.addBtn')}
              </Text>
            </Box>
            {adding && (
              <Center minW="container.roomIcon">
                <CustomIcon type={VscClose} size="8" color="white" />
              </Center>
            )}
          </Flex>
        </Box>
      </Box>
      {adding && (
        <Box p="base" bg="white">
          <InputGroup size="md">
            <Input
              variant="filled"
              pr="4.5rem"
              placeholder={t('addRoom.find')}
              value={searchValue}
              onChange={handleChange}
            />
            <InputRightElement>
              <Button variant="icon" color="font.primary" onClick={() => {}}>
                <CustomIcon type={HiSearch} size="6" />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      )}
      <Box>
        {newRooms.map(({ icon, id, label }, i) => {
          return (
            <Box key={id}>
              <Box bg="white">
                <Box
                  h="1px"
                  bg="container.primary"
                  marginX={isOpen ? 'base' : '0'}
                />
              </Box>
              <RoomCard
                draggable={!adding}
                handleDragStart={(index) => handleDragStart(index)}
                handleDrop={(index) => handleDrop(index)}
                icon={icon}
                index={i}
                label={label}
              />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
