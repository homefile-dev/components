import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { HomeCardWithRecipentI } from '../../interfaces/homeBoard/HomeCardWithRecipent.interface'
import { CustomIcon } from '../icons/CustomIcon'
import { IconMenu } from '../launchpad'
import { RecipientContent } from '../sendDocument/RecipientContent'
import { HomeCard } from './HomeCard'

export const HomeCardWithRecipent = ({
  address: { city, state, street, zip },
  handleEdit,
  image,
  _id,
  menu,
  name,
  recipients,
}: HomeCardWithRecipentI) => {
  return (
    <Container variant="launchpad" maxW="24rem" minW="20rem">
      <HomeCard
        city={city}
        imageUrl={image}
        name={name}
        streetAddress={street}
        state={state}
        zip={zip}
        handleEditClick={() => handleEdit(_id)}
      />

      <Stack p="base" spacing="1">
        {recipients &&
          recipients?.map(({ user }) => (
            <Container p="base" key={user.email}>
              {menu && (
                <Flex justify="space-between" mb="-4" mt="-2">
                  <Box />
                  <IconMenu
                    icon={<CustomIcon type={FiMoreHorizontal} size="7" />}
                    menuItems={menu}
                    itemForm={{
                      _id: user.email,
                      name: user.firstName || '',
                    }}
                  />
                </Flex>
              )}
              <RecipientContent {...user} />
            </Container>
          ))}
      </Stack>
    </Container>
  )
}

export default HomeCardWithRecipent
