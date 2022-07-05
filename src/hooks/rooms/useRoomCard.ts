import { useState } from 'react'

export const useRoomCard = () => {
  const [styles, setStyles] = useState({
    bg: 'white',
    mTop: '0',
    opacity: 1,
  })

  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = 'move'
    setStyles({
      ...styles,
      bg: 'container.tertiary',
      opacity: 0.3,
    })
  }

  const onDragEnd = (e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setStyles({
      ...styles,
      bg: 'white',
      mTop: '0',
      opacity: 1,
    })
  }

  const onDragLeave = (e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setStyles({
      ...styles,
      mTop: '0',
    })
  }

  const onDragOver = (e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setStyles({
      ...styles,
      mTop: '4.5rem',
    })
  }

  const onDragEnter = (e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setStyles({
      ...styles,
      mTop: '4.5rem',
    })
  }

  const onDrop = () => {
    setStyles({
      ...styles,
      bg: 'white',
      mTop: '0',
      opacity: 1,
    })
  }
  return {
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragStart,
    onDrop,
    styles,
  }
}
