import { Box, Button, Center, Flex, IconButton, Stack } from '@chakra-ui/react'
import { t } from 'i18next'
import { AiOutlineMinus } from 'react-icons/ai'
import { BeatLoader } from 'react-spinners'
import { isValidEmail } from '../../helpers/Validations'
import { useAddRecipient } from '../../hooks/sendDocument/useAddRecipient'
import { RecipientTabI } from '../../interfaces/sendDocument/AddRecipient.interface'
import { CustomIcon } from '../icons/CustomIcon'
import { TextInput } from '../inputs'
import { RecipientCard } from './RecipientCard'
import { useEffect } from 'react'
import { SelectInput } from '../inputs/SelectInput'

export const RecipientTab = ({
  handleAdd,
  handleRemove,
  hasTitle,
  isDocument,
  loading,
  recipients: recipientsDB,
}: RecipientTabI) => {
  const {
    accountTypes,
    email,
    errorMessage,
    handleAddLocal,
    handleChange,
    hasError,
    handleRemoveLocal,
    handleSelect,
    isUniqueEmail,
    recipients,
    setHasError,
    setRecipients,
    types,
  } = useAddRecipient()

  useEffect(() => {
    setRecipients(recipientsDB || [])
  }, [recipientsDB])

  return (
    <Box m="-0.8125rem">
      <Box bg="container.tertiary" p="base" w="100%">
        {isDocument ? (
          <Flex w="100%" gap="base">
            <Box w="20rem">
              <TextInput
                errorMessage={errorMessage || t('forms.errorEmail')}
                handleChange={handleChange}
                hasError={hasError}
                id="email"
                placeholder={t('addRecipient.placeholder')}
                value={email}
              />
            </Box>
            <Button
              variant="tertiary"
              onClick={() => {
                if (isValidEmail(email) && isUniqueEmail(email)) {
                  handleAdd({
                    accountTypes,
                    user: { email, firstName: '', lastName: '', phone: '' },
                  })
                  handleAddLocal()
                } else {
                  setHasError(true)
                }
              }}
              disabled={!email}
            >
              {t('addRecipient.addBtn')}
            </Button>
          </Flex>
        ) : (
          <Stack spacing="base">
            <TextInput
              errorMessage={errorMessage || t('forms.errorEmail')}
              handleChange={handleChange}
              hasError={hasError}
              id="email"
              placeholder={t('shareHome.placeholder')}
              value={email}
            />
            <Flex w="100%" gap="base">
              <SelectInput
                handleClick={(form) => handleSelect(form as string)}
                initailValue={accountTypes[0]}
                items={types}
                width="100%"
                height="md"
              />
              <Button
                variant="tertiary"
                onClick={() => {
                  if (isValidEmail(email) && isUniqueEmail(email)) {
                    handleAdd({
                      accountTypes,
                      user: { email, firstName: '', lastName: '', phone: '' },
                    })
                    handleAddLocal()
                  } else {
                    setHasError(true)
                  }
                }}
                disabled={!email}
              >
                {t('shareHome.btInvite')}
              </Button>
            </Flex>
          </Stack>
        )}
      </Box>
      {loading ? (
        <Center h="full" pb="8rem">
          <BeatLoader color="gray" size={8} />
        </Center>
      ) : (
        <Stack p="base" minH="full" w="100%" spacing="base">
          {recipients?.map((recipient, index) => (
            <Flex align="center" gap="2" key={email + index}>
              {recipient && (
                <RecipientCard
                  hasTitle={hasTitle}
                  isDocument={isDocument}
                  recipient={recipient}
                />
              )}
              <Center>
                <IconButton
                  w="2rem"
                  h="2rem"
                  aria-label="Delete recipient"
                  variant="iconOutlined"
                  isDisabled={
                    recipient?.accountTypes[0].toLowerCase() === 'homeowner'
                  }
                  icon={<CustomIcon type={AiOutlineMinus} />}
                  onClick={() => {
                    handleRemove(email)
                    handleRemoveLocal(index)
                  }}
                />
              </Center>
            </Flex>
          ))}
        </Stack>
      )}
    </Box>
  )
}

export default RecipientTab
