export interface RoomCardI {
  draggable?: boolean
  handleDragStart: (index: number) => void
  handleDrop: (index: number) => void
  icon: string
  index: number
  label: string
}
