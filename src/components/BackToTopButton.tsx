'use client'
import { BiArrowToTop } from 'react-icons/bi'

export function BackToTopButton() {
  return (
    <BiArrowToTop
      className="fixed bottom-0 right-0 h-8 w-8 cursor-pointer mr-2 mb-2"
      onClick={() => window.scrollTo(0, 0)}
    >
      Top
    </BiArrowToTop>
  )
}
