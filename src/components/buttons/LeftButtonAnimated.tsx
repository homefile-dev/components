import { Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { CustomIcon } from '../icons/CustomIcon'

interface LeftButtonAnimatedI {
  bgColor?: string
  handleClick: () => void
  height?: string
  label: string
  position?: ('absolute' | 'relative' | 'fixed') 
  right?: string
}

export const LeftButtonAnimated = ({
  bgColor = "button.primary",
  handleClick,
  height = '1.75rem',
  label,
  position = "relative",
  right
}: LeftButtonAnimatedI) => {
  let isMounted = true
  const labelWidth = label.length * 18 + 20
  const iconWidth = 64
  const [buttonWidth, setButtonWidth] = useState(labelWidth)
  const isCollapsed = buttonWidth === iconWidth

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      isMounted && setButtonWidth(iconWidth)
    }, 2000)
    !isMounted && clearTimeout(timeoutId)
    return () => {
      isMounted = false
    }
  }, [labelWidth])

  return (
    <Button
      h={height}
      variant="leftRounded"
      bg={bgColor}
      w={`${buttonWidth}px`}
      pl={isCollapsed ? '4px' : '0'}
      position={position}
      right={right}
      onMouseEnter={() => setButtonWidth(labelWidth)}
      onMouseLeave={() => setButtonWidth(iconWidth)}
      onClick={handleClick}
    >
      <CustomIcon type={HiOutlinePlus} color="white" size="1.5rem" />
      {!isCollapsed && label}
    </Button>
  )
}
