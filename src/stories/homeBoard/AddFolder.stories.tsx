import { Drawer, useDisclosure } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect } from 'react'
import AddFolder from '../../components/homeBoard/AddFolder'

export default {
  title: 'Components/HomeBoard',
  component: AddFolder,
} as ComponentMeta<typeof AddFolder>

const Template: ComponentStory<typeof AddFolder> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    onOpen()
  }, [])
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
      <AddFolder handleClose={onClose} />
    </Drawer>
  )
}

export const AddFolderComponent = Template.bind({})
