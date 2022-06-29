import { Box, Button, Flex } from '@chakra-ui/react'
import { FiGrid } from 'react-icons/fi'
import { SortHeaderI } from '../../interfaces/homeBoard/SortHeader.interface'
import { CustomIcon } from '../icons/CustomIcon'
import SelectInput from '../inputs/SelectInput'

export const SortHeader = ({
  handleSelect,
  initialSelectTypeValue = 'All',
  initialSelectValue = '',
  selectItems = undefined,
  selectTypeItems = null,
}: SortHeaderI) => {
  return (
    <Box bg="container.neutralBlue" py="2" pl="base" w="100%">
      <Flex justify="space-between" align="center">
        {selectItems ? (
          <Flex gap="base" align="center">
            {selectTypeItems && (
              <SelectInput
                handleClick={handleSelect}
                initailValue={initialSelectTypeValue}
                items={selectTypeItems}
              />
            )}
            <SelectInput
              handleClick={handleSelect}
              initailValue={initialSelectValue}
              isDisabled
              items={selectItems}
              width="8rem"
            />
          </Flex>
        ) : (
          <Box />
        )}
        <Button maxW="4rem" h="2rem" variant="menuIcon">
          <CustomIcon type={FiGrid} size="7" />
        </Button>
      </Flex>
    </Box>
  )
}

export default SortHeader
