import { HiXMark } from 'react-icons/hi2'

interface SidebarProps {
  children: any
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ children, isOpen, onClose }: SidebarProps) {
  if (!isOpen) return <></>

  return (
    <div className="fixed inset-0 h-screen w-screen z-20 flex justify-end overscroll-none">
      <div
        className="absolute h-full w-full bg-black opacity-75"
        onClick={onClose}
      />
      <div className="flex flex-col h-full bg-base-200 min-w-[30vw] p-4 z-30 bg-gradient-linear overflow-scroll">
        <HiXMark
          className="h-6 w-6 self-end curso cursor-pointer"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}
