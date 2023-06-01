import { HiXMark } from 'react-icons/hi2'

interface ModalProps {
  children: any
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}
const Modal = ({ children, isOpen, onOpen, onClose }: ModalProps) => {
  if (!isOpen) return <></>

  return (
    <div className="fixed inset-0 h-screen w-screen z-20 flex items-center justify-center overflow-y-hidden">
      <div
        className="absolute h-full w-full bg-black opacity-50"
        onClick={onClose}
      />
      <div className="flex flex-col rounded-lg max-w-2xl bg-neutral p-4 z-30">
        <HiXMark
          className="h-6 w-6 self-end curso cursor-pointer"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}

export default Modal
