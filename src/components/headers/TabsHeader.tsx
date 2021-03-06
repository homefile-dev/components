import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { TabsHeaderI } from '../../interfaces/headers/TabsHeader.interface'

export const TabsHeader = ({ tabList }: TabsHeaderI) => {
  const oneItem = tabList.length === 1
  return (
    <Tabs variant="unstyled">
      <Box bg="container.neutralBlue">
        <TabList
          px={oneItem ? '0' : '4'}
          bg="white"
          w={oneItem ? 'fit-content' : 'full'}
        >
          {tabList?.map(({ label }) => (
            <Tab
              key={label}
              textTransform="uppercase"
              fontWeight="medium"
              fontSize="sm"
              fontFamily="primary"
              color="font.linkHover"
              _hover={{ cursor: 'pointer' }}
              _focus={{ outline: 'none' }}
              _selected={{
                color: 'font.linkSelected',
                borderBottom: '3px solid',
              }}
            >
              {label}
            </Tab>
          ))}
        </TabList>
      </Box>
      <TabPanels>
        {tabList?.map(({ label, component }) => (
          <TabPanel p="base" key={label}>
            {component}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default TabsHeader
