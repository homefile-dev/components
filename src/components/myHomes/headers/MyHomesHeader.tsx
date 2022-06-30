import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { BsChevronDown, BsFilter } from 'react-icons/bs'
import { t } from 'i18next'
import { HiOutlinePlus } from 'react-icons/hi'
import { MyHomeHeaderI } from '../../../interfaces/myHomes/MyHomesHeader.interface'
import { CustomIcon } from '../../icons/CustomIcon'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { useState } from 'react'

export const MyHomesHeader = ({
  cardFilters,
  handleNewHomeClick,
}: MyHomeHeaderI) => {
  const [selectedValue, setSelectedValue] = useState<string>('All')
  const { width } = useWindowDimensions()
  const isMobile = width < 460
  return (
    <Flex justifyContent="space-between" alignItems="start" pr="base" py="4">
      <Button
        size="md"
        onClick={handleNewHomeClick}
        leftIcon={<CustomIcon type={HiOutlinePlus} color="white" size="7" />}
        variant="rightRounded"
      >
        {t('myHomes.addHome')}
      </Button>
      <Menu>
        <MenuButton
          disabled
          w={isMobile ? '3rem' : '10rem'}
          border="1px"
          borderColor={isMobile ? 'button.primary' : 'input.border'}
          borderRadius="sm"
          bg="white"
          color={isMobile ? 'button.primary' : ''}
          _hover={{
            borderColor: 'button.primary',
          }}
          _disabled={{
            bg: 'transparent',
            borderColor: 'container.neutral',
            color: 'container.neutral',
            pointerEvents: 'none',
          }}
        >
          <Flex
            justify={isMobile ? 'center' : 'space-between'}
            align="center"
            px="base"
            h="3rem"
          >
            <Text
              variant="info"
              noOfLines={1}
              overflow="hidden"
              textAlign="left"
            >
              {isMobile ? '' : selectedValue}
            </Text>
            <CustomIcon
              type={isMobile ? BsFilter : BsChevronDown}
              size={isMobile ? 8 : undefined}
            />
          </Flex>
        </MenuButton>
        <MenuList>
          {cardFilters?.map(({ label, handleClick }) => (
            <MenuItem
              key={label}
              onClick={() => {
                handleClick(label)
                setSelectedValue(label)
              }}
              value={label}
              _hover={{
                bg: 'container.secondary',
              }}
              _focus={{
                bg: 'container.secondary',
              }}
            >
              <Text variant="info">{label}</Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default MyHomesHeader
