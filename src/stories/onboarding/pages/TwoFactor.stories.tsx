import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TwoFactor } from '../../../components/onboarding/pages/TwoFactor'

export default {
  title: 'Pages/Onboarding',
  component: TwoFactor,
} as ComponentMeta<typeof TwoFactor>

const Template: ComponentStory<typeof TwoFactor> = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoading = () => {
    setIsLoading(!isLoading)
  }
  return (
    <Box>
      <TwoFactor
        isLoading={isLoading}
        handleReset={handleLoading}
        handleResend={handleLoading}
      />
    </Box>
  )
}

export const TwoFactorPage = Template.bind({})
