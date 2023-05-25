'use client'
import { BiArrowToTop } from 'react-icons/bi'

export function BackToTopButton() {
  return (
    <BiArrowToTop
      className="fixed bottom-0 right-0 h-8 w-8 cursor-pointer mr-4 mb-4"
      onClick={() => document.getElementById('main-content')?.scrollTo(0, 0)}
    >
      Top
    </BiArrowToTop>
  )
}
