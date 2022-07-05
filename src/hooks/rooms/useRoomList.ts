import { useState } from 'react'
import { RoomItemI } from '../../interfaces/rooms/RoomsMenu.interface'

export const useRoomList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [adding, setAdding] = useState(false)
  const [newRooms, setNewRooms] = useState<RoomItemI[]>([])
  const [dragStartIndex, setDragStartIndex] = useState<number | null>(null)
  const [counter, setCounter] = useState(0)

  const handleDragStart = (index: number) => setDragStartIndex(index)

  const handleDrop = (index: number) => {
    const dragItem = newRooms[dragStartIndex!]
    const list = [...newRooms]
    list.splice(dragStartIndex!, 1)

    if (index < dragStartIndex!) {
      setNewRooms([
        ...list.slice(0, index),
        dragItem,
        ...list.slice(index, list.length),
      ])
    } else {
      setNewRooms([
        ...list.slice(0, index - 1),
        dragItem,
        ...list.slice(index - 1, list.length),
      ])
    }
  }

  const handleOpen = () => {
    setCounter(counter + 1)
    counter === 0 && setIsOpen(true)
    counter === 1 && setAdding(true)
    if (counter === 2 ) {
      setAdding(false)
      setIsOpen(false)
      setCounter(0)
    }
  }

  return {
    adding,
    handleDragStart,
    handleDrop,
    handleOpen,
    newRooms,
    isOpen,
    setNewRooms,
  }
}
