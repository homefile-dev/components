import { Box, Button, Flex } from '@chakra-ui/react'
import { FooterButtonsI } from '../../interfaces/footers/FooterButtons.interface'

export const FooterButtons = ({
  button1,
  button2,
  button3,
}: FooterButtonsI) => {
  return (
    <Flex align="center" justifyContent="space-between" w="full" px="base">
      <Flex align="center" gap="2">
        {button1 ? (
          <Button
            variant={button1.buttonStyle}
            onClick={button1.onClick}
            w={button1.width || 'fit-content'}
            disabled={button1.isDisabled}
          >
            {button1.label}
          </Button>
        ) : (
          <Box />
        )}
        {button2 && (
          <Button
            variant={button2.buttonStyle}
            onClick={button2.onClick}
            w={button2.width || 'fit-content'}
            disabled={button2.isDisabled}
          >
            {button2.label}
          </Button>
        )}
      </Flex>
      {button3 && (
        <Button
          variant={button3.buttonStyle}
          onClick={button3.onClick}
          w={button3.width || 'fit-content'}
          disabled={button3.isDisabled}
        >
          {button3.label}
        </Button>
      )}
    </Flex>
  )
}

export default FooterButtons
