import { ChangeEvent, useState } from 'react'
import {
  Container,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react'
import { t } from 'i18next'
import { FiMoreHorizontal } from 'react-icons/fi'
import { ContainerHeader } from '../headers'
import { CustomIcon } from '../icons/CustomIcon'
import { ShareHome as ShareHomeIcon, ShareWith } from '../../assets/images'
import { isValidEmail } from '../../helpers/Validations'
import { TextInput } from '../inputs'
import { SelectInput } from '../inputs/SelectInput'
import { ShareHomeI } from '../../interfaces/shareHome/ShareHome.interface'

export const ShareHome = ({
  associatedAccounts = [],
  handleAdd,
  handleShowAccounts,
}: ShareHomeI) => {
  const [email, setEmail] = useState('')
  const [accountType, setAccountType] = useState('Member')
  const [hasError, setHasError] = useState(false)
  const types = t('shareHome.accountTypes').split(',')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHasError(false)
    setEmail(e.target.value)
  }

  const handleSelect = (value: string) => {
    setAccountType(value)
  }

  return (
    <Container variant="launchpad" h="fit-content" minW="20rem">
      <ContainerHeader
        disabled
        title={t('shareHome.title')}
        titleIcon={ShareHomeIcon}
        menuItems={[]}
        icon={<CustomIcon type={FiMoreHorizontal} size="8" />}
      />
      <Box p="base" w="100%">
        <Stack spacing="base">
          <TextInput
            errorMessage={t('forms.errorEmail')}
            handleChange={handleChange}
            hasError={hasError}
            id="email"
            placeholder={t('shareHome.placeholder')}
            value={email}
          />
          <Flex w="100%" gap="base">
            <SelectInput
              handleClick={(form) => handleSelect(form as string)}
              initailValue={accountType}
              items={types}
              width="100%"
              height="md"
            />
            <Button
              variant="tertiary"
              onClick={() => {
                isValidEmail(email)
                  ? handleAdd({ email, accountType })
                  : setHasError(true)
              }}
              disabled={!email}
            >
              {t('shareHome.btInvite')}
            </Button>
          </Flex>
          <Stack
            spacing="base"
            bg="white"
            border="1px"
            color="input.border"
            py="2"
          >
            <Flex align="center" gap="2" px="base" pt="1">
              <Image src={ShareWith} />
              <Text>{t('shareHome.subtitle')}</Text>
            </Flex>
            <Flex
              px="base"
              align="center"
              justify="space-between"
              gap="2"
              borderTop="1px"
              borderColor="input.border"
              pt="2"
            >
              <Text variant="info" color="font.primary">
                {t('shareHome.connected')}
              </Text>
              <Button
                variant="text"
                fontSize="1.25rem"
                fontFamily="primary"
                onClick={handleShowAccounts}
              >
                {associatedAccounts.length || 0}
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}

export default ShareHome
