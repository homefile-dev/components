import { Box, Button, Text, Container, Stack, Center } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { ChangeEvent, useState } from 'react'
import { Logo, Footer } from '..'
import { isEmptyField } from '../../../helpers/Validations'
import { ButtonLoader } from '../../loaders/ButtonLoader'
import { TwoFactorI } from '../../../interfaces/pages/TwoFactor.interface'
import { TextInput } from '../../inputs'

export const TwoFactor = ({
  handleReset,
  handleResend,
  isLoading,
}: TwoFactorI) => {
  const { t } = useTranslation()

  const [code, setCode] = useState('')
  const [isValidated, setIsValidated] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValidated(false)
    setCode(event.target.value)
  }

  const handleSubmit = () => {
    setIsValidated(true)
    if (!isEmptyField(code)) {
      handleReset(code)
    }
  }

  return (
    <Box w="container.full">
      <Container size="onboarding">
        <Logo />
        <Container variant="ghost" mt="4" mb="6">
          <Text
            variant="title"
            textAlign="center"
            px={['10', '0']}
            noOfLines={[2, 1]}
          >
            {t('reset.2FA.title')}
          </Text>
        </Container>
        <Box
          px={['container.sm', 'container.md', 'container.lg']}
          pb="container.lg"
          mb="6"
        >
          <Stack spacing="8">
            <TextInput
              errorMessage={t('forms.code') + ' ' + t('forms.required')}
              hasError={isValidated && isEmptyField(code)}
              id="code"
              placeholder={t('reset.2FA.placeholder')}
              value={code}
              handleChange={handleInputChange}
            />

            <Button
              isLoading={isLoading}
              spinner={<ButtonLoader />}
              onClick={handleSubmit}
            >
              {t('reset.resetBt')}
            </Button>
            <Center>
              <Button onClick={handleResend} variant="text">
                {t('reset.2FA.resend')}
              </Button>
            </Center>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default TwoFactor
