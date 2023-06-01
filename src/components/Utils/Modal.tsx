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
    <div className="fixed inset-0 h-screen w-screen z-20 flex items-center justify-center overscroll-none">
      <div
        className="absolute h-full w-full bg-black opacity-75"
        onClick={onClose}
      />
      <div className="flex flex-col m-4 rounded-lg max-w-2xl max-h-[80vh] bg-neutral p-4 z-30 bg-gradient-linear overflow-scroll">
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
