import { Container, Flex, Stack, Box } from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { HomeCardWithRecipentI } from '../../interfaces/homeBoard/HomeCardWithRecipent.interface'
import { CustomIcon } from '../icons/CustomIcon'
import { IconMenu } from '../launchpad'
import { RecipientContent } from '../sendDocument/RecipientContent'
import { RecipientHeader } from '../sendDocument/RecipientHeader'
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
          recipients?.map(({ accountTypes, user }) => {
            const hasAccountType = accountTypes.length > 0
            const oneAccountType = accountTypes.length === 1
            return (
              <Container p="base" key={user.email} position="relative">
                <Flex mb={hasAccountType ? 'base' : '0'}>
                  {hasAccountType && (
                    <RecipientHeader
                      accountType={
                        oneAccountType
                          ? accountTypes[0]
                          : accountTypes.join(', ')
                      }
                    />
                  )}
                  {menu && (
                    <Box position="absolute" top="3px" right="2">
                      <IconMenu
                        icon={<CustomIcon type={FiMoreHorizontal} size="7" />}
                        menuItems={menu}
                        itemForm={{
                          _id: user.email,
                          name: user.firstName || '',
                        }}
                      />
                    </Box>
                  )}
                </Flex>
                <RecipientContent {...user} />
              </Container>
            )
          })}
      </Stack>
    </Container>
  )
}

export default HomeCardWithRecipent
